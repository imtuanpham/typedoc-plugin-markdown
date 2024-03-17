"use strict";
/**
 *
 * A set of helpers that parses TypeDoc models to be consumed by theme resources.
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModifier = exports.hasTOC = exports.hasIndex = exports.getProjectDisplayName = exports.getDeclarationType = void 0;
const typedoc_1 = require("typedoc");
function getDeclarationType(declaration) {
    if (declaration.getSignature) {
        return declaration.getSignature.type;
    }
    if (declaration.setSignature) {
        return declaration.setSignature.type;
    }
    return declaration.type;
}
exports.getDeclarationType = getDeclarationType;
function getProjectDisplayName(project, includeVersion) {
    const version = includeVersion ? ` - v${project.packageVersion}` : '';
    return `${project.name}${version}`;
}
exports.getProjectDisplayName = getProjectDisplayName;
function hasIndex(reflection) {
    var _a;
    return (_a = reflection.groups) === null || _a === void 0 ? void 0 : _a.some((group) => group.allChildrenHaveOwnDocument());
}
exports.hasIndex = hasIndex;
function hasTOC(reflection, options) {
    if (options.getValue('hideInPageTOC')) {
        return false;
    }
    return reflection.kindOf([typedoc_1.ReflectionKind.Module, typedoc_1.ReflectionKind.Namespace]);
}
exports.hasTOC = hasTOC;
function getModifier(reflection) {
    if (reflection.flags.isAbstract) {
        return 'Abstract';
    }
    if (reflection.flags.isPrivate) {
        return 'Private';
    }
    if (reflection.flags.isReadonly) {
        return 'Readonly';
    }
    if (reflection.flags.isStatic) {
        return 'Static';
    }
    if (reflection.getSignature) {
        return 'get';
    }
    if (reflection.setSignature) {
        return 'set';
    }
    return null;
}
exports.getModifier = getModifier;
//# sourceMappingURL=helpers.js.map