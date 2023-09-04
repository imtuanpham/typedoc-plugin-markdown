"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tupleType = void 0;
/**
 * @category Partials
 */
function tupleType(context, tupleType) {
    return `[${tupleType.elements
        .map((element) => context.someType(element))
        .join(', ')}]`;
}
exports.tupleType = tupleType;
