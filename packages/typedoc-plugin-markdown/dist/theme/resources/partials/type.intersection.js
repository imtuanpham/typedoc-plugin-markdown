"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectionType = void 0;
/**
 * @category Partials
 */
function intersectionType(context, model) {
    return model.types
        .map((intersectionType) => context.someType(intersectionType))
        .join(' & ');
}
exports.intersectionType = intersectionType;
