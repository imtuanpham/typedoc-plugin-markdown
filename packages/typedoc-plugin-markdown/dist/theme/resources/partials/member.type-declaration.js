"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDeclarationMember = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function typeDeclarationMember(context, typeDeclaration, headingLevel, parentName, dividers = true) {
    const md = [];
    if (typeDeclaration.children) {
        if (context.options.getValue('typeDeclarationFormat') === 'table') {
            md.push(context.propertiesTable(typeDeclaration.children, 'Member'));
        }
        else {
            const list = typeDeclaration.children.map((declarationChild) => {
                return [
                    (0, elements_1.heading)(headingLevel, (0, elements_1.backTicks)([(0, utils_1.escapeChars)(parentName || ''), declarationChild.name]
                        .filter((name) => Boolean(name))
                        .join('.'))),
                    context.declarationMember(declarationChild, headingLevel + 1, true),
                ].join('\n\n');
            });
            const output = list.join(!parentName && dividers ? '\n\n***\n\n' : '');
            if (parentName) {
                md.push((0, elements_1.blockQuoteBlock)(output));
            }
            else {
                md.push(output);
            }
        }
    }
    return md.join('\n');
}
exports.typeDeclarationMember = typeDeclarationMember;
//# sourceMappingURL=member.type-declaration.js.map