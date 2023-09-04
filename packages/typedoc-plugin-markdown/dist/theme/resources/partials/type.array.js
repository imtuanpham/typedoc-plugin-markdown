"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayType = void 0;
/**
 * @category Partials
 */
function arrayType(context, arrayType) {
    const theType = context.someType(arrayType.elementType);
    return arrayType.elementType.type === 'union'
        ? `(${theType})[]`
        : `${theType}[]`;
}
exports.arrayType = arrayType;
