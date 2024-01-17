import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/** CSDK START */

/**
 * Generate badges for the @alpha and @beta tags
 *
 * @category Partials
 */
export function memberBadge(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  const md: string[] = [];

  if (reflection?.comment?.modifierTags.has('@alpha')) {
    md.push('<Badge type="alpha" text="Alpha" />');
  }

  if (reflection?.comment?.modifierTags.has('@beta')) {
    md.push('<Badge type="beta" text="Beta" />');
  }

  return md.join('');
}
/** CSDK END */


