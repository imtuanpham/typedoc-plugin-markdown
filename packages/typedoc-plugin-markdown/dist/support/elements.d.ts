/**
 * A set of pure functions that returns markdown elements as strings.
 *
 * @module
 *
 */
export declare const heading: (level: number, text: string) => string;
export declare const link: (label: string, url: string | null) => string;
export declare const bold: (text: string) => string;
export declare const italic: (text: string) => string;
export declare const backTicks: (text: string) => string;
export declare const unorderedList: <T>(items: T[]) => string;
export declare const horizontalRule: () => string;
export declare const codeBlock: (content: string) => string;
export declare const table: (headers: string[], rows: string[][]) => string;
export declare const blockQuoteBlock: (content: string) => string;
export declare const indentBlock: (content: string) => string;
//# sourceMappingURL=elements.d.ts.map