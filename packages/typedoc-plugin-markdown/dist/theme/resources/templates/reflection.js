"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionTemplate = void 0;
const elements_1 = require("../../../support/elements");
/**
 * @category Templates
 */
function reflectionTemplate(context, page) {
    const md = [];
    if (!context.options.getValue('hidePageHeader')) {
        md.push(context.header(page));
    }
    if (!context.options.getValue('hideBreadcrumbs')) {
        md.push(context.breadcrumbs(page));
    }
    if (!context.options.getValue('hidePageTitle')) {
        /** CSDK START */
        // add title metadata
        md.push(`---\ntitle: ${page.model.name}\n---`);
        /** CSDK END */
        md.push((0, elements_1.heading)(1, context.pageTitle(page)));
    }
    md.push(context.reflectionMember(page.model, 2));
    md.push(context.footer());
    return md.join('\n\n');
}
exports.reflectionTemplate = reflectionTemplate;