"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionType = void 0;
/**
 * @category Partials
 */
function unionType(context, unionType) {
    return unionType.types
        .map((unionType) => context.someType(unionType))
        .join(` \\| `);
}
exports.unionType = unionType;
//# sourceMappingURL=type.union.js.map