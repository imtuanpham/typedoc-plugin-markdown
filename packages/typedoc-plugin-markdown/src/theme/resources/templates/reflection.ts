import { DeclarationReflection, PageEvent } from 'typedoc';
import { heading } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Templates
 */
export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
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

  md.push(context.reflectionMember(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}