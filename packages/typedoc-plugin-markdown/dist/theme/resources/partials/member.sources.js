"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sources = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function sources(context, reflection, headingLevel) {
    var _a;
    const md = [];
    if (headingLevel !== -1) {
        md.push((0, elements_1.heading)(headingLevel, 'Source'));
    }
    (_a = reflection.sources) === null || _a === void 0 ? void 0 : _a.forEach((source) => {
        if (source.url) {
            md.push((0, elements_1.link)(`${(0, utils_1.escapeChars)(source.fileName)}:${source.line}`, source.url));
        }
        else {
            md.push(`${(0, utils_1.escapeChars)(source.fileName)}:${source.line}`);
        }
    });
    return md.join('\n\n');
}
exports.sources = sources;
