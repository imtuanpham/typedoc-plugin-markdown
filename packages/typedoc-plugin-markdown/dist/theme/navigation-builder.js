"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationBuilder = void 0;
class NavigationBuilder {
    constructor(options) {
        this.options = options;
        this.navigation = [];
    }
    getNavigation(project) {
        var _a, _b, _c;
        if ((_a = project.groups) === null || _a === void 0 ? void 0 : _a.length) {
            (_b = project.groups) === null || _b === void 0 ? void 0 : _b.forEach(() => {
                var _a;
                (_a = project.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
                    this.navigation.push({
                        title: child.name,
                        url: child.url,
                        children: this.getChildrenOrGroups(child) || [],
                    });
                });
            });
        }
        else {
            (_c = project.children) === null || _c === void 0 ? void 0 : _c.forEach((child) => {
                this.navigation.push({
                    title: child.name,
                    children: this.getChildrenOrGroups(child) || [],
                });
            });
        }
        return this.navigation;
    }
    getCategoryGroupChildren(group) {
        var _a;
        return (_a = group.children) === null || _a === void 0 ? void 0 : _a.filter((child) => child.hasOwnDocument).map((child) => {
            return {
                title: child.name,
                url: child.url,
                children: this.getChildrenOrGroups(child) || [],
            };
        });
    }
    getGroupChildren(group) {
        var _a, _b;
        if (group.categories) {
            return (_a = group.categories) === null || _a === void 0 ? void 0 : _a.map((category) => {
                return {
                    title: category.title,
                    children: this.getCategoryGroupChildren(category) || [],
                };
            });
        }
        return (_b = group.children) === null || _b === void 0 ? void 0 : _b.filter((child) => child.hasOwnDocument).map((child) => {
            return {
                title: child.name,
                url: child.url,
                children: this.getChildrenOrGroups(child) || [],
            };
        });
    }
    getChildrenOrGroups(reflection) {
        var _a, _b, _c;
        if ((_a = reflection.groups) === null || _a === void 0 ? void 0 : _a.some((group) => group.allChildrenHaveOwnDocument())) {
            if (this.options.getValue('excludeGroups')) {
                return (_b = reflection.children) === null || _b === void 0 ? void 0 : _b.filter((child) => child.hasOwnDocument).map((child) => {
                    return {
                        title: child.name,
                        url: child.url,
                        children: this.getChildrenOrGroups(child),
                    };
                });
            }
            return (_c = reflection.groups) === null || _c === void 0 ? void 0 : _c.map((group) => {
                return {
                    title: group.title,
                    children: this.getGroupChildren(group) || [],
                };
            });
        }
        return [];
    }
}
exports.NavigationBuilder = NavigationBuilder;
