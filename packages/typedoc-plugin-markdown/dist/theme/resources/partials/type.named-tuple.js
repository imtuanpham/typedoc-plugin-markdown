"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namedTupleType = void 0;
/**
 * @category Partials
 */
function namedTupleType(context, member) {
    return context.someType(member.element);
}
exports.namedTupleType = namedTupleType;
