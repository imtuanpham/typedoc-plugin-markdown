"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namedAnchors = exports.anchorPrefix = exports.preserveAnchorCasing = exports.titleTemplate = exports.tocFormat = exports.typeDeclarationFormat = exports.enumMembersFormat = exports.propertiesFormat = exports.identifiersAsCodeBlocks = exports.hideInPageTOC = exports.hideBreadcrumbs = exports.hidePageTitle = exports.hidePageHeader = exports.excludeGroups = exports.skipIndexPage = exports.indexPageTitle = exports.indexFileName = exports.entryFileName = exports.flattenOutputFiles = exports.includeFileNumberPrefixes = exports.outputFileStrategy = void 0;
const typedoc_1 = require("typedoc");
const custom_maps_1 = require("./custom-maps");
/**
 *
 * TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.
 *
 * This options aims to provide some flexibility as to how files can be generated.
 *
 * **"members"**
 *
 * Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.
 *
 * ![outputFileStrategy members folders](../images/options/outputFileStrategy-members.png)
 *
 * **"modules"**
 *
 * Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * ![outputFileStrategy modules folders](../images/options/outputFileStrategy-modules.png)
 *
 * @category fileOutput
 */
exports.outputFileStrategy = {
    name: 'outputFileStrategy',
    help: 'Determines how output files are generated.',
    type: typedoc_1.ParameterType.Map,
    map: custom_maps_1.OutputFileStrategy,
    defaultValue: custom_maps_1.OutputFileStrategy.Members,
};
/**
 * This makes files and folders appear in the file system in the same order as they are sorted. This is useful where auto sidebar generation may be required.
 *
 * ![includeFileNumberPrefixes folders](../images/options/includeFileNumberPrefixes.png)
 *
 * @category fileOutput
 */
exports.includeFileNumberPrefixes = {
    name: 'includeFileNumberPrefixes',
    help: 'Prefixes generated files and folders with number prefixes.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * This creates a flat folder structure without any folders - a required format for some Wikis.
 *
 * ![flattenOutputFiles folders](../images/options/flattenOutputFiles.png)
 *
 * @category fileOutput
 */
exports.flattenOutputFiles = {
    name: 'flattenOutputFiles',
    help: 'Flatten output files without folders.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * `README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.
 *
 * Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).
 *
 * a. If a readme file is resolved then two root files are generated:
 *
 * ├── {entryFileName} - (the project readme file)
 * ├── API.md - (API index page)
 *
 * b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.
 *
 * ├── {entryFileName} - (API index page)
 *
 * @category fileOutput
 *
 */
exports.entryFileName = {
    name: 'entryFileName',
    help: 'The file name of the entry page.',
    type: typedoc_1.ParameterType.String,
    defaultValue: 'README.md',
};
/**
 * This page either contains the module index or exported symbols depending on the given `entryPoints`.
 *
 * This page may not be required (if navigation is present for example) and can be skipped. See `skipIndexPage`.
 *
 * This option is ignored if `readme=none` or `skipIndexPage=true`.
 *
 * @category fileOutput
 */
exports.indexFileName = {
    name: 'indexFileName',
    help: 'The file name the seperate index page.',
    type: typedoc_1.ParameterType.String,
    defaultValue: 'API.md',
};
/**
 * @category fileOutput
 */
exports.indexPageTitle = {
    name: 'indexPageTitle',
    help: 'The title of API index page.',
    type: typedoc_1.ParameterType.String,
    defaultValue: 'API',
};
/**
 * This option skips the generation of the index page if it is not required.
 *
 * Please note this option will be ignored if a single entryPoint is defined as it will contain exported symbols.
 *
 * @category fileOutput
 */
exports.skipIndexPage = {
    name: 'skipIndexPage',
    help: 'Skips generation of a seperate API index page. ',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same level.
 *
 * **With groups**
 *
 * ```markdown
 * # SomeModule
 *
 * ## Classes
 *
 * ### ClassA
 *
 * ## Functions
 *
 * ### FunctionA
 *```
 *
 * **Without groups**
 *
 * ```markdown
 * # SomeModule
 *
 * ## ClassA
 *
 * ## FunctionA
 * ```
 *
 * @category ui
 */
exports.excludeGroups = {
    name: 'excludeGroups',
    help: 'Excludes grouping by reflection kind so all members are rendered and sorted at the same level.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category ui
 */
exports.hidePageHeader = {
    name: 'hidePageHeader',
    help: 'Do not print page header.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category ui
 */
exports.hidePageTitle = {
    name: 'hidePageTitle',
    help: 'Do not print page title.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category ui
 */
exports.hideBreadcrumbs = {
    name: 'hideBreadcrumbs',
    help: 'Do not print breadcrumbs.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category ui
 */
exports.hideInPageTOC = {
    name: 'hideInPageTOC',
    help: 'Do not render in-page TOC/Index items.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * Note if `true` references will not be linked.
 *
 * @category ui
 */
exports.identifiersAsCodeBlocks = {
    name: 'identifiersAsCodeBlocks',
    help: 'Format signature and declaration identifiers in code blocks.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category ui
 */
exports.propertiesFormat = {
    name: 'propertiesFormat',
    help: 'Specify the render style of properties groups for interfaces and classes.',
    type: typedoc_1.ParameterType.Map,
    map: custom_maps_1.FormatStyle,
    defaultValue: custom_maps_1.FormatStyle.List,
};
/**
 * @category ui
 */
exports.enumMembersFormat = {
    name: 'enumMembersFormat',
    help: 'Specify the render style of Enum members.',
    type: typedoc_1.ParameterType.Map,
    map: custom_maps_1.FormatStyle,
    defaultValue: custom_maps_1.FormatStyle.List,
};
/**
 * @category ui
 */
exports.typeDeclarationFormat = {
    name: 'typeDeclarationFormat',
    help: 'Specify the render style for type declaration members.',
    type: typedoc_1.ParameterType.Map,
    map: custom_maps_1.FormatStyle,
    defaultValue: custom_maps_1.FormatStyle.List,
};
/**
 * @category ui
 */
exports.tocFormat = {
    name: 'tocFormat',
    help: 'Render TOC either as a simple list or a table with a description.',
    type: typedoc_1.ParameterType.Map,
    map: custom_maps_1.FormatStyle,
    defaultValue: custom_maps_1.FormatStyle.List,
};
/**
 * Supports {kind} and {name} placeholders.
 *
 * ```
 * titleTemplate: "{kind}: {name}"
 * ```
 * @category ui
 */
exports.titleTemplate = {
    name: 'titleTemplate',
    help: 'Specify a template for displaying page titles.',
    type: typedoc_1.ParameterType.String,
    defaultValue: '{kind}: {name}',
};
/**
 * @category fileOutput
 */
exports.preserveAnchorCasing = {
    name: 'preserveAnchorCasing',
    help: 'Preserve anchor casing when generating links.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
/**
 * @category fileOutput
 */
exports.anchorPrefix = {
    name: 'anchorPrefix',
    help: 'Custom anchor prefix',
    type: typedoc_1.ParameterType.String,
    defaultValue: undefined,
};
exports.namedAnchors = {
    name: 'namedAnchors',
    help: 'Use HTML named anchors for item anchor references.',
    type: typedoc_1.ParameterType.Boolean,
    defaultValue: false,
};
