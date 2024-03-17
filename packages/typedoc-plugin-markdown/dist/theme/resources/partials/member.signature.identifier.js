"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureMemberIdentifier = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function signatureMemberIdentifier(context, signature) {
    var _a, _b, _c, _d;
    const md = [];
    if ((_a = signature.parent) === null || _a === void 0 ? void 0 : _a.getSignature) {
        md.push('get ');
    }
    if ((_b = signature.parent) === null || _b === void 0 ? void 0 : _b.setSignature) {
        md.push('set ');
    }
    if (signature.parent && ((_c = signature.parent.flags) === null || _c === void 0 ? void 0 : _c.length) > 0) {
        md.push(signature.parent.flags
            .map((flag) => `\`${flag.toLowerCase()}\``)
            .join(' ') + ' ');
    }
    if (!['__call', '__type'].includes(signature.name)) {
        md.push((0, elements_1.bold)((0, utils_1.escapeChars)(signature.name)));
    }
    if (signature.typeParameters) {
        md.push(`<${signature.typeParameters
            .map((typeParameter) => (0, elements_1.backTicks)(typeParameter.name))
            .join(', ')}>`);
    }
    const getParameters = (parameters = []) => {
        const firstOptionalParamIndex = parameters.findIndex((parameter) => parameter.flags.isOptional);
        return parameters
            .map((param, i) => {
            const paramsmd = [parameters.length > 2 ? '\n  ' : ''];
            if (param.flags.isRest) {
                paramsmd.push('...');
            }
            const paramItem = `${(0, elements_1.backTicks)(param.name)}${param.flags.isOptional ||
                (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
                ? '?'
                : ''}`;
            paramsmd.push(paramItem);
            if (param.defaultValue) {
                paramsmd.push(` = ${(0, elements_1.backTicks)(param.defaultValue)}`);
            }
            return paramsmd.join('');
        })
            .join(`,${parameters.length > 2 ? '' : ' '}`);
    };
    md.push(signature.parameters && ((_d = signature.parameters) === null || _d === void 0 ? void 0 : _d.length) > 0
        ? `(${getParameters(signature.parameters)})`
        : '()');
    if (signature.type) {
        md.push(`: ${context.someType(signature.type, true)}`);
    }
    return md.join('');
}
exports.signatureMemberIdentifier = signatureMemberIdentifier;
//# sourceMappingURL=member.signature.identifier.js.map