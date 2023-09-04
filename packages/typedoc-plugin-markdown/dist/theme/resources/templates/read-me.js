"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readmeTemplate = void 0;
/**
 * @category Templates
 */
function readmeTemplate(context, page) {
    const md = [];
    if (!context.options.getValue('hidePageHeader')) {
        md.push(context.header(page));
    }
    const INDEX_PAGE_PLACEHOLDER = '[TYPEDOC_INDEX]';
    const INDEX_URL_PLACEHOLDER_KEY = '[TYPEDOC__URL]';
    if (page.model.readme) {
        const readmeContent = context.commentParts(page.model.readme);
        md.push(readmeContent
            .replace(INDEX_PAGE_PLACEHOLDER, getIndexReplacer(context, page) || '')
            .replace(INDEX_URL_PLACEHOLDER_KEY, `./${context.options.getValue('indexFileName')}`));
    }
    md.push(context.footer());
    return md.join('\n\n');
}
exports.readmeTemplate = readmeTemplate;
function getIndexReplacer(context, page) {
    const md = [];
    if (page.model.comment) {
        md.push(context.comment(page.model.comment, 2));
    }
    md.push(context.pageIndex(page, 2));
    md.push(context.members(page.model, 3));
    return md.join('\n\n');
}
