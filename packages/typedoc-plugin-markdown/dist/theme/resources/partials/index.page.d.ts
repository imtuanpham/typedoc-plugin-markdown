import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
/**
 * @category Partials
 */
export declare function pageIndex(context: MarkdownThemeRenderContext, page: PageEvent<DeclarationReflection | ProjectReflection>, headingLevel: number): string;
