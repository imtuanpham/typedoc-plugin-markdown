import { DeclarationReflection, ProjectReflection, Reflection, RenderTemplate, Renderer, Theme } from 'typedoc';
import { MarkdownPageEvent } from '../plugin/events';
import { MarkdownThemeRenderContext } from './markdown-theme-render-context';
/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's [DefaultTheme](https://typedoc.org/api/classes/DefaultThemeRender.html).
 *
 * The {@link render } and {@link getUrls} methods is where the work happens.
 */
export declare class MarkdownTheme extends Theme {
    /**
     *
     * @param renderer The TypeDoc renderer instance the theme is attached to.
     */
    constructor(renderer: Renderer);
    /**
     * Returns a render context instance for a page.
     */
    getRenderContext(pageEvent: MarkdownPageEvent<Reflection> | null): MarkdownThemeRenderContext;
    readmeTemplate: (pageEvent: MarkdownPageEvent<ProjectReflection>) => string;
    projectTemplate: (pageEvent: MarkdownPageEvent<ProjectReflection>) => string;
    /** SISENSE.DEV START */
    projectKindTemplate: (pageEvent: MarkdownPageEvent<ProjectReflection>) => string;
    /** SISENSE.DEV END */
    reflectionTemplate: (pageEvent: MarkdownPageEvent<DeclarationReflection>) => string;
    memberTemplate: (pageEvent: MarkdownPageEvent<DeclarationReflection>) => string;
    /**
     * Renders a template and page model to a string.
     */
    render(page: MarkdownPageEvent<Reflection>, template: RenderTemplate<MarkdownPageEvent<Reflection>>): string;
    /**
     * Maps the models of a project to output files.
     */
    getUrls(project: ProjectReflection): import("typedoc").UrlMapping<any>[];
    getNavigation(project: ProjectReflection): import("./models").NavigationItem[];
}
