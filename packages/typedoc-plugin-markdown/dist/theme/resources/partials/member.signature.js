"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureMember = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function signatureMember(context, signature, headingLevel, showSources = true) {
    var _a, _b, _c, _d, _e;
    const md = [];
    if (showSources) {
        if (context.options.getValue('identifiersAsCodeBlocks')) {
            md.push((0, elements_1.codeBlock)(context.signatureMemberIdentifier(signature)));
        }
        else {
            md.push('> ' + context.signatureMemberIdentifier(signature));
        }
    }
    if (signature.comment) {
        md.push(context.comment(signature.comment, headingLevel, true, false));
    }
    const typeDeclaration = (_a = signature.type) === null || _a === void 0 ? void 0 : _a.declaration;
    if ((_b = signature.typeParameters) === null || _b === void 0 ? void 0 : _b.length) {
        md.push((0, elements_1.heading)(headingLevel, 'Type parameters'));
        md.push(context.typeParametersTable(signature.typeParameters));
    }
    if ((_c = signature.parameters) === null || _c === void 0 ? void 0 : _c.length) {
        md.push((0, elements_1.heading)(headingLevel, 'Parameters'));
        md.push(context.parametersTable(signature.parameters));
    }
    if (signature.type) {
        md.push((0, elements_1.heading)(headingLevel, 'Returns'));
        if (!(typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.signatures) && !(typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.children)) {
            md.push(context.someType(signature.type, true));
        }
        if ((_d = signature.comment) === null || _d === void 0 ? void 0 : _d.blockTags.length) {
            const tags = signature.comment.blockTags
                .filter((tag) => tag.tag === '@returns')
                .map((tag) => context.commentParts(tag.content));
            md.push(tags.join('\n\n'));
        }
        if (typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.signatures) {
            typeDeclaration.signatures.forEach((signature) => {
                md.push((0, elements_1.blockQuoteBlock)(context.signatureMember(signature, headingLevel + 1)));
            });
        }
        const hasParent = (_e = typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.parent) === null || _e === void 0 ? void 0 : _e.kindOf(typedoc_1.ReflectionKind.Property);
        if (typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.children) {
            md.push(context.typeDeclarationMember(typeDeclaration, headingLevel + 1, hasParent ? signature.name : undefined, false));
        }
    }
    md.push(context.inheritance(signature, headingLevel));
    if (showSources && signature.sources) {
        md.push(context.sources(signature, headingLevel));
    }
    if (signature.comment) {
        md.push(context.comment(signature.comment, headingLevel, false, true));
    }
    return md.join('\n\n');
}
exports.signatureMember = signatureMember;
