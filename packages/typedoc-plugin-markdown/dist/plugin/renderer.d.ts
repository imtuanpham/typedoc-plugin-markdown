/**
 * Contains functionality to decouple HTML logic from the TypeDoc [Renderer](https://typedoc.org/api/classes/Renderer.html).
 * @module
 */
import { ProjectReflection } from 'typedoc';
/**
 * Replacement of TypeDoc's [Application.generateDocs](https://typedoc.org/api/classes/Application.html#generateDocs) to decouple HTML logic.
 *
 */
export declare function generateMarkdown(project: ProjectReflection, out: string): Promise<void>;
/**
 * Replacement of TypeDoc's [Renderer.render](https://typedoc.org/api/classes/Renderer.html#render) to decouple HTML logic.
 * - Removes uneccessary async calls to load highlighters
 * - Removes hooks logic
 */
export declare function renderMarkdown(project: ProjectReflection, outputDirectory: string): Promise<void>;
export declare function writeFileSync(fileName: string, data: string): void;
export declare function normalizePath(path: string): string;
