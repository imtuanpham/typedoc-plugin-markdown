"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationMemberIdentifier = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function declarationMemberIdentifier(context, reflection) {
    var _a, _b;
    const md = [];
    const useCodeBlocks = context.options.getValue('identifiersAsCodeBlocks');
    const declarationType = (0, helpers_1.getDeclarationType)(reflection);
    if (((_a = reflection.flags) === null || _a === void 0 ? void 0 : _a.length) &&
        !reflection.flags.isRest &&
        !reflection.flags.isOptional) {
        md.push(reflection.flags
            .map((flag) => (0, elements_1.bold)((0, elements_1.backTicks)(flag.toLowerCase())))
            .join(' '));
    }
    if (reflection.kindOf(typedoc_1.ReflectionKind.Variable) && !reflection.flags.isConst) {
        md.push((0, elements_1.backTicks)('let'));
    }
    if (reflection.flags.isRest) {
        md.push('...');
    }
    const name = [];
    if (Boolean(reflection.getSignature || Boolean(reflection.setSignature))) {
        name.push(context.declarationMemberAccessor(reflection));
    }
    else {
        name.push((0, elements_1.bold)(reflection.name.startsWith('<')
            ? (0, elements_1.backTicks)(reflection.name)
            : (0, utils_1.escapeChars)(reflection.name)));
    }
    if (reflection.flags.isOptional) {
        name.push('?');
    }
    if (declarationType) {
        name.push(':');
    }
    md.push(name.join(''));
    if (reflection.typeParameters) {
        md.push(`<${(_b = reflection.typeParameters) === null || _b === void 0 ? void 0 : _b.map((typeParameter) => (0, elements_1.backTicks)(typeParameter.name)).join(', ')}>`);
    }
    if (declarationType) {
        md.push(`${context.someType(declarationType, !useCodeBlocks)}`);
    }
    if (reflection.defaultValue && reflection.defaultValue !== '...') {
        md.push(`= \`${(0, utils_1.stripLineBreaks)((0, utils_1.stripComments)(reflection.defaultValue))}\``);
    }
    return md.join(' ');
}
exports.declarationMemberIdentifier = declarationMemberIdentifier;
