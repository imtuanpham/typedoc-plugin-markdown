"use strict";
/**
 * Exposes the {@link load} function that is called by TypeDoc to bootstrap the plugin.
 * @module
 */
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
exports.load = void 0;
const theme_1 = require("../theme");
const options = __importStar(require("./options/config"));
const renderer_1 = require("./renderer");
/**
 *
 * The main plugin entrypoint containing all bootstrapping logic.
 */
function load(app) {
    /**
     * add options
     */
    Object.values(options).forEach((option) => {
        app.options.addDeclaration({
            ...option,
            help: `[typedoc-plugin-markdown] ${option.help}`,
        });
    });
    /**
     * Apply custom renderer methods (there should probably be a better solution to this)
     * See {@link plugin/renderer}.
     */
    Object.defineProperty(app, 'generateDocs', { value: renderer_1.generateMarkdown });
    Object.defineProperty(app.renderer, 'render', {
        value: renderer_1.renderMarkdown,
    });
    Object.defineProperty(app.renderer, 'themes', {
        value: new Map([
            ['default', theme_1.MarkdownTheme],
        ]),
    });
}
exports.load = load;
//# sourceMappingURL=bootstrap.js.map