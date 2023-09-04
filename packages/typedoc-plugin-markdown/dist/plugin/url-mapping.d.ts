import { MarkdownPageEvent } from './events';
export declare class UrlMapping<Model = any> {
    url: string;
    model: Model;
    template: RenderTemplate<MarkdownPageEvent<Model>>;
    constructor(url: string, model: Model, template: RenderTemplate<MarkdownPageEvent<Model>>);
}
export type RenderTemplate<T> = (data: T) => string;
