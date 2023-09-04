"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertiesTable = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function propertiesTable(context, props, nameCol = 'Property') {
    const comments = props.map((param) => { var _a; return !!((_a = param.comment) === null || _a === void 0 ? void 0 : _a.hasVisibleComponent()); });
    const hasComments = comments.some((value) => Boolean(value));
    const inheritance = props.map((reflection) => Boolean(reflection.overwrites) || Boolean(reflection.inheritedFrom));
    const hasInheritance = inheritance.some((value) => Boolean(value));
    const hasSources = !context.options.getValue('disableSources');
    const headers = [];
    headers.push(nameCol);
    headers.push('Type');
    if (hasComments) {
        headers.push('Description');
    }
    if (hasInheritance) {
        headers.push('Inheritance');
    }
    if (hasSources) {
        headers.push('Source');
    }
    const flattenParams = (current) => {
        var _a, _b, _c;
        return (_c = (_b = (_a = current.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.reduce((acc, child) => {
            const childObj = {
                ...child,
                name: `${current.name}.${child.name}`,
            };
            return parseParams(childObj, acc);
        }, []);
    };
    const parseParams = (current, acc) => {
        var _a, _b;
        const shouldFlatten = (_b = (_a = current.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.children;
        return shouldFlatten
            ? [...acc, current, ...flattenParams(current)]
            : [...acc, current];
    };
    const properties = props.reduce((acc, current) => parseParams(current, acc), []);
    const rows = [];
    properties.forEach((property) => {
        const propertyType = (0, helpers_1.getDeclarationType)(property);
        const row = [];
        const nameColumn = [];
        if (context.options.getValue('namedAnchors') && property.anchor) {
            nameColumn.push(`<a id="${property.anchor}" name="${property.anchor}"></a>`);
        }
        if (property.flags.length) {
            nameColumn.push(property.flags
                .filter((flag) => flag !== 'Optional')
                .map((flag) => (0, elements_1.bold)((0, elements_1.backTicks)(flag.toLowerCase())))
                .join(' '));
        }
        if (Boolean(property.getSignature || Boolean(property.setSignature))) {
            nameColumn.push(context.declarationMemberAccessor(property));
        }
        else {
            nameColumn.push(`${(0, elements_1.backTicks)(`${property.name}${property.flags.isOptional ? '?' : ''}`)}`);
        }
        row.push(nameColumn.join(' '));
        if (propertyType) {
            row.push(context.someType(propertyType, true));
        }
        if (hasComments) {
            const comments = getComments(property);
            if (comments) {
                row.push((0, utils_1.stripLineBreaks)((0, utils_1.tableComments)(context.comment(comments))));
            }
            else {
                row.push('-');
            }
        }
        if (hasInheritance) {
            row.push(context.inheritance(property, -1) || '-');
        }
        if (hasSources) {
            row.push(context.sources(property, -1));
        }
        rows.push(row);
    });
    return (0, elements_1.table)(headers, rows);
}
exports.propertiesTable = propertiesTable;
function getComments(property) {
    var _a, _b, _c;
    if (property.type instanceof typedoc_1.ReflectionType) {
        if ((_b = (_a = property.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.signatures) {
            return (_c = property.type) === null || _c === void 0 ? void 0 : _c.declaration.signatures[0].comment;
        }
    }
    if (property.signatures) {
        return property.signatures[0].comment;
    }
    return property.comment;
}
