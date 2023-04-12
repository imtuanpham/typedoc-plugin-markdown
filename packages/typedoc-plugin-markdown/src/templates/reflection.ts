import { DeclarationReflection, PageEvent } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  if (context.getOption('enableFrontmatter')) {
    md.push(context.partials.frontmatter(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (page.model.readme) {
    md.push(
      context.partials
        .commentParts(page.model.readme)
        .replace('[TYPEDOC_INDEX]', context.partials.toc(page.model)),
    );
  } else {
    if (!context.getOption('hidePageTitle')) {
      md.push(context.partials.pageTitle(page));
    }
    md.push(context.partials.reflectionMember(page.model));
  }
  return md.join('\n\n');
}