"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parametersTable = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function parametersTable(context, parameters) {
    const parseParams = (current, acc) => {
        var _a, _b, _c, _d;
        const shouldFlatten = ((_b = (_a = current.type) === null || _a === void 0 ? void 0 : _a.declaration) === null || _b === void 0 ? void 0 : _b.kind) === typedoc_1.ReflectionKind.TypeLiteral &&
            ((_d = (_c = current.type) === null || _c === void 0 ? void 0 : _c.declaration) === null || _d === void 0 ? void 0 : _d.children);
        return shouldFlatten
            ? [...acc, current, ...flattenParams(current)]
            : [...acc, current];
    };
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
    const showDefaults = hasDefaultValues(parameters);
    const parsedParams = parameters.reduce((acc, current) => parseParams(current, acc), []);
    const hasComments = parsedParams.some((param) => Boolean(param.comment));
    const headers = ['Parameter', 'Type'];
    if (showDefaults) {
        headers.push('Default value');
    }
    if (hasComments) {
        headers.push('Description');
    }
    const firstOptionalParamIndex = parameters.findIndex((parameter) => parameter.flags.isOptional);
    const rows = [];
    parsedParams.forEach((parameter, i) => {
        const row = [];
        const isOptional = parameter.flags.isOptional ||
            (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);
        const rest = parameter.flags.isRest ? '...' : '';
        const optional = isOptional ? '?' : '';
        row.push(`${rest}${(0, elements_1.backTicks)(parameter.name)}${optional}`);
        if (parameter.type) {
            row.push((0, utils_1.stripLineBreaks)(context.someType(parameter.type, true)));
        }
        if (showDefaults) {
            row.push(getDefaultValue(parameter));
        }
        if (hasComments) {
            if (parameter.comment) {
                row.push((0, utils_1.stripLineBreaks)((0, utils_1.tableComments)(context.comment(parameter.comment))));
            }
            else {
                row.push('-');
            }
        }
        rows.push(row);
    });
    return (0, elements_1.table)(headers, rows);
}
exports.parametersTable = parametersTable;
function getDefaultValue(parameter) {
    return parameter.defaultValue && parameter.defaultValue !== '...'
        ? (0, elements_1.backTicks)(parameter.defaultValue)
        : (0, elements_1.backTicks)('undefined');
}
function hasDefaultValues(parameters) {
    const defaultValues = parameters.map((param) => param.defaultValue !== '{}' &&
        param.defaultValue !== '...' &&
        !!param.defaultValue);
    return !defaultValues.every((value) => !value);
}
//# sourceMappingURL=table.parameters.js.map