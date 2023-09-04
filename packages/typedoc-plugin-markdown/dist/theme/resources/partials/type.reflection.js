"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionType = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function reflectionType(context, reflectionType, collapse) {
    const root = reflectionType instanceof typedoc_1.ReflectionType
        ? reflectionType.declaration
        : reflectionType;
    if (root.signatures) {
        return context.functionType(root.signatures);
    }
    return collapse ? (0, elements_1.backTicks)('object') : context.declarationType(root);
}
exports.reflectionType = reflectionType;
