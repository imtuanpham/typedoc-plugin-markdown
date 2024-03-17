"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarationMemberAccessor = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Partials
 */
function declarationMemberAccessor(context, declaration) {
    var _a;
    if (declaration.getSignature) {
        return `${(0, elements_1.backTicks)('get')} ${`${declaration.getSignature.name}()`}`;
    }
    else if (declaration.setSignature) {
        return `${(0, elements_1.backTicks)('set')} ${declaration.setSignature.name}(${(_a = declaration.setSignature.parameters) === null || _a === void 0 ? void 0 : _a.map((parameter) => {
            return parameter.type
                ? `${(0, elements_1.backTicks)(parameter.name)}: ${context.someType(parameter.type, true)}`
                : '';
        })})`;
    }
    return '';
}
exports.declarationMemberAccessor = declarationMemberAccessor;
//# sourceMappingURL=member.declaration.accessort.js.map