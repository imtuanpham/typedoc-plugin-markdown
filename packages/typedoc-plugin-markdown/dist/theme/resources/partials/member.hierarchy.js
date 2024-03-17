"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberHierarchy = void 0;
const elements_1 = require("../../../support/elements");
function memberHierarchy(context, declarationHierarchy, headingLevel) {
    const md = [];
    const parent = !declarationHierarchy.isTarget
        ? declarationHierarchy.types
            .map((hierarchyType) => {
            return getHierarchyType(hierarchyType, declarationHierarchy.isTarget || false, context);
        })
            .join('.')
        : null;
    if (declarationHierarchy.next) {
        if (parent) {
            md.push((0, elements_1.heading)(headingLevel, 'Extends'));
            md.push(`- ${parent}`);
        }
        else {
            md.push((0, elements_1.heading)(headingLevel, 'Extended By'));
            const lines = [];
            declarationHierarchy.next.types.forEach((hierarchyType) => {
                var _a;
                lines.push(getHierarchyType(hierarchyType, ((_a = declarationHierarchy.next) === null || _a === void 0 ? void 0 : _a.isTarget) || false, context));
            });
            md.push((0, elements_1.unorderedList)(lines));
        }
    }
    return md.join('\n\n');
}
exports.memberHierarchy = memberHierarchy;
function getHierarchyType(hierarchyType, isTarget, context) {
    return isTarget
        ? (0, elements_1.bold)((0, elements_1.backTicks)(hierarchyType.toString()))
        : context.someType(hierarchyType);
}
//# sourceMappingURL=member.hierarchy.js.map