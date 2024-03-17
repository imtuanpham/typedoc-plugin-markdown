"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryType = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function queryType(context, queryType) {
    return `${(0, elements_1.italic)('typeof')} ${context.someType(queryType.queryType)}`;
}
exports.queryType = queryType;
//# sourceMappingURL=type.query.js.map