"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadcrumbs = void 0;
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
/**
 * Renders the breadcrumbs
 * @mergeTarget
 */
function breadcrumbs(context, page) {
    var _a, _b;
    const md = [];
    if (page.url === page.project.url ||
        page.url === context.options.getValue('entryFileName')) {
        return '';
    }
    md.push((0, elements_1.link)(context.options.getValue('indexPageTitle'), context.relativeURL(page.project.url)));
    const breadcrumb = (model) => {
        var _a;
        if ((_a = model === null || model === void 0 ? void 0 : model.parent) === null || _a === void 0 ? void 0 : _a.parent) {
            breadcrumb(model.parent);
        }
        md.push((0, elements_1.link)(model.name, context.relativeURL(model === null || model === void 0 ? void 0 : model.url)));
    };
    const pageName = (0, utils_1.escapeChars)(page.model.name);
    if (((_b = (_a = page.model) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent) &&
        (page.url !== page.project.url ||
            page.url !== context.options.getValue('entryFileName'))) {
        breadcrumb(page.model.parent);
    }
    md.push(pageName);
    return md.length > 1 ? `${md.join(' > ')}` : '';
}
exports.breadcrumbs = breadcrumbs;
//# sourceMappingURL=breadcrumbs.js.map