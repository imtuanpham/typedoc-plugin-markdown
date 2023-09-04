"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someType = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function someType(context, someType, collapse = false) {
    if (!someType) {
        return '';
    }
    if (someType instanceof typedoc_1.ArrayType) {
        return '' + context.arrayType(someType);
    }
    if (someType instanceof typedoc_1.ConditionalType) {
        return '' + context.conditionalType(someType);
    }
    if (someType instanceof typedoc_1.IndexedAccessType) {
        return '' + context.indexAccessType(someType);
    }
    if (someType instanceof typedoc_1.InferredType) {
        return '' + context.inferredType(someType);
    }
    if (someType instanceof typedoc_1.IntersectionType && someType.types) {
        return '' + context.intersectionType(someType);
    }
    if (someType instanceof typedoc_1.IntrinsicType && someType.name) {
        return '' + context.intrinsicType(someType);
    }
    if (someType instanceof typedoc_1.QueryType) {
        return '' + context.queryType(someType);
    }
    if (someType instanceof typedoc_1.ReferenceType) {
        return '' + context.referenceType(someType);
    }
    if (someType instanceof typedoc_1.ReflectionType) {
        return '' + context.reflectionType(someType, collapse);
    }
    if (someType instanceof typedoc_1.TypeOperatorType) {
        return '' + context.typeOperatorType(someType);
    }
    if (someType instanceof typedoc_1.TupleType && someType.elements) {
        return '' + context.tupleType(someType);
    }
    if (someType instanceof typedoc_1.UnionType && someType.types) {
        return context.unionType(someType);
    }
    if (someType instanceof typedoc_1.UnknownType) {
        return '' + context.unknownType(someType);
    }
    if (someType instanceof typedoc_1.NamedTupleMember) {
        return '' + context.namedTupleType(someType);
    }
    if (someType.toString() == 'null') {
        return (0, elements_1.backTicks)('null');
    }
    return /(\||\`)/g.test(someType === null || someType === void 0 ? void 0 : someType.toString())
        ? (0, utils_1.escapeChars)(someType === null || someType === void 0 ? void 0 : someType.toString())
        : (0, elements_1.backTicks)(someType === null || someType === void 0 ? void 0 : someType.toString());
}
exports.someType = someType;
