"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownThemeRenderContext = exports.MarkdownTheme = exports.MarkdownRendererEvent = exports.MarkdownPageEvent = exports.load = void 0;
/**
 * Exposes the public API of the plugin
 */
var bootstrap_1 = require("./plugin/bootstrap");
Object.defineProperty(exports, "load", { enumerable: true, get: function () { return bootstrap_1.load; } });
var events_1 = require("./plugin/events");
Object.defineProperty(exports, "MarkdownPageEvent", { enumerable: true, get: function () { return events_1.MarkdownPageEvent; } });
Object.defineProperty(exports, "MarkdownRendererEvent", { enumerable: true, get: function () { return events_1.MarkdownRendererEvent; } });
var theme_1 = require("./theme");
Object.defineProperty(exports, "MarkdownTheme", { enumerable: true, get: function () { return theme_1.MarkdownTheme; } });
Object.defineProperty(exports, "MarkdownThemeRenderContext", { enumerable: true, get: function () { return theme_1.MarkdownThemeRenderContext; } });
