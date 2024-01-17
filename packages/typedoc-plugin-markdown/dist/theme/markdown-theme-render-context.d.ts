import { Options, Reflection } from 'typedoc';
import { MarkdownPageEvent } from '../plugin/events';
/**
 * The render context of the {@link MarkdownTheme}.
 * This follows the implementation of TypeDocs [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html)
 */
export declare class MarkdownThemeRenderContext {
    page: MarkdownPageEvent<Reflection> | null;
    options: Options;
    constructor(page: MarkdownPageEvent<Reflection> | null, options: Options);
    urlTo: (reflection: Reflection) => string | null;
    relativeURL: (url: string | undefined) => string | null;
    parseUrl(url: string): string;
    /** @hidden */
    memberTemplate: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection>) => string;
    /** @hidden */
    projectKindTemplate: (page: MarkdownPageEvent<import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    projectTemplate: (page: MarkdownPageEvent<import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    readmeTemplate: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    reflectionTemplate: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection>) => string;
    /** @hidden */
    breadcrumbs: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    commentParts: (parts: import("typedoc").CommentDisplayPart[]) => string;
    /** @hidden */
    comment: (comment: import("typedoc").Comment, headingLevel?: number | undefined, showSummary?: boolean | undefined, showTags?: boolean | undefined) => string;
    /** @hidden */
    footer: () => string;
    /** @hidden */
    header: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    pageIndex: (page: import("typedoc").PageEvent<import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection>, headingLevel: number) => string;
    /** @hidden */
    reflectionIndex: (reflection: import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection, headingLevel: number) => string;
    /** @hidden */
    declarationMemberAccessor: (declaration: import("typedoc").DeclarationReflection) => string;
    /** @hidden */
    declarationMemberIdentifier: (reflection: import("typedoc").DeclarationReflection) => string;
    /** @hidden */
    declarationMember: (declaration: import("typedoc").DeclarationReflection, headingLevel: number, nested?: boolean | undefined) => string;
    /** @hidden */
    memberHierarchy: (declarationHierarchy: import("typedoc").DeclarationHierarchy, headingLevel: number) => string;
    /** @hidden */
    indexSignatureTitle: (signature: import("typedoc").SignatureReflection) => string;
    /** @hidden */
    inheritance: (reflection: import("typedoc").DeclarationReflection | import("typedoc").SignatureReflection, headingLevel: number) => string;
    /** @hidden */
    referenceMember: (props: import("typedoc").ReferenceReflection) => string;
    /** @hidden */
    reflectionMember: (reflection: import("typedoc").DeclarationReflection, headingLevel: number) => string;
    /** @hidden */
    signatureMemberIdentifier: (signature: import("typedoc").SignatureReflection) => string;
    /** @hidden */
    signatureMember: (signature: import("typedoc").SignatureReflection, headingLevel: number, showSources?: boolean | undefined) => string;
    /** @hidden */
    sources: (reflection: import("typedoc").DeclarationReflection | import("typedoc").SignatureReflection, headingLevel: number) => string;
    /** @hidden */
    memberTitle: (reflection: import("typedoc").DeclarationReflection, typeParams?: boolean | undefined) => string;
    /** CSDK START */
    /** @hidden */
    memberBadge: (reflection: import("typedoc").DeclarationReflection) => string;
    /** CSDK END */
    /** @hidden */
    member: (reflection: import("typedoc").DeclarationReflection, headingLevel: number) => string;
    /** @hidden */
    typeDeclarationMember: (typeDeclaration: import("typedoc").DeclarationReflection, headingLevel: number, parentName?: string | undefined, dividers?: boolean | undefined) => string;
    /** @hidden */
    members: (container: import("typedoc").ContainerReflection, headingLevel: number) => string;
    /** @hidden */
    navigation: (navigationItems: import("./models").NavigationItem[]) => string;
    /** @hidden */
    pageTitle: (page: MarkdownPageEvent<import("typedoc").DeclarationReflection | import("typedoc").ProjectReflection>) => string;
    /** @hidden */
    enumMembersTable: (props: import("typedoc").DeclarationReflection[]) => string;
    /** @hidden */
    parametersTable: (parameters: import("typedoc").ParameterReflection[]) => string;
    /** @hidden */
    propertiesTable: (props: import("typedoc").DeclarationReflection[], nameCol?: string | undefined) => string;
    /** @hidden */
    typeParametersTable: (typeParameters: import("typedoc").TypeParameterReflection[]) => string;
    /** @hidden */
    arrayType: (arrayType: import("typedoc").ArrayType) => string;
    /** @hidden */
    conditionalType: (conditionalType: import("typedoc").ConditionalType) => string;
    /** @hidden */
    declarationType: (declarationReflection: import("typedoc").DeclarationReflection, collapse?: boolean | undefined) => string;
    /** @hidden */
    functionType: (modelSignatures: import("typedoc").SignatureReflection[]) => string;
    /** @hidden */
    indexAccessType: (model: import("typedoc").IndexedAccessType) => string;
    /** @hidden */
    inferredType: (model: import("typedoc").InferredType) => string;
    /** @hidden */
    intersectionType: (model: import("typedoc").IntersectionType) => string;
    /** @hidden */
    intrinsicType: (model: import("typedoc").IntrinsicType) => string;
    /** @hidden */
    literalType: (literalType: import("typedoc").LiteralType) => string;
    /** @hidden */
    namedTupleType: (member: import("typedoc").NamedTupleMember) => string;
    /** @hidden */
    queryType: (queryType: import("typedoc").QueryType) => string;
    /** @hidden */
    referenceType: (referenceType: import("typedoc").ReferenceType) => string;
    /** @hidden */
    reflectionType: (reflectionType: import("typedoc").ReflectionType, collapse: boolean) => string;
    /** @hidden */
    someType: (someType: import("typedoc").SomeType, collapse?: boolean | undefined) => string;
    /** @hidden */
    tupleType: (tupleType: import("typedoc").TupleType) => string;
    /** @hidden */
    typeOperatorType: (model: import("typedoc").TypeOperatorType) => string;
    /** @hidden */
    unionType: (unionType: import("typedoc").UnionType) => string;
    /** @hidden */
    unknownType: (model: import("typedoc").UnknownType) => string;
}
