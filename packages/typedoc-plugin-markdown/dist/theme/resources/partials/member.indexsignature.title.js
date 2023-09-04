"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexSignatureTitle = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function indexSignatureTitle(context, signature) {
    const md = [''];
    const params = signature.parameters
        ? signature.parameters.map((parameter) => {
            return parameter.type
                ? `${(0, elements_1.backTicks)(parameter.name)}: ${context.someType(parameter.type)}`
                : '';
        })
        : [];
    if (signature.type) {
        md.push(`\\[${params.join('')}\\]: ${context.someType(signature.type)}`);
    }
    return md.join(' ');
}
exports.indexSignatureTitle = indexSignatureTitle;
