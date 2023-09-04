import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
/**
 * @category Partials
 */
export declare function header(context: MarkdownThemeRenderContext, page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>): string;
