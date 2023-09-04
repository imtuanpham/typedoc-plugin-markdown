"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inheritance = void 0;
const typedoc_1 = require("typedoc");
const elements_1 = require("../../../support/elements");
const utils_1 = require("../../../support/utils");
function inheritance(context, reflection, headingLevel) {
    const md = [];
    if (reflection.implementationOf) {
        if (headingLevel !== -1) {
            md.push((0, elements_1.heading)(headingLevel, 'Implementation of'));
        }
        md.push(typeAndParent(context, reflection.implementationOf));
    }
    if (reflection.inheritedFrom) {
        if (headingLevel !== -1) {
            md.push((0, elements_1.heading)(headingLevel, 'Inherited from'));
        }
        md.push(typeAndParent(context, reflection.inheritedFrom));
    }
    if (reflection.overwrites) {
        if (headingLevel !== -1) {
            md.push((0, elements_1.heading)(headingLevel, 'Overrides'));
        }
        md.push(typeAndParent(context, reflection.overwrites));
    }
    return md.join('\n\n');
}
exports.inheritance = inheritance;
const typeAndParent = (context, props) => {
    var _a, _b, _c;
    const getLink = (name, url) => (0, elements_1.link)((0, elements_1.backTicks)(name), context.relativeURL(url));
    if (props) {
        if ('elementType' in props) {
            return typeAndParent(context, props.elementType) + '[]';
        }
        else {
            if (props.reflection) {
                const md = [];
                if (props.reflection instanceof typedoc_1.SignatureReflection) {
                    if ((_b = (_a = props.reflection.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.url) {
                        md.push(getLink(props.reflection.parent.parent.name, props.reflection.parent.parent.url));
                        if ((_c = props.reflection.parent) === null || _c === void 0 ? void 0 : _c.url) {
                            md.push(getLink(props.reflection.parent.name, props.reflection.parent.url));
                        }
                    }
                }
                else {
                    if (props.reflection.parent) {
                        if (props.reflection.parent.url) {
                            md.push(getLink(props.reflection.parent.name, props.reflection.parent.url));
                        }
                        else {
                            md.push((0, elements_1.backTicks)(props.reflection.parent.name));
                        }
                        if (props.reflection) {
                            if (props.reflection.url) {
                                md.push(getLink(props.reflection.name, props.reflection.url));
                            }
                            else {
                                md.push((0, elements_1.backTicks)(props.reflection.name));
                            }
                        }
                    }
                }
                return md.length > 0 ? md.join('.') : props.name;
            }
            else {
                return (0, utils_1.escapeChars)(props.toString());
            }
        }
    }
    return 'void';
};
