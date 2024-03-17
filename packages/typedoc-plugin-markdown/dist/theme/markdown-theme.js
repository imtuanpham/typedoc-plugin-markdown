"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownTheme = void 0;
const typedoc_1 = require("typedoc");
const markdown_theme_render_context_1 = require("./markdown-theme-render-context");
const navigation_builder_1 = require("./navigation-builder");
const url_builder_1 = require("./url-builder");
/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's [DefaultTheme](https://typedoc.org/api/classes/DefaultThemeRender.html).
 *
 * The {@link render } and {@link getUrls} methods is where the work happens.
 */
class MarkdownTheme extends typedoc_1.Theme {
    /**
     *
     * @param renderer The TypeDoc renderer instance the theme is attached to.
     */
    constructor(renderer) {
        super(renderer);
        this.readmeTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).readmeTemplate(pageEvent);
        };
        this.projectTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).projectTemplate(pageEvent);
        };
        /** CSDK START */
        this.projectKindTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).projectKindTemplate(pageEvent);
        };
        /** CSDK END */
        this.reflectionTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
        };
        this.memberTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).memberTemplate(pageEvent);
        };
    }
    /**
     * Returns a render context instance for a page.
     */
    getRenderContext(pageEvent) {
        return new markdown_theme_render_context_1.MarkdownThemeRenderContext(pageEvent, this.application.options);
    }
    /**
     * Renders a template and page model to a string.
     */
    render(page, template) {
        return template(page);
    }
    /**
     * Maps the models of a project to output files.
     */
    getUrls(project) {
        return new url_builder_1.UrlBuilder(this, this.application.options).getUrls(project);
    }
    getNavigation(project) {
        return new navigation_builder_1.NavigationBuilder(this.application.options).getNavigation(project);
    }
}
exports.MarkdownTheme = MarkdownTheme;
//# sourceMappingURL=markdown-theme.js.map