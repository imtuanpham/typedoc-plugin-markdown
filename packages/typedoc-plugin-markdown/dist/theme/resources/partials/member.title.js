"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberTitle = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function memberTitle(context, reflection, typeParams = false) {
    const md = [];
    md.push(`${(0, utils_1.escapeChars)(reflection.name)}`);
    if (typeParams && reflection.typeParameters) {
        const typeParameters = reflection.typeParameters
            .map((typeParameter) => typeParameter.name)
            .join(', ');
        md.push(`${(0, elements_1.backTicks)(`<${typeParameters}>`)}`);
    }
    return md.join('');
}
exports.memberTitle = memberTitle;
