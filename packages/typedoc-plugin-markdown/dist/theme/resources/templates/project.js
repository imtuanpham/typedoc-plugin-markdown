"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectTemplate = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Templates
 */
function projectTemplate(context, page) {
    const md = [];
    if (!context.options.getValue('hidePageHeader')) {
        md.push(context.header(page));
    }
    if (!context.options.getValue('hideBreadcrumbs')) {
        md.push(context.breadcrumbs(page));
    }
    if (!context.options.getValue('hidePageTitle')) {
        /** SISENSE.DEV START */
        // add title metadata
        md.push(`---\ntitle: ${context.pageTitle(page)}\n---`);
        /** SISENSE.DEV END */
        md.push((0, elements_1.heading)(1, context.pageTitle(page)));
    }
    if (page.model.comment) {
        md.push(context.comment(page.model.comment, 2));
    }
    md.push(context.pageIndex(page, 2));
    md.push(context.members(page.model, 2));
    md.push(context.footer());
    return md.join('\n\n');
}
exports.projectTemplate = projectTemplate;
