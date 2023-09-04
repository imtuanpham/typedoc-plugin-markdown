"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditionalType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function conditionalType(context, conditionalType) {
    const md = [];
    if (conditionalType.checkType) {
        md.push(context.someType(conditionalType.checkType));
    }
    md.push((0, elements_1.italic)('extends'));
    if (conditionalType.extendsType) {
        md.push(context.someType(conditionalType.extendsType));
    }
    md.push('?');
    if (conditionalType.trueType) {
        md.push(context.someType(conditionalType.trueType));
    }
    md.push(':');
    if (conditionalType.falseType) {
        md.push(context.someType(conditionalType.falseType));
    }
    return md.join(' ');
}
exports.conditionalType = conditionalType;
