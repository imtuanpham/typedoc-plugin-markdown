"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberBadge = void 0;
/** CSDK START */
/**
 * Generate badges for the @alpha and @beta tags
 *
 * @category Partials
 */
function memberBadge(context, reflection) {
    var _a, _b;
    const md = [];
    if ((_a = reflection === null || reflection === void 0 ? void 0 : reflection.comment) === null || _a === void 0 ? void 0 : _a.modifierTags.has('@alpha')) {
        md.push('<Badge type="alpha" text="Alpha" />');
    }
    if ((_b = reflection === null || reflection === void 0 ? void 0 : reflection.comment) === null || _b === void 0 ? void 0 : _b.modifierTags.has('@beta')) {
        md.push('<Badge type="beta" text="Beta" />');
    }
    return md.join('');
}
exports.memberBadge = memberBadge;
/** CSDK END */
