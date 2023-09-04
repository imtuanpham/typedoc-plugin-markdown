"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOperatorType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function typeOperatorType(context, model) {
    return `${(0, elements_1.italic)(model.operator)} ${context.someType(model.target)}`;
}
exports.typeOperatorType = typeOperatorType;
