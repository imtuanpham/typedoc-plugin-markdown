"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionMember = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function reflectionMember(context, reflection, headingLevel) {
    const md = [];
    if (reflection.flags.isAbstract) {
        md.push((0, elements_1.bold)((0, elements_1.backTicks)('abstract')));
    }
    if (reflection.comment) {
        md.push(context.comment(reflection.comment, headingLevel));
    }
    /** CSDK START */
    // Disable type hierarchy
    // if (reflection.typeHierarchy?.next) {
    //   md.push(context.memberHierarchy(reflection.typeHierarchy, headingLevel));
    // }
    /** CSDK END */
    if (!reflection.kindOf(typedoc_1.ReflectionKind.Class) && reflection.typeParameters) {
        md.push((0, elements_1.heading)(headingLevel, 'Type parameters'));
        md.push(context.typeParametersTable(reflection.typeParameters));
    }
    if (reflection.implementedTypes) {
        md.push((0, elements_1.heading)(headingLevel, 'Implements'));
        md.push((0, elements_1.unorderedList)(reflection.implementedTypes.map((implementedType) => context.someType(implementedType))));
    }
    if ('signatures' in reflection && reflection.signatures) {
        reflection.signatures.forEach((signature) => {
            md.push(context.signatureMember(signature, headingLevel));
        });
    }
    if ('indexSignature' in reflection && reflection.indexSignature) {
        md.push((0, elements_1.heading)(headingLevel, 'Indexable'));
        md.push(context.indexSignatureTitle(reflection.indexSignature));
    }
    if ((0, helpers_1.hasIndex)(reflection) || (0, helpers_1.hasTOC)(reflection, context.options)) {
        md.push((0, elements_1.heading)(headingLevel, 'Index'));
        md.push(context.reflectionIndex(reflection, headingLevel + 1));
    }
    md.push(context.members(reflection, headingLevel));
    return md.join('\n\n');
}
exports.reflectionMember = reflectionMember;
//# sourceMappingURL=member.reflection.js.map