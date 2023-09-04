import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
/**
 * @category Templates
 */
export declare function memberTemplate(context: MarkdownThemeRenderContext, page: MarkdownPageEvent<DeclarationReflection>): string;
