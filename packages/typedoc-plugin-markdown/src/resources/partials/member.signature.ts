import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { blockQuoteBlock, codeBlock, heading } from '../../support/els';
import { getReflectionHeadingLevel } from '../../support/helpers';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  if (parentHeadingLevel) {
    md.push(
      blockQuoteBlock(signatureBody(context, signature, parentHeadingLevel)),
    );
  } else {
    md.push(signatureBody(context, signature));
  }

  return md.join('\n\n');
}

function signatureBody(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  const headingLevel =
    (parentHeadingLevel
      ? parentHeadingLevel
      : getReflectionHeadingLevel(
          signature.parent,
          context.getOption('groupByKinds'),
        )) + 1;

  if (context.getOption('indentifiersAsCodeBlocks')) {
    md.push(codeBlock(context.partials.signatureMemberIdentifier(signature)));
  } else {
    md.push(
      `${
        !parentHeadingLevel ? '>' : ''
      } ${context.partials.signatureMemberIdentifier(signature)}`,
    );
  }

  if (signature.comment) {
    md.push(context.partials.comment(signature.comment, headingLevel));
  }

  md.push(context.partials.sources(signature));

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  if (signature.typeParameters?.length) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParametersTable(signature.typeParameters));
  }

  if (signature.parameters?.length) {
    md.push(heading(headingLevel, 'Parameters'));
    md.push(context.partials.parametersTable(signature.parameters));
  }

  if (signature.type) {
    md.push(heading(headingLevel, 'Returns'));
    md.push(context.partials.someType(signature.type, 'all'));

    if (signature.comment?.blockTags.length) {
      const tags = signature.comment.blockTags
        .filter((tag) => tag.tag === '@returns')
        .map((tag) => context.partials.commentParts(tag.content));
      md.push(tags.join('\n\n'));
    }

    if (typeDeclaration?.signatures) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature, headingLevel));
      });
    }

    if (typeDeclaration?.children) {
      if (context.getOption('propertiesFormat').toLowerCase() === 'table') {
        md.push(context.partials.propertiesTable(typeDeclaration.children));
      } else {
        typeDeclaration.children.forEach((declarationChild) => {
          md.push(context.partials.member(declarationChild, headingLevel + 1));
        });
      }
    }

    md.push(context.partials.inheritance(signature, headingLevel));
  }

  return md.join('\n\n');
}