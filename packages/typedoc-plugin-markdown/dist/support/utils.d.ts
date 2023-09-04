/**
 * A set of pure utils to be consumed accross the plugin.
 *
 * @module
 */
export declare function escapeChars(str: string): string;
/**
 * Escapes non html tag angle brackets inside comment blocks.
 * Ignores strings inside code blocks
 */
export declare function escapeAngleBrackets(str: string): string;
export declare function unEscapeChars(str: string): string;
export declare function stripComments(str: string): string;
export declare function tableComments(str: string): string;
export declare function stripLineBreaks(str: string, includeHTML?: boolean): string;
export declare function camelToTitleCase(text: string): string;
export declare function slugify(str: string): string;
export declare function formatContents(contents: string): string;
