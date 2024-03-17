"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberBadge = void 0;
/** CSDK START */
function hasTag(reflection, tag) {
    var _a, _b, _c;
    // Functions store modifiers in the signature, so we need to check the first signature
    return ((_a = reflection === null || reflection === void 0 ? void 0 : reflection.comment) === null || _a === void 0 ? void 0 : _a.modifierTags.has(`@${tag}`))
        || ((_c = (_b = reflection === null || reflection === void 0 ? void 0 : reflection.signatures) === null || _b === void 0 ? void 0 : _b[0].comment) === null || _c === void 0 ? void 0 : _c.modifierTags.has(`@${tag}`))
        || false;
}
/**
 * Generate badges for the @alpha and @beta tags
 *
 * @category Partials
 */
function memberBadge(context, reflection) {
    const md = [];
    if (hasTag(reflection, 'alpha')) {
        md.push(' <Badge type="alpha" text="Alpha" />');
    }
    if (hasTag(reflection, 'beta')) {
        md.push(' <Badge type="beta" text="Beta" />');
    }
    return md.join('');
}
exports.memberBadge = memberBadge;
/** CSDK END */
//# sourceMappingURL=member.badge.js.map