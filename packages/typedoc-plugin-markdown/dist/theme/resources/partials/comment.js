"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * @category Partials
 */
function comment(context, comment, headingLevel, showSummary = true, showTags = true) {
    var _a, _b;
    const md = [];
    if (showSummary && ((_a = comment.summary) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        md.push(context.commentParts(comment.summary));
    }
    if (showTags && ((_b = comment.blockTags) === null || _b === void 0 ? void 0 : _b.length)) {
        const tags = comment.blockTags
            .filter((tag) => tag.tag !== '@returns')
            .map((tag) => {
            const tagName = tag.tag.substring(1);
            const tagText = (0, utils_1.camelToTitleCase)(tagName);
            /** CSDK START */
            if (tagName === 'deprecated') {
                const tagDeprecated = [
                    '::: warning Deprecated',
                ];
                tagDeprecated.push(context.commentParts(tag.content));
                tagDeprecated.push(':::');
                return tagDeprecated.join('\n');
            }
            /** CSDK END */
            const tagMd = [
                headingLevel ? (0, elements_1.heading)(headingLevel, tagText) : (0, elements_1.bold)(tagText),
            ];
            tagMd.push(context.commentParts(tag.content));
            return tagMd.join('\n\n');
        });
        md.push(tags.join('\n\n'));
    }
    return (0, utils_1.escapeAngleBrackets)(md.join('\n\n'));
}
exports.comment = comment;
