"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
function members(context, container, headingLevel) {
    var _a, _b, _c;
    const md = [];
    const pushCategories = (categories, headingLevel) => {
        categories === null || categories === void 0 ? void 0 : categories.filter((category) => !category.allChildrenHaveOwnDocument()).forEach((item) => {
            md.push((0, elements_1.heading)(headingLevel, item.title));
            pushChildren(item.children, headingLevel + 1);
        });
    };
    const pushChildren = (children, memberHeadingLevel) => {
        const items = children === null || children === void 0 ? void 0 : children.filter((item) => !item.hasOwnDocument);
        items === null || items === void 0 ? void 0 : items.forEach((item, index) => {
            md.push(context.member(item, memberHeadingLevel || headingLevel));
            if (index !== items.length - 1 &&
                (item.kindOf([
                    typedoc_1.ReflectionKind.Class,
                    typedoc_1.ReflectionKind.Interface,
                    typedoc_1.ReflectionKind.Function,
                    typedoc_1.ReflectionKind.Enum,
                    typedoc_1.ReflectionKind.Variable,
                ]) ||
                    context.options.getValue('outputFileStrategy') === 'members')) {
                md.push((0, elements_1.horizontalRule)());
            }
        });
    };
    if ((_a = container.categories) === null || _a === void 0 ? void 0 : _a.length) {
        pushCategories(container.categories, headingLevel);
    }
    else {
        if (context.options.getValue('excludeGroups') &&
            container.kindOf([
                typedoc_1.ReflectionKind.Project,
                typedoc_1.ReflectionKind.Module,
                typedoc_1.ReflectionKind.Namespace,
            ])) {
            if ((_b = container.categories) === null || _b === void 0 ? void 0 : _b.length) {
                pushCategories(container.categories, headingLevel);
            }
            else {
                pushChildren(container.children, headingLevel);
            }
        }
        else {
            (_c = container.groups) === null || _c === void 0 ? void 0 : _c.filter((group) => !group.allChildrenHaveOwnDocument()).forEach((group) => {
                if (group.categories) {
                    md.push((0, elements_1.heading)(headingLevel, group.title));
                    pushCategories(group.categories, headingLevel + 1);
                }
                else {
                    const isPropertiesGroup = group.children.every((child) => child.kindOf(typedoc_1.ReflectionKind.Property));
                    const isEnumGroup = group.children.every((child) => child.kindOf(typedoc_1.ReflectionKind.EnumMember));
                    md.push((0, elements_1.heading)(headingLevel, group.title));
                    if (isPropertiesGroup &&
                        context.options.getValue('propertiesFormat') === 'table') {
                        md.push(context.propertiesTable(group.children));
                    }
                    else if (isEnumGroup &&
                        context.options.getValue('enumMembersFormat') === 'table') {
                        md.push(context.enumMembersTable(group.children));
                    }
                    else {
                        pushChildren(group.children, headingLevel + 1);
                    }
                }
            });
        }
    }
    return md.join('\n\n');
}
exports.members = members;
