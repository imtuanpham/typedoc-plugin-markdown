import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hidePageTitle: boolean;
  hideHierarchy: boolean;
  entryDocument: string;
  indexTitle: string;
  namedAnchors: boolean;
  enableFrontmatter: boolean;
  frontmatterTags: string[];
  frontmatterGlobals: Record<string, string | boolean | number | null>;
  baseUrl: string;
  longTitles: boolean;
  symbolsWithOwnFile: string | string[];
  typeDeclarationStyle: 'list' | 'table';
  groupBySymbols: boolean;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  isLeaf: boolean;
  kind: ReflectionKind;
  labelSingular: string;
  labelPlural: string;
}

export type Collapse = 'object' | 'function' | 'all' | 'none';