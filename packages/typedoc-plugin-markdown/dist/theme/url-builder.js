"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlBuilder = void 0;
const path = __importStar(require("path"));
const typedoc_1 = require("typedoc");
const custom_maps_1 = require("../plugin/options/custom-maps");
const utils_1 = require("../support/utils");
class UrlBuilder {
    constructor(theme, options) {
        this.theme = theme;
        this.options = options;
        this.urls = [];
        this.anchors = {};
    }
    /**
     * Map the models of the given project to the desired output files.
     * Based on TypeDoc DefaultTheme.getUrls()
     *
     * @param project  The project whose urls should be generated.
     */
    getUrls(project) {
        var _a;
        const entryFileName = this.options.getValue('entryFileName');
        const indexFileName = this.options.getValue('indexFileName');
        const hasReadme = !this.options.getValue('readme').endsWith('none');
        if (hasReadme) {
            this.urls.push(new typedoc_1.UrlMapping(entryFileName, project, this.theme.readmeTemplate));
            if (this.options.getValue('skipIndexPage')) {
                project.url = entryFileName;
            }
            else {
                project.url = this.getPartName(indexFileName, 1);
                this.urls.push(new typedoc_1.UrlMapping(this.getPartName(indexFileName, 1), project, this.theme.projectTemplate));
            }
        }
        else {
            if (!this.options.getValue('skipIndexPage')) {
                project.url = entryFileName;
                this.urls.push(new typedoc_1.UrlMapping(entryFileName, project, this.theme.projectTemplate));
            }
        }
        if (this.options.getValue('entryPointStrategy') ===
            typedoc_1.EntryPointStrategy.Packages &&
            !Boolean(project.groups)) {
            // [tuan]: each projectChild is a module (e.g., @sisense/sdk-ui, @sisense/sdk-data, etc)
            (_a = project.children) === null || _a === void 0 ? void 0 : _a.forEach((projectChild, projectChildIndex) => {
                /** CSDK START */
                // Remove @sisense/ prefix from module name
                projectChild.name = projectChild.name.replace('@sisense/', '');
                /** CSDK END */
                // console.log('projectChild', projectChild.name, projectChild.url);
                const startIndex = hasReadme ? 2 : 1;
                const directoryPosition = projectChildIndex + startIndex;
                const url = `${this.getPartName(projectChild.name, directoryPosition)}/${Boolean(projectChild.readme)
                    ? this.getPartName(indexFileName, 1)
                    : entryFileName}`;
                if (projectChild.readme) {
                    this.urls.push(new typedoc_1.UrlMapping(`${path.dirname(url)}/${entryFileName}`, projectChild, this.theme.readmeTemplate));
                }
                this.urls.push(new typedoc_1.UrlMapping(url, projectChild, this.theme.projectTemplate));
                projectChild.url = url;
                this.buildUrlsFromProject(projectChild, url);
            });
        }
        else {
            this.buildUrlsFromProject(project);
        }
        return this.urls;
    }
    /**
     *
     * @param project
     * @param isPackage
     */
    buildUrlsFromProject(project, parentUrl) {
        var _a, _b;
        const startIndex = Boolean(project.readme) ? 2 : 1;
        if (this.options.getValue('excludeGroups')) {
            (_a = project.children) === null || _a === void 0 ? void 0 : _a.forEach((projectGroupChild, projectGroupChildIndex) => {
                this.buildUrlsFromGroup(projectGroupChild, {
                    directoryPosition: projectGroupChildIndex + startIndex,
                    pagePosition: projectGroupChildIndex + startIndex,
                    ...(parentUrl && { parentUrl: parentUrl }),
                });
            });
        }
        else {
            // [tuan]: each projectGroup is a kind (e.g., functions, interfaces, etc)
            (_b = project.groups) === null || _b === void 0 ? void 0 : _b.forEach((projectGroup, projectGroupIndex) => {
                var _a, _b;
                /** CSDK START */
                // Generate index.md for each projectGroup
                const entryFileName = this.options.getValue('entryFileName');
                const projectGroupUrl = `${project.name}/${this.getPartName((0, utils_1.slugify)(projectGroup.title), projectGroupIndex)}/${entryFileName}`;
                // clone the project with only the current group
                const groupProject = Object.create(project);
                groupProject.name = projectGroup.title;
                groupProject.groups = (_a = groupProject.groups) === null || _a === void 0 ? void 0 : _a.filter((group) => group.title === projectGroup.title);
                this.urls.push(new typedoc_1.UrlMapping(projectGroupUrl, groupProject, this.theme.projectKindTemplate));
                /** CSDK END */
                // console.log('--projectGroup', projectGroupUrl);
                (_b = projectGroup.children) === null || _b === void 0 ? void 0 : _b.forEach(
                // [tuan]: each projectGroupChild is an API item (e.g., Chart, ChartProps, etc)
                (projectGroupChild, projectGroupChildIndex) => {
                    // console.log('----projectGroupChild', projectGroupChild.name, projectGroupChild.url);
                    this.buildUrlsFromGroup(projectGroupChild, {
                        directoryPosition: projectGroupIndex + startIndex,
                        pagePosition: projectGroupChildIndex + startIndex,
                        ...(parentUrl && { parentUrl: parentUrl }),
                    });
                });
            });
        }
    }
    buildUrlsFromGroup(reflection, options) {
        var _a, _b;
        const mapping = this.getTemplateMapping(reflection.kind);
        if (mapping) {
            const directory = options.directory || mapping.directory;
            const url = this.getUrl(reflection, {
                ...options,
                directory,
            });
            this.urls.push(new typedoc_1.UrlMapping(url, reflection, mapping.template));
            reflection.url = url;
            reflection.hasOwnDocument = true;
            if (this.options.getValue('excludeGroups')) {
                if (reflection.categories) {
                    reflection.categories.forEach((category, categoryIndex) => {
                        category.children.forEach((categoryChild, categoryChildIndex) => {
                            this.buildUrlsFromGroup(categoryChild, {
                                parentUrl: url,
                                directoryPosition: categoryIndex + 1,
                                directory: category.title,
                                pagePosition: categoryChildIndex + 1,
                                forceDirectory: true,
                            });
                        });
                    });
                }
                else {
                    (_a = reflection.children) === null || _a === void 0 ? void 0 : _a.forEach((groupChild, groupChildIndex) => {
                        this.buildUrlsFromGroup(groupChild, {
                            parentUrl: url,
                            directoryPosition: groupChildIndex + 1,
                            directory: null,
                            pagePosition: groupChildIndex + 1,
                        });
                    });
                }
            }
            else {
                (_b = reflection.groups) === null || _b === void 0 ? void 0 : _b.forEach((group, groupIndex) => {
                    /** CSDK START */
                    // generate index.md for each functions group of namespace
                    if (group.title === 'Functions') {
                        const entryFileName = this.options.getValue('entryFileName');
                        const groupUrl = `${url.replace(entryFileName, '')}${this.getPartName((0, utils_1.slugify)(group.title), groupIndex)}/${entryFileName}`;
                        // clone the reflection to customize the index.md
                        const groupReflection = Object.create(reflection);
                        groupReflection.name = group.title;
                        this.urls.push(new typedoc_1.UrlMapping(groupUrl, groupReflection, this.theme.projectKindTemplate));
                        // console.log('------group', group.title, groupUrl);
                    }
                    /** CSDK END */
                    if (group.categories) {
                        group.categories.forEach((category, categoryIndex) => {
                            // console.log('--------category', category.title);
                            category.children.forEach((categoryChild, categoryChildIndex) => {
                                // console.log('--------categoryChild', categoryChild.name);
                                const mapping = this.getTemplateMapping(categoryChild.kind);
                                this.buildUrlsFromGroup(categoryChild, {
                                    parentUrl: url,
                                    directoryPosition: groupIndex + 1,
                                    directory: `${mapping === null || mapping === void 0 ? void 0 : mapping.directory}/${this.getPartName(category.title, categoryIndex + 1)}`,
                                    pagePosition: categoryChildIndex + 1,
                                });
                            });
                        });
                    }
                    else {
                        group.children.forEach((groupChild, groupChildIndex) => {
                            // console.log('--------groupChild', groupChild.name);
                            const mapping = this.getTemplateMapping(groupChild.kind);
                            this.buildUrlsFromGroup(groupChild, {
                                parentUrl: url,
                                directoryPosition: groupIndex + 1,
                                directory: (mapping === null || mapping === void 0 ? void 0 : mapping.directory) || null,
                                pagePosition: groupChildIndex + 1,
                            });
                        });
                    }
                });
            }
        }
        else if (reflection.parent) {
            this.applyAnchorUrl(reflection, reflection.parent);
        }
    }
    getUrl(reflection, options) {
        if (this.options.getValue('flattenOutputFiles')) {
            const kindAlias = typedoc_1.ReflectionKind.singularString(reflection.kind).split(' ')[0];
            if (options.parentUrl) {
                return `${path
                    .dirname(options.parentUrl.split('.').join('/'))
                    .split('/')
                    .join('.')}.${kindAlias}.${reflection.name.replace(/\//, '_')}.md`;
            }
            const friendlyName = `${reflection.name.replace(/\//, '_')}.md`;
            return reflection.kindOf(typedoc_1.ReflectionKind.Module)
                ? friendlyName
                : `${kindAlias}.${friendlyName}`;
        }
        let alias = reflection.getAlias().replace(/^_/, '');
        /** CSDK START */
        // TypeDoc checks and adds a suffix '-#' to an alias if it's a duplicate across all modules
        // This is not what we want as some alias may be the same across modules, so we remove the prefix
        alias = alias.replace(/-\d+$/, '');
        /** CSDK END */
        const parentDir = options.parentUrl
            ? path.dirname(options.parentUrl)
            : null;
        const dir = () => {
            if (reflection.kindOf(typedoc_1.ReflectionKind.Namespace)) {
                if (!this.options.getValue('excludeGroups')) {
                    return this.getPartName(`${options.directory}/${this.getPartName('namespace.' + alias, options.pagePosition)}`, options.directoryPosition);
                }
                return this.getPartName(alias, options.pagePosition);
            }
            if (options.directory &&
                this.options.getValue('excludeGroups') &&
                !options.forceDirectory) {
                return null;
            }
            if (reflection.kindOf(typedoc_1.ReflectionKind.Module)) {
                if (path.parse(this.options.getValue('entryFileName')).name === alias) {
                    return this.options.getValue('skipIndexPage') &&
                        this.options.getValue('readme').endsWith('none')
                        ? alias
                        : this.getPartName(`module.${alias}`, options.pagePosition);
                }
                return this.getPartName(alias, options.pagePosition);
            }
            return options.directory
                ? this.getPartName(options.directory, options.directoryPosition)
                : `${this.getPartName((0, utils_1.slugify)(typedoc_1.ReflectionKind.singularString(reflection.kind)), options.pagePosition)}.${alias}`;
        };
        const filename = () => {
            if (reflection.kindOf([typedoc_1.ReflectionKind.Module, typedoc_1.ReflectionKind.Namespace]) &&
                this.options.getValue('outputFileStrategy') ===
                    custom_maps_1.OutputFileStrategy.Modules &&
                !this.childrenIncludeNamespaces(reflection)) {
                return null;
            }
            if (reflection.kindOf([typedoc_1.ReflectionKind.Module, typedoc_1.ReflectionKind.Namespace])) {
                return path.parse(this.options.getValue('entryFileName'))
                    .name;
            }
            return `${this.getPartName((0, utils_1.slugify)(typedoc_1.ReflectionKind.singularString(reflection.kind)), options.pagePosition)}.${alias}`;
        };
        return ([parentDir, dir(), filename()].filter((part) => Boolean(part)).join('/') +
            '.md');
    }
    applyAnchorUrl(reflection, container) {
        var _a, _b;
        if (container.url) {
            if (!reflection.kindOf(typedoc_1.ReflectionKind.TypeLiteral)) {
                const anchorPrefix = this.options.getValue('anchorPrefix');
                const anchorId = this.getAnchorId(reflection);
                if (anchorId) {
                    if (!this.anchors[container.url]) {
                        this.anchors[container.url] = [];
                    }
                    this.anchors[container.url].push(anchorId);
                    const count = (_b = (_a = this.anchors[container.url]) === null || _a === void 0 ? void 0 : _a.filter((id) => id === anchorId)) === null || _b === void 0 ? void 0 : _b.length;
                    const anchorParts = [anchorId];
                    if (count > 1) {
                        anchorParts.push(`-${count}`);
                    }
                    if (anchorPrefix) {
                        anchorParts.unshift(`${anchorPrefix}`);
                    }
                    reflection.url = container.url + '#' + anchorParts.join('');
                    reflection.anchor = anchorParts.join('');
                }
            }
            reflection.hasOwnDocument = false;
        }
        if (reflection.parent) {
            reflection.traverse((child) => {
                if (child instanceof typedoc_1.DeclarationReflection) {
                    this.applyAnchorUrl(child, container);
                }
            });
        }
    }
    getAnchorId(reflection) {
        const preserveAnchorCasing = this.options.getValue('preserveAnchorCasing');
        const anchorName = this.getAnchorName(reflection);
        if (anchorName) {
            return preserveAnchorCasing ? anchorName : anchorName.toLowerCase();
        }
        return null;
    }
    getAnchorName(reflection) {
        const namedAnchors = this.options.getValue('namedAnchors');
        const propertiesTableStyle = this.options.getValue('propertiesFormat') === 'table';
        if (!namedAnchors) {
            if (reflection.kindOf(typedoc_1.ReflectionKind.Property) && propertiesTableStyle) {
                return null;
            }
        }
        return reflection.name;
    }
    getPartName(part, position) {
        return this.options.getValue('includeFileNumberPrefixes')
            ? `${String(position).padStart(2, '0')}-${part}`
            : part;
    }
    childrenIncludeNamespaces(reflection) {
        var _a;
        return (_a = reflection.children) === null || _a === void 0 ? void 0 : _a.some((child) => child.kindOf(typedoc_1.ReflectionKind.Namespace));
    }
    /**
     * Returns the template mapping for a given reflection kind
     * @param kind
     */
    getTemplateMapping(kind) {
        const getDirectoryName = (reflectionKind) => {
            const pluralString = typedoc_1.ReflectionKind.pluralString(reflectionKind);
            return this.options.getValue('includeFileNumberPrefixes')
                ? pluralString
                : (0, utils_1.slugify)(pluralString);
        };
        const outputFileStrategy = this.options.getValue('outputFileStrategy');
        const mappings = {
            [typedoc_1.ReflectionKind.Module]: {
                template: this.theme.reflectionTemplate,
                directory: null,
                kind: typedoc_1.ReflectionKind.Module,
            },
            [typedoc_1.ReflectionKind.Namespace]: {
                template: this.theme.reflectionTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Namespace),
                kind: typedoc_1.ReflectionKind.Namespace,
            },
        };
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.Class] = {
                template: this.theme.reflectionTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Class),
                kind: typedoc_1.ReflectionKind.Class,
            };
        }
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.Interface] = {
                isLeaf: false,
                template: this.theme.reflectionTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Interface),
                kind: typedoc_1.ReflectionKind.Interface,
            };
        }
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.Enum] = {
                template: this.theme.reflectionTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Enum),
                kind: typedoc_1.ReflectionKind.Enum,
            };
        }
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.Function] = {
                template: this.theme.memberTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Function),
                kind: typedoc_1.ReflectionKind.Function,
            };
        }
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.TypeAlias] = {
                template: this.theme.memberTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.TypeAlias),
                kind: typedoc_1.ReflectionKind.TypeAlias,
            };
        }
        if (outputFileStrategy === custom_maps_1.OutputFileStrategy.Members) {
            mappings[typedoc_1.ReflectionKind.Variable] = {
                template: this.theme.memberTemplate,
                directory: getDirectoryName(typedoc_1.ReflectionKind.Variable),
                kind: typedoc_1.ReflectionKind.Variable,
            };
        }
        return mappings[kind];
    }
}
exports.UrlBuilder = UrlBuilder;
