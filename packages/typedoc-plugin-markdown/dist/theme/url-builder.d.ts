import { Options, ProjectReflection, UrlMapping } from 'typedoc';
import { MarkdownTheme } from './markdown-theme';
export declare class UrlBuilder {
    theme: MarkdownTheme;
    options: Options;
    urls: UrlMapping[];
    anchors: Record<string, string[]>;
    constructor(theme: MarkdownTheme, options: Options);
    /**
     * Map the models of the given project to the desired output files.
     * Based on TypeDoc DefaultTheme.getUrls()
     *
     * @param project  The project whose urls should be generated.
     */
    getUrls(project: ProjectReflection): UrlMapping[];
    /**
     *
     * @param project
     * @param isPackage
     */
    private buildUrlsFromProject;
    private buildUrlsFromGroup;
    private getUrl;
    private applyAnchorUrl;
    private getAnchorId;
    private getAnchorName;
    private getPartName;
    private childrenIncludeNamespaces;
    /**
     * Returns the template mapping for a given reflection kind
     * @param kind
     */
    private getTemplateMapping;
}
