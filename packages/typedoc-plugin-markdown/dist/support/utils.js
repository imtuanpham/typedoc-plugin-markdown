"use strict";
/**
 * A set of pure utils to be consumed accross the plugin.
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatContents = exports.slugify = exports.camelToTitleCase = exports.stripLineBreaks = exports.tableComments = exports.stripComments = exports.unEscapeChars = exports.escapeAngleBrackets = exports.escapeChars = void 0;
function escapeChars(str) {
    return str
        .replace(/>/g, '\\>')
        .replace(/</g, '\\<')
        .replace(/{/g, '\\{')
        .replace(/_/g, '\\_')
        .replace(/`/g, '\\`')
        .replace(/\|/g, '\\|');
}
exports.escapeChars = escapeChars;
/**
 * Escapes non html tag angle brackets inside comment blocks.
 * Ignores strings inside code blocks
 */
function escapeAngleBrackets(str) {
    const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
    return str.replace(re, (tags) => {
        const htmlRe = /<(?!\/?(div|span|p|a|br|img|ul|li|strike|em|strong|b)(>|\s))[^<]+?>/g;
        const shouldEscape = tags.match(htmlRe);
        return shouldEscape ? tags.replace(/>/g, '>` ').replace(/</g, '`<') : tags;
    });
}
exports.escapeAngleBrackets = escapeAngleBrackets;
function unEscapeChars(str) {
    return str
        .replace(/\\</g, '<')
        .replace(/\\>/g, '>')
        .replace(/\\_/g, '_')
        .replace(/\\{/g, '{')
        .replace(/`/g, '')
        .replace(/\*/g, '')
        .replace(/\\\|/g, '|')
        .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1');
}
exports.unEscapeChars = unEscapeChars;
function stripComments(str) {
    return str
        .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g, ' ')
        .replace(/\n/g, '')
        .replace(/^\s+|\s+$|(\s)+/g, '$1');
}
exports.stripComments = stripComments;
function tableComments(str) {
    return str.replace(/\|/g, '\\|');
}
exports.tableComments = tableComments;
function stripLineBreaks(str, includeHTML = true) {
    return str
        .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, includeHTML ? '<br />' : ' ')
        .replace(/\`\`\`ts/g, '`')
        .replace(/\`\`\`/g, '`')
        .replace(/\n/g, ' ');
}
exports.stripLineBreaks = stripLineBreaks;
function camelToTitleCase(text) {
    return (text.substring(0, 1).toUpperCase() +
        text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`));
}
exports.camelToTitleCase = camelToTitleCase;
function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
exports.slugify = slugify;
function formatContents(contents) {
    return (contents.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n');
}
exports.formatContents = formatContents;
