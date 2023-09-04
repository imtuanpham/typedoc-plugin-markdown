import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
/**
 * @category Templates
 */
export declare function readmeTemplate(context: MarkdownThemeRenderContext, page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>): string;
