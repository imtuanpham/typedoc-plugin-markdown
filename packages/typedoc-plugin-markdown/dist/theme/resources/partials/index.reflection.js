"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionIndex = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
function reflectionIndex(context, reflection, headingLevel) {
    var _a;
    const md = [];
    const subHeadingLevel = headingLevel;
    if (context.options.getValue('excludeGroups') && reflection.children) {
        const group = { title: 'Members', children: reflection.children };
        md.push(getGroup(context, group) + '\n');
    }
    else {
        (_a = reflection.groups) === null || _a === void 0 ? void 0 : _a.forEach((reflectionGroup) => {
            if (reflectionGroup.categories) {
                md.push((0, elements_1.heading)(subHeadingLevel, reflectionGroup.title) + '\n');
                reflectionGroup.categories.forEach((categoryGroup) => {
                    md.push((0, elements_1.heading)(subHeadingLevel + 1, categoryGroup.title) + '\n');
                    md.push(getGroup(context, categoryGroup) + '\n');
                });
            }
            else {
                md.push((0, elements_1.heading)(subHeadingLevel, reflectionGroup.title) + '\n');
                md.push(getGroup(context, reflectionGroup) + '\n');
            }
        });
    }
    return md.join('\n');
}
exports.reflectionIndex = reflectionIndex;
function getGroup(context, group) {
    if (context.options.getValue('tocFormat') === 'table') {
        return getTable(context, group);
    }
    return getList(context, group);
}
function getTable(context, group) {
    const reflectionKind = group.children[0].kind;
    const headers = [
        typedoc_1.ReflectionKind.singularString(reflectionKind),
        'Description',
    ];
    const rows = [];
    group.children.forEach((child) => {
        var _a;
        const row = [];
        row.push((0, elements_1.link)((0, utils_1.escapeChars)(child.name), context.relativeURL(child.url)));
        if ((_a = child.comment) === null || _a === void 0 ? void 0 : _a.summary) {
            row.push((0, utils_1.tableComments)(context.commentParts(child.comment.summary)).split('\n')[0]);
        }
        else {
            row.push('-');
        }
        rows.push(row);
    });
    return (0, elements_1.table)(headers, rows);
}
function getList(context, group) {
    const children = group.children.map((child) => 
    // CSDK: add member badge
    `- [${(0, utils_1.escapeChars)(child.name)}](${context.relativeURL(child.url)}) ${context.memberBadge(child)}`);
    return children.join('\n');
}
