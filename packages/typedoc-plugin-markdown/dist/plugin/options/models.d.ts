declare module 'typedoc' {
    interface TypeDocOptionMap {
        outputFileStrategy: 'members' | 'modules';
        includeFileNumberPrefixes: boolean;
        flattenOutputFiles: boolean;
        entryFileName: string;
        indexFileName: string;
        indexPageTitle: string;
        skipIndexPage: boolean;
        excludeGroups: boolean;
        hidePageHeader: boolean;
        hidePageTitle: boolean;
        hideBreadcrumbs: boolean;
        hideInPageTOC: boolean;
        identifiersAsCodeBlocks: boolean;
        propertiesFormat: 'list' | 'table';
        enumMembersFormat: 'list' | 'table';
        typeDeclarationFormat: 'list' | 'table';
        tocFormat: 'list' | 'table';
        titleTemplate: string;
        preserveAnchorCasing: boolean;
        anchorPrefix: string;
        namedAnchors: boolean;
    }
}
export interface PluginOptions {
    outputFileStrategy: 'members' | 'modules';
    includeFileNumberPrefixes: boolean;
    flattenOutputFiles: boolean;
    entryFileName: string;
    indexFileName: string;
    indexPageTitle: string;
    skipIndexPage: boolean;
    excludeGroups: boolean;
    hidePageHeader: boolean;
    hidePageTitle: boolean;
    hideBreadcrumbs: boolean;
    hideInPageTOC: boolean;
    identifiersAsCodeBlocks: boolean;
    propertiesFormat: 'list' | 'table';
    enumMembersFormat: 'list' | 'table';
    typeDeclarationFormat: 'list' | 'table';
    tocFormat: 'list' | 'table';
    titleTemplate: string;
    preserveAnchorCasing: boolean;
    anchorPrefix: string;
    namedAnchors: boolean;
}
//# sourceMappingURL=models.d.ts.map