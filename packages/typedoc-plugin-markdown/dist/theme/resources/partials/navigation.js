"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
/**
 * @category Partials
 */
function navigation(context, navigationItems) {
    var _a;
    const title = ((_a = context.options.getValue('entryPoints')) === null || _a === void 0 ? void 0 : _a.length) > 1 ? 'Modules' : 'Exports';
    const md = [`## ${title}\n`];
    navigationItems.forEach((navigationItem) => {
        if (navigationItem.url) {
            md.push(`- [${navigationItem.title}](${context.parseUrl(navigationItem.url)})`);
        }
    });
    return md.join('\n');
}
exports.navigation = navigation;
//# sourceMappingURL=navigation.js.map