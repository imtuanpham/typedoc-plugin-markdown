"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationType = void 0;
const elements_1 = require("../../../support/elements");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function declarationType(context, declarationReflection, collapse = false) {
    if (collapse) {
        return (0, elements_1.backTicks)('object');
    }
    if (declarationReflection.indexSignature || declarationReflection.children) {
        let indexSignature = '';
        const declarationIndexSignature = declarationReflection.indexSignature;
        if (declarationIndexSignature) {
            const key = declarationIndexSignature.parameters
                ? declarationIndexSignature.parameters.map((param) => `\`[${param.name}: ${param.type}]\``)
                : '';
            const obj = context.someType(declarationIndexSignature.type);
            indexSignature = `${key}: ${obj}; `;
        }
        const types = declarationReflection.children &&
            declarationReflection.children.map((obj, index) => {
                const name = [];
                if (Boolean(obj.getSignature || Boolean(obj.setSignature))) {
                    name.push(context.declarationMemberAccessor(obj));
                }
                else {
                    name.push((0, elements_1.backTicks)(obj.name));
                }
                const theType = (0, helpers_1.getDeclarationType)(obj);
                const typeString = context.someType(theType);
                return `${name.join(' ')}: ${indentBlock(typeString)};\n `;
            });
        if (indexSignature) {
            types === null || types === void 0 ? void 0 : types.unshift(indexSignature);
        }
        return types ? `\\{\n  ${types.join(' ')}}` : '\\{}';
    }
    return '\\{}';
}
exports.declarationType = declarationType;
function indentBlock(content) {
    const lines = content.split('\n');
    return lines
        .filter((line) => Boolean(line.length))
        .map((line, i) => {
        if (i === 0) {
            return line;
        }
        if (i === lines.length - 1) {
            return ` ${line}`;
        }
        return `  ${line}`;
    })
        .join('\n');
}
//# sourceMappingURL=type.declaration.js.map