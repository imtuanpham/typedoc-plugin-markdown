"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const helpers_1 = require("../../helpers");
/**
 * @category Partials
 */
function header(context, page) {
    const isMonoRepo = !Boolean(page.project.groups);
    if (isMonoRepo) {
        const packageItem = findPackage(page.model);
        if (packageItem) {
            return packageHeader(context, page);
        }
    }
    return projectHeader(context, page);
}
exports.header = header;
function projectHeader(context, page) {
    const entryFileName = context.options.getValue('entryFileName');
    const projectName = (0, helpers_1.getProjectDisplayName)(page.project, context.options.getValue('includeVersion'));
    const md = [];
    md.push((0, elements_1.link)((0, elements_1.bold)(projectName), context.relativeURL(entryFileName)));
    return `${md.join(' ')}\n\n***\n`;
}
function packageHeader(context, page) {
    const packageItem = findPackage(page.model);
    if (!packageItem) {
        return '';
    }
    const md = [];
    md.push((0, elements_1.link)((0, elements_1.bold)(packageItem.name), context.relativeURL(packageItem.url)));
    return `${md.join(' ')}\n\n***\n`;
}
function findPackage(model) {
    var _a;
    if (model.kindOf(typedoc_1.ReflectionKind.Module) &&
        ((_a = model.parent) === null || _a === void 0 ? void 0 : _a.kindOf(typedoc_1.ReflectionKind.Project))) {
        return model;
    }
    if (model.parent) {
        return findPackage(model.parent);
    }
    return null;
}
