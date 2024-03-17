"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.member = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function member(context, reflection, headingLevel) {
    const md = [];
    if (context.options.getValue('namedAnchors')) {
        md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
    }
    if (!reflection.hasOwnDocument) {
        md.push((0, elements_1.heading)(headingLevel, context.memberTitle(reflection)));
    }
    const getMember = (reflection) => {
        var _a;
        if (reflection.kindOf([
            typedoc_1.ReflectionKind.Class,
            typedoc_1.ReflectionKind.Interface,
            typedoc_1.ReflectionKind.Enum,
        ])) {
            return context.reflectionMember(reflection, headingLevel + 1);
        }
        if (reflection.signatures) {
            return (_a = reflection.signatures) === null || _a === void 0 ? void 0 : _a.map((signature) => {
                return context.signatureMember(signature, headingLevel + 1);
            }).join('\n\n');
        }
        if (reflection.getSignature) {
            return context.signatureMember(reflection.getSignature, headingLevel + 1);
        }
        if (reflection.setSignature) {
            return context.signatureMember(reflection.setSignature, headingLevel + 1);
        }
        if (reflection instanceof typedoc_1.ReferenceReflection) {
            return context.referenceMember(reflection);
        }
        return context.declarationMember(reflection, headingLevel + 1);
    };
    const member = getMember(reflection);
    if (member) {
        md.push(member);
    }
    return md.join('\n\n');
}
exports.member = member;
//# sourceMappingURL=member.js.map