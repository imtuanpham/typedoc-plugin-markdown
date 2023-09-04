"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectKindTemplate = void 0;
/**
 * CSDK
 * Template for project kind index pages.
 * Adapted from `projectTemplate`.
 *
 *
 * @category Templates
 */
function projectKindTemplate(context, page) {
    const md = [];
    if (!context.options.getValue('hidePageHeader')) {
        md.push(context.header(page));
    }
    if (!context.options.getValue('hideBreadcrumbs')) {
        md.push(context.breadcrumbs(page));
    }
    if (!context.options.getValue('hidePageTitle')) {
        // add title metadata
        md.push(`---\ntitle: ${page.model.name}\n---`);
    }
    if (page.model.comment) {
        md.push(context.comment(page.model.comment, 2));
    }
    md.push(context.pageIndex(page, 1));
    md.push(context.members(page.model, 2));
    md.push(context.footer());
    return md.join('\n\n');
}
exports.projectKindTemplate = projectKindTemplate;
