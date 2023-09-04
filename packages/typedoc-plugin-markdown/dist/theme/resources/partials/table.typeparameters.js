"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeParametersTable = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function typeParametersTable(context, typeParameters) {
    const hasDefault = typeParameters.some((typeParameter) => Boolean(typeParameter.default));
    const hasComments = typeParameters.some((typeParameter) => Boolean(typeParameter.comment));
    const headers = ['Parameter'];
    if (hasDefault) {
        headers.push('Default');
    }
    if (hasComments) {
        headers.push('Description');
    }
    const rows = [];
    typeParameters === null || typeParameters === void 0 ? void 0 : typeParameters.forEach((typeParameter) => {
        const row = [];
        const nameCol = [];
        nameCol.push((0, elements_1.backTicks)(typeParameter.name));
        if (typeParameter.type) {
            nameCol.push(`${(0, elements_1.italic)('extends')} ${context.someType(typeParameter.type)}`);
        }
        row.push(nameCol.join(' '));
        if (hasDefault) {
            if (typeParameter.default) {
                row.push(context.someType(typeParameter.default));
            }
            else {
                row.push('-');
            }
        }
        if (hasComments) {
            if (typeParameter.comment) {
                row.push((0, utils_1.stripLineBreaks)((0, utils_1.tableComments)(context.comment(typeParameter.comment))));
            }
            else {
                row.push('-');
            }
        }
        rows.push(row);
    });
    return (0, elements_1.table)(headers, rows);
}
exports.typeParametersTable = typeParametersTable;
