"use strict";
/**
 * Contains functionality to decouple HTML logic from the TypeDoc [Renderer](https://typedoc.org/api/classes/Renderer.html).
 * @module
 */
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
exports.normalizePath = exports.writeFileSync = exports.renderMarkdown = exports.generateMarkdown = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const typedoc_1 = require("typedoc");
const utils_1 = require("../support/utils");
const events_1 = require("./events");
/**
 * Replacement of TypeDoc's [Application.generateDocs](https://typedoc.org/api/classes/Application.html#generateDocs) to decouple HTML logic.
 *
 */
async function generateMarkdown(project, out) {
    const start = Date.now();
    await this.renderer.render(project, out);
    if (this.logger.hasErrors()) {
        this.logger.error('Documentation could not be generated due to the errors above.');
    }
    else {
        this.logger.info(`Documentation generated at ${out}`);
        this.logger.info(`Markdown rendering took ${Date.now() - start}ms`);
    }
}
exports.generateMarkdown = generateMarkdown;
/**
 * Replacement of TypeDoc's [Renderer.render](https://typedoc.org/api/classes/Renderer.html#render) to decouple HTML logic.
 * - Removes uneccessary async calls to load highlighters
 * - Removes hooks logic
 */
async function renderMarkdown(project, outputDirectory) {
    var _a, _b;
    this.renderStartTime = Date.now();
    if (this.cleanOutputDir) {
        try {
            fs.rmSync(outputDirectory, { recursive: true, force: true });
        }
        catch (error) {
            this.application.logger.warn('Could not empty the output directory.');
            return;
        }
    }
    try {
        fs.mkdirSync(outputDirectory, { recursive: true });
    }
    catch (error) {
        this.application.logger.error(`Could not create output directory ${outputDirectory}.`);
        return;
    }
    if (this.githubPages) {
        try {
            const text = 'TypeDoc added this file to prevent GitHub Pages from ' +
                'using Jekyll. You can turn off this behavior by setting ' +
                'the `githubPages` option to false.';
            fs.writeFileSync(path.join(outputDirectory, '.nojekyll'), text);
        }
        catch (error) {
            this.application.warn('Could not create .nojekyll file.');
            return;
        }
    }
    this.prepareTheme();
    const output = new events_1.MarkdownRendererEvent(events_1.MarkdownRendererEvent.BEGIN, outputDirectory, project);
    output.urls = this.theme.getUrls(project);
    output.navigation = this.theme.getNavigation(project);
    await Promise.all(this.preRenderAsyncJobs.map((job) => job(output)));
    this.preRenderAsyncJobs = [];
    this.application.logger.info(`There are ${(_a = output.urls) === null || _a === void 0 ? void 0 : _a.length} pages to write.`);
    (_b = output.urls) === null || _b === void 0 ? void 0 : _b.filter((urlMapping) => urlMapping.model instanceof typedoc_1.ProjectReflection ||
        urlMapping.model instanceof typedoc_1.DeclarationReflection).forEach(async (urlMapping) => {
        const [template, page] = output.createPageEvent(urlMapping);
        this.trigger(events_1.MarkdownPageEvent.BEGIN, page);
        if (page.isDefaultPrevented) {
            return false;
        }
        if (page.model instanceof typedoc_1.Reflection) {
            page.contents = this.theme.render(page, template);
        }
        else {
            throw new Error('Should be unreachable');
        }
        this.trigger(events_1.MarkdownPageEvent.END, page);
        if (page.isDefaultPrevented) {
            return false;
        }
        try {
            writeFileSync(page.filename, (0, utils_1.formatContents)(page.contents));
        }
        catch (error) {
            this.application.logger.error(`Could not write ${page.filename}`);
        }
    });
    await Promise.all(this.postRenderAsyncJobs.map((job) => job(output)));
    this.postRenderAsyncJobs = [];
    this.trigger(events_1.MarkdownRendererEvent.END, output);
    this.theme = void 0;
}
exports.renderMarkdown = renderMarkdown;
function writeFileSync(fileName, data) {
    fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
    fs.writeFileSync(normalizePath(fileName), data);
}
exports.writeFileSync = writeFileSync;
function normalizePath(path) {
    return path.replace(/\\/g, '/');
}
exports.normalizePath = normalizePath;
