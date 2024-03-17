import { Event, ProjectReflection, Reflection } from 'typedoc';
import { NavigationItem } from '../theme/models';
import { RenderTemplate, UrlMapping } from './url-mapping';
/**
 * Extends the RendererEvent from TypeDoc to expose navigation property.
 */
export declare class MarkdownRendererEvent extends Event {
    readonly project: ProjectReflection;
    readonly outputDirectory: string;
    urls?: UrlMapping<Reflection>[];
    navigation: NavigationItem[];
    static readonly BEGIN = "beginRender";
    static readonly END = "endRender";
    constructor(name: string, outputDirectory: string, project: ProjectReflection);
    createPageEvent<Model>(mapping: UrlMapping<Model>): [RenderTemplate<MarkdownPageEvent<Model>>, MarkdownPageEvent<Model>];
}
export declare class MarkdownPageEvent<out Model = unknown> extends Event {
    project: ProjectReflection;
    filename: string;
    url: string;
    contents?: string;
    pageHeadings: any;
    readonly model: Model;
    static readonly BEGIN = "beginPage";
    static readonly END = "endPage";
    constructor(name: string, model: Model);
}
//# sourceMappingURL=events.d.ts.map