import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { heading } from '../../../support/elements';

/**
 * @category Templates
 */
export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(1, context.pageTitle(page)));
  }

  md.push(context.member(page.model, 1));

  md.push(context.footer());

  return md.join('\n\n');
}
