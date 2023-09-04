"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownThemeRenderContext = void 0;
const path = __importStar(require("path"));
/* start_imports */
const breadcrumbs_1 = require("./resources/partials/breadcrumbs");
const comment_parts_1 = require("./resources/partials/comment.parts");
const comment_1 = require("./resources/partials/comment");
const footer_1 = require("./resources/partials/footer");
const header_1 = require("./resources/partials/header");
const index_page_1 = require("./resources/partials/index.page");
const index_reflection_1 = require("./resources/partials/index.reflection");
const member_declaration_accessort_1 = require("./resources/partials/member.declaration.accessort");
const member_declaration_identifier_1 = require("./resources/partials/member.declaration.identifier");
const member_declaration_1 = require("./resources/partials/member.declaration");
const member_hierarchy_1 = require("./resources/partials/member.hierarchy");
const member_indexsignature_title_1 = require("./resources/partials/member.indexsignature.title");
const member_inheritance_1 = require("./resources/partials/member.inheritance");
const member_reference_1 = require("./resources/partials/member.reference");
const member_reflection_1 = require("./resources/partials/member.reflection");
const member_signature_identifier_1 = require("./resources/partials/member.signature.identifier");
const member_signature_1 = require("./resources/partials/member.signature");
const member_sources_1 = require("./resources/partials/member.sources");
const member_title_1 = require("./resources/partials/member.title");
const member_1 = require("./resources/partials/member");
const member_type_declaration_1 = require("./resources/partials/member.type-declaration");
const members_1 = require("./resources/partials/members");
const navigation_1 = require("./resources/partials/navigation");
const page_title_1 = require("./resources/partials/page.title");
const table_enum_members_1 = require("./resources/partials/table.enum-members");
const table_parameters_1 = require("./resources/partials/table.parameters");
const table_properties_1 = require("./resources/partials/table.properties");
const table_typeparameters_1 = require("./resources/partials/table.typeparameters");
const type_array_1 = require("./resources/partials/type.array");
const type_conditional_1 = require("./resources/partials/type.conditional");
const type_declaration_1 = require("./resources/partials/type.declaration");
const type_function_1 = require("./resources/partials/type.function");
const type_index_access_1 = require("./resources/partials/type.index-access");
const type_inferred_1 = require("./resources/partials/type.inferred");
const type_intersection_1 = require("./resources/partials/type.intersection");
const type_intrinsic_1 = require("./resources/partials/type.intrinsic");
const type_literal_1 = require("./resources/partials/type.literal");
const type_named_tuple_1 = require("./resources/partials/type.named-tuple");
const type_query_1 = require("./resources/partials/type.query");
const type_reference_1 = require("./resources/partials/type.reference");
const type_reflection_1 = require("./resources/partials/type.reflection");
const type_some_1 = require("./resources/partials/type.some");
const type_tuple_1 = require("./resources/partials/type.tuple");
const type_type_operator_1 = require("./resources/partials/type.type-operator");
const type_union_1 = require("./resources/partials/type.union");
const type_unknown_1 = require("./resources/partials/type.unknown");
const member_2 = require("./resources/templates/member");
const project_kind_1 = require("./resources/templates/project-kind");
const project_1 = require("./resources/templates/project");
const read_me_1 = require("./resources/templates/read-me");
const reflection_1 = require("./resources/templates/reflection");
/* end_imports */
function bind(fn, first) {
    return (...r) => fn(first, ...r);
}
/**
 * The render context of the {@link MarkdownTheme}.
 * This follows the implementation of TypeDocs [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html)
 */
class MarkdownThemeRenderContext {
    constructor(page, options) {
        this.page = page;
        this.options = options;
        this.urlTo = (reflection) => {
            return this.relativeURL(reflection.url);
        };
        this.relativeURL = (url) => {
            var _a;
            const URL_PREFIX = /^(http|ftp)s?:\/\//;
            if (!url) {
                return null;
            }
            if (URL_PREFIX.test(url)) {
                return url;
            }
            else {
                const relative = path.relative(path.dirname(((_a = this.page) === null || _a === void 0 ? void 0 : _a.url) || '.'), path.dirname(url));
                return this.parseUrl(path.join(relative, path.basename(url)).replace(/\\/g, '/'));
            }
        };
        /* start_resources */
        // templates
        /** @hidden */
        this.memberTemplate = bind(member_2.memberTemplate, this);
        /** @hidden */
        this.projectKindTemplate = bind(project_kind_1.projectKindTemplate, this);
        /** @hidden */
        this.projectTemplate = bind(project_1.projectTemplate, this);
        /** @hidden */
        this.readmeTemplate = bind(read_me_1.readmeTemplate, this);
        /** @hidden */
        this.reflectionTemplate = bind(reflection_1.reflectionTemplate, this);
        // partials
        /** @hidden */
        this.breadcrumbs = bind(breadcrumbs_1.breadcrumbs, this);
        /** @hidden */
        this.commentParts = bind(comment_parts_1.commentParts, this);
        /** @hidden */
        this.comment = bind(comment_1.comment, this);
        /** @hidden */
        this.footer = bind(footer_1.footer, this);
        /** @hidden */
        this.header = bind(header_1.header, this);
        /** @hidden */
        this.pageIndex = bind(index_page_1.pageIndex, this);
        /** @hidden */
        this.reflectionIndex = bind(index_reflection_1.reflectionIndex, this);
        /** @hidden */
        this.declarationMemberAccessor = bind(member_declaration_accessort_1.declarationMemberAccessor, this);
        /** @hidden */
        this.declarationMemberIdentifier = bind(member_declaration_identifier_1.declarationMemberIdentifier, this);
        /** @hidden */
        this.declarationMember = bind(member_declaration_1.declarationMember, this);
        /** @hidden */
        this.memberHierarchy = bind(member_hierarchy_1.memberHierarchy, this);
        /** @hidden */
        this.indexSignatureTitle = bind(member_indexsignature_title_1.indexSignatureTitle, this);
        /** @hidden */
        this.inheritance = bind(member_inheritance_1.inheritance, this);
        /** @hidden */
        this.referenceMember = bind(member_reference_1.referenceMember, this);
        /** @hidden */
        this.reflectionMember = bind(member_reflection_1.reflectionMember, this);
        /** @hidden */
        this.signatureMemberIdentifier = bind(member_signature_identifier_1.signatureMemberIdentifier, this);
        /** @hidden */
        this.signatureMember = bind(member_signature_1.signatureMember, this);
        /** @hidden */
        this.sources = bind(member_sources_1.sources, this);
        /** @hidden */
        this.memberTitle = bind(member_title_1.memberTitle, this);
        /** @hidden */
        this.member = bind(member_1.member, this);
        /** @hidden */
        this.typeDeclarationMember = bind(member_type_declaration_1.typeDeclarationMember, this);
        /** @hidden */
        this.members = bind(members_1.members, this);
        /** @hidden */
        this.navigation = bind(navigation_1.navigation, this);
        /** @hidden */
        this.pageTitle = bind(page_title_1.pageTitle, this);
        /** @hidden */
        this.enumMembersTable = bind(table_enum_members_1.enumMembersTable, this);
        /** @hidden */
        this.parametersTable = bind(table_parameters_1.parametersTable, this);
        /** @hidden */
        this.propertiesTable = bind(table_properties_1.propertiesTable, this);
        /** @hidden */
        this.typeParametersTable = bind(table_typeparameters_1.typeParametersTable, this);
        /** @hidden */
        this.arrayType = bind(type_array_1.arrayType, this);
        /** @hidden */
        this.conditionalType = bind(type_conditional_1.conditionalType, this);
        /** @hidden */
        this.declarationType = bind(type_declaration_1.declarationType, this);
        /** @hidden */
        this.functionType = bind(type_function_1.functionType, this);
        /** @hidden */
        this.indexAccessType = bind(type_index_access_1.indexAccessType, this);
        /** @hidden */
        this.inferredType = bind(type_inferred_1.inferredType, this);
        /** @hidden */
        this.intersectionType = bind(type_intersection_1.intersectionType, this);
        /** @hidden */
        this.intrinsicType = bind(type_intrinsic_1.intrinsicType, this);
        /** @hidden */
        this.literalType = bind(type_literal_1.literalType, this);
        /** @hidden */
        this.namedTupleType = bind(type_named_tuple_1.namedTupleType, this);
        /** @hidden */
        this.queryType = bind(type_query_1.queryType, this);
        /** @hidden */
        this.referenceType = bind(type_reference_1.referenceType, this);
        /** @hidden */
        this.reflectionType = bind(type_reflection_1.reflectionType, this);
        /** @hidden */
        this.someType = bind(type_some_1.someType, this);
        /** @hidden */
        this.tupleType = bind(type_tuple_1.tupleType, this);
        /** @hidden */
        this.typeOperatorType = bind(type_type_operator_1.typeOperatorType, this);
        /** @hidden */
        this.unionType = bind(type_union_1.unionType, this);
        /** @hidden */
        this.unknownType = bind(type_unknown_1.unknownType, this);
    }
    parseUrl(url) {
        return encodeURI(url);
    }
}
exports.MarkdownThemeRenderContext = MarkdownThemeRenderContext;
