"use strict";
/**
 * A set of pure functions that returns markdown elements as strings.
 *
 * @module
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.indentBlock = exports.blockQuoteBlock = exports.table = exports.codeBlock = exports.horizontalRule = exports.unorderedList = exports.backTicks = exports.italic = exports.bold = exports.link = exports.heading = void 0;
const utils_1 = require("./utils");
const heading = (level, text) => {
    level = level > 6 ? 6 : level;
    return `${[...Array(level)].map(() => '#').join('')} ${text}`;
};
exports.heading = heading;
const link = (label, url) => url ? `[${label}](${url})` : '';
exports.link = link;
const bold = (text) => `**${text}**`;
exports.bold = bold;
const italic = (text) => `*${text}*`;
exports.italic = italic;
const backTicks = (text) => `\`${text}\``;
exports.backTicks = backTicks;
const unorderedList = (items) => items.map((item) => `- ${item}`).join('\n');
exports.unorderedList = unorderedList;
const horizontalRule = () => '\n\n***';
exports.horizontalRule = horizontalRule;
const codeBlock = (content) => '```ts\n' + (0, utils_1.unEscapeChars)(content) + '\n```';
exports.codeBlock = codeBlock;
const table = (headers, rows) => `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.map((row) => `| ${row.join(' | ')} |\n`).join('')}`;
exports.table = table;
const blockQuoteBlock = (content) => {
    const lines = content.split('\n');
    return lines
        .map((line) => (line.length ? `> ${line.trim()}` : '>'))
        .join('\n');
};
exports.blockQuoteBlock = blockQuoteBlock;
const indentBlock = (content) => {
    const lines = content.split('\n');
    return lines
        .filter((line) => Boolean(line.length))
        .map((line) => `    ${line}`)
        .join('\n');
};
exports.indentBlock = indentBlock;
//# sourceMappingURL=elements.js.map