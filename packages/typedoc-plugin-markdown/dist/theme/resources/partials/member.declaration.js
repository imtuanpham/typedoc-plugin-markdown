"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationMember = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function declarationMember(context, declaration, headingLevel, nested = false) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const md = [];
    const useCodeBlocks = context.options.getValue('identifiersAsCodeBlocks');
    const typeDeclaration = (_a = declaration.type) === null || _a === void 0 ? void 0 : _a.declaration;
    if (useCodeBlocks) {
        md.push((0, elements_1.codeBlock)(context.declarationMemberIdentifier(declaration)));
    }
    else {
        md.push(`${!nested ? '> ' : ''}${context.declarationMemberIdentifier(declaration)}`);
    }
    if (declaration.comment) {
        md.push(context.comment(declaration.comment, headingLevel));
    }
    if (declaration.type instanceof typedoc_1.IntersectionType) {
        (_c = (_b = declaration.type) === null || _b === void 0 ? void 0 : _b.types) === null || _c === void 0 ? void 0 : _c.forEach((intersectionType) => {
            if (intersectionType instanceof typedoc_1.ReflectionType) {
                md.push(context.typeDeclarationMember(intersectionType.declaration, headingLevel, declaration.name));
            }
        });
    }
    if (declaration.typeParameters) {
        md.push((0, elements_1.heading)(headingLevel, 'Type parameters'));
        md.push(context.typeParametersTable(declaration.typeParameters));
    }
    if (typeDeclaration) {
        const hasParent = (_d = typeDeclaration.parent) === null || _d === void 0 ? void 0 : _d.kindOf(typedoc_1.ReflectionKind.Property);
        if (typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.indexSignature) {
            md.push((0, elements_1.heading)(headingLevel, `Index signature`));
            md.push(context.indexSignatureTitle(typeDeclaration.indexSignature));
        }
        if (((_e = typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.signatures) === null || _e === void 0 ? void 0 : _e.length) ||
            ((_f = typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.children) === null || _f === void 0 ? void 0 : _f.length)) {
            if ((_g = typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.signatures) === null || _g === void 0 ? void 0 : _g.length) {
                typeDeclaration.signatures.forEach((signature) => {
                    md.push(context.signatureMember(signature, headingLevel, false));
                });
            }
            if (((_h = typeDeclaration === null || typeDeclaration === void 0 ? void 0 : typeDeclaration.children) === null || _h === void 0 ? void 0 : _h.length) && !useCodeBlocks) {
                if (!nested) {
                    md.push((0, elements_1.heading)(headingLevel, 'Type declaration'));
                }
                md.push(context.typeDeclarationMember(typeDeclaration, nested ? headingLevel : headingLevel + 1, hasParent ? declaration.name : undefined));
            }
        }
    }
    md.push(context.inheritance(declaration, headingLevel));
    if (!nested && declaration.sources) {
        md.push(context.sources(declaration, headingLevel));
    }
    return md.join('\n\n');
}
exports.declarationMember = declarationMember;
