"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceMember = void 0;
/**
 * @category Partials
 */
function referenceMember(context, props) {
    const referenced = props.tryGetTargetReflectionDeep();
    if (!referenced) {
        return `Re-exports ${props.name}`;
    }
    if (props.name === referenced.name) {
        return `Re-exports [${referenced.name}](${context.urlTo(referenced)})`;
    }
    return `Renames and re-exports [${referenced.name}](${context.urlTo(referenced)})`;
}
exports.referenceMember = referenceMember;
//# sourceMappingURL=member.reference.js.map