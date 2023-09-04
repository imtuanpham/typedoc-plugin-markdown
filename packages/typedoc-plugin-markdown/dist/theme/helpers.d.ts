/**
 *
 * A set of helpers that parses TypeDoc models to be consumed by theme resources.
 *
 * @module
 */
import { DeclarationReflection, Options, ProjectReflection } from 'typedoc';
export declare function getDeclarationType(declaration: DeclarationReflection): import("typedoc").SomeType | undefined;
export declare function getProjectDisplayName(project: ProjectReflection, includeVersion: boolean): string;
export declare function hasIndex(reflection: DeclarationReflection | ProjectReflection): boolean | undefined;
export declare function hasTOC(reflection: DeclarationReflection, options: Options): boolean;
export declare function getModifier(reflection: DeclarationReflection): "get" | "Abstract" | "Private" | "Readonly" | "Static" | "set" | null;
