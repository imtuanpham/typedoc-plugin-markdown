"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function functionType(context, modelSignatures) {
    const functions = modelSignatures.map((fn) => {
        const typeParams = fn.typeParameters
            ? `<${fn.typeParameters
                .map((typeParameter) => (0, elements_1.backTicks)(typeParameter.name))
                .join(', ')}>`
            : [];
        const params = fn.parameters
            ? fn.parameters.map((param) => {
                return `${param.flags.isRest ? '...' : ''}${(0, elements_1.backTicks)(param.name)}${param.flags.isOptional ? '?' : ''}`;
            })
            : [];
        const returns = context.someType(fn.type);
        return typeParams + `(${params.join(', ')}) => ${returns}`;
    });
    return functions.join('');
}
exports.functionType = functionType;
