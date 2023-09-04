"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageTitle = void 0;
const typedoc_1 = require("typedoc");
/**
 * @category Partials
 */
function pageTitle(context, page) {
    var _a;
    const md = [];
    const titleTemplate = context.options.getValue('titleTemplate');
    if (((_a = page.model) === null || _a === void 0 ? void 0 : _a.url) === page.project.url) {
        md.push(context.options.getValue('indexPageTitle'));
    }
    else {
        const name = context.memberTitle(page.model, true);
        md.push(titleTemplate
            .replace('{name}', name)
            .replace('{kind}', typedoc_1.ReflectionKind.singularString(page.model.kind)));
    }
    return md.join(' ');
}
exports.pageTitle = pageTitle;
