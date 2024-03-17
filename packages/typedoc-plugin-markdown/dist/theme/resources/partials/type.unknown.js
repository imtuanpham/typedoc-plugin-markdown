"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function unknownType(context, model) {
    return (0, elements_1.backTicks)(model.name);
}
exports.unknownType = unknownType;
//# sourceMappingURL=type.unknown.js.map