"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumMembersTable = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function enumMembersTable(context, props) {
    const comments = props.map((param) => { var _a; return !!((_a = param.comment) === null || _a === void 0 ? void 0 : _a.hasVisibleComponent()); });
    const hasComments = comments.some((value) => Boolean(value));
    const headers = ['Member', 'Value'];
    if (hasComments) {
        headers.push('Description');
    }
    const rows = props.map((property) => {
        const propertyType = (0, helpers_1.getDeclarationType)(property);
        const row = [];
        row.push((0, elements_1.backTicks)(property.name));
        if (propertyType) {
            row.push((0, utils_1.stripLineBreaks)((0, elements_1.backTicks)(context.someType(propertyType, true))));
        }
        if (hasComments) {
            const comments = getComments(property);
            if (comments) {
                row.push((0, utils_1.stripLineBreaks)(context.comment(comments)).replace(/\|/g, '\\|'));
            }
            else {
                row.push('-');
            }
        }
        return `| ${row.join(' | ')} |\n`;
    });
    const output = `\n| ${headers.join(' | ')} |\n| ${headers
        .map(() => ':------')
        .join(' | ')} |\n${rows.join('')}`;
    return output;
}
exports.enumMembersTable = enumMembersTable;
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
//# sourceMappingURL=table.enum-members.js.map