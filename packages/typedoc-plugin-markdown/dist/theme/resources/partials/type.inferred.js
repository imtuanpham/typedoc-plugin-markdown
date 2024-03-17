"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferredType = void 0;
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function inferredType(context, model) {
    return `infer ${(0, utils_1.escapeChars)(model.name)}`;
}
exports.inferredType = inferredType;
//# sourceMappingURL=type.inferred.js.map