"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intrinsicType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function intrinsicType(context, model) {
    return (0, elements_1.backTicks)(model.name);
}
exports.intrinsicType = intrinsicType;
