"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageIndex = void 0;
const path = __importStar(require("path"));
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function pageIndex(context, page, headingLevel) {
    var _a;
    const md = [];
    if (!page.model.groups) {
        md.push((0, elements_1.heading)(headingLevel, 'Packages'));
        const packagesList = (_a = page.model.children) === null || _a === void 0 ? void 0 : _a.map((projectPackage) => {
            return `- [${(0, utils_1.escapeChars)(projectPackage.name)}](${context.relativeURL(Boolean(projectPackage.readme)
                ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue('entryFileName')}`
                : projectPackage.url)})`;
        });
        md.push((packagesList === null || packagesList === void 0 ? void 0 : packagesList.join('\n')) || '');
        return md.join('\n\n');
    }
    if ((0, helpers_1.hasIndex)(page.model)) {
        md.push(context.reflectionIndex(page.model, headingLevel));
        return md.join('\n\n');
    }
    return md.join('\n\n');
}
exports.pageIndex = pageIndex;
