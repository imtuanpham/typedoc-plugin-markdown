# docusaurus-plugin-typedoc

A [Docusaurus](https://v2.docusaurus.io/) plugin to build TypeScript API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What does it do?

- Presets relevant options of [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown#readme).
- Runs TypeDoc from the Docusaurus CLI.
- Adds some basic frontmatter to pages and exposes the ability to configure frontmatter further.

## Installation

> Install [Docusaurus](https://v2.docusaurus.io/docs/installation) in the root of your project and install the plugin dependencies in the same location as the Docusaurus website directory.

> [typedoc](https://github.com/TypeStrong/typedoc), [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) are peer dependencies.

```shell
npm install docusaurus-plugin-typedoc typedoc typedoc-plugin-markdown@next --save-dev
```

## Usage

### Config

Add the plugin to `docusaurus.config.js` and specify the required options (see [options](#options)).

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
      },
    ],
  ],
};
```

TypeDoc will be bootstraped with the Docusaurus `start` and `build` [cli commands](https://v2.docusaurus.io/docs/cli):

```javascript
"start": "docusaurus start",
"build": "docusaurus build",
```

Once built the docs will be available at `/docs/api` (or equivalent out directory).

### Directory structure

```
├── docusauruss-website
    ├── build/ (static site dir)
    ├── docs/
    │   ├── api/ (compiled typedoc markdown)
    ├── docusaurus.config.js
    ├── package.json
    ├── sidebars.js
├──package.json
├──src (typescript source files)
├──tsconfig.json
```

## Options

Options can be declared:

- Passing arguments via the command line.
- Using a `typedoc.json` file.
- Under the `typedocOptions` key in `tsconfig.json`.

Please see https://typedoc.org/options/configuration for general TypeDoc option configuration.

### TypeDoc options

The following TypeDoc / Markdown plugin options can be passed to config:

- [typedoc](https://typedoc.org/options) options (HTML specific output options that will be ignored).
- [typedoc-plugin-markdown ](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/next/packages/typedoc-plugin-markdown#options) options (Some options are already preset to target Docusaurus).

The following typedoc-plugin-markdown options are preset with the plugin.

```json
{
  "out": "api",
  "hideInPageTOC": true,
  "hideBreadcrumbs": true,
  "hidePageHeader": true,
  "entryFileName": "index.md",
  "includeFileNumberPrefixes": true
}
```

### Plugin options

Options specific to the plugin should also be declared in the same object.

#### `--sidebar`

`sidebar.autoConfiguration`

Set to `false` to disable sidebar metadata added to frontmatter. Defaults to `true`.

`sidebar.categoryLabel`

The sidebar main parent category label. Defaults to entry page title.

`sidebar.readmeLabel`

The label of the readme page. Defaults to the h1 title of the readme page. Ignored if `readme=none`.

`sidebar.indexLabel`

The label of the index page. Defaults to the index page title.

`sidebar.position`

The position of the sidebar in the tree.

#### `--docsRoot`

The Docusaurus docs folder root. Use `./` if no root folder specified. Defaults to `./docs`.

```shell
--docsRoot <path/to/docs-dir/>
```

### An example configuration

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin: ['typedoc-plugin-xyz'],

        // Plugin options
        out: 'api-xyz',
      },
    ],
  ],
};
```

## Typing the config file

The config can be typed using JSDoc type annotations. See https://docusaurus.io/docs/typescript-support#typing-config.

```js
/** @type {import('docusaurus-plugin-typedoc').PluginOptions} */
```

## Frontmatter

Additional frontmatter options can be added to the config. Please see [typedoc-plugin-frontmatter](https://github.com/tgreyuk/typedoc-plugin-frontmatter#typedoc-plugin-frontmatter).

For example:

```json
{
  "frontmatterGlobals": {
    "pagination_prev": null,
    "pagination_next": null
  }
}
```

## Recipes

### Sidebar and Navbar

#### Sidebar

`sidebars.js` can be configured in following ways:

1. Generate the entire sidebar from file structure of your docs folder (default behaviour):

```js
module.exports = {
  sidebar: [
    {
      type: 'autogenerated',
      dirName: '.', // '.' means the docs folder
    },
  ],
};
```

2. Alternatively, if you wish to manually control other parts of your sidebar you can use a slice for the TypeDoc sidebar.

> note: `sidebar.categoryLabel` and `sidebar.position` options are ignored with this implementation)

```js
module.exports = {
  sidebar: {
    'Category 1': ['doc1', 'doc2', 'doc3'],
    API: [
      {
        type: 'autogenerated',
        dirName: 'api', // 'api' is the 'out' directory
      },
    ],
  },
};
```

Please see https://docusaurus.io/docs/sidebar for sidebar documentation.

#### Navbar

A navbar item can be configured in `themeConfig` options in `docusaurus.config.js`:

```js
 themeConfig: {
    navbar: {
      items: [
        {
        to: 'docs/api/',  // 'api' is the 'out' directory
        activeBasePath: 'docs',
        label: 'API',
        position: 'left',
      },
    ],
  },
},
```

Please see https://docusaurus.io/docs/api/themes/configuration#navbar-items for navbar documentation.

### Multi instance

It is possible to build multi TypeDoc instances by passing in multiple configs with unique ids:

`docusaurus.config.js`

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-1',
        entryPoints: ['../api-1/src/index.ts'],
        tsconfig: '../api-1/tsconfig.json',
        out: 'api-1',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-2',
        entryPoints: ['../api-2/src/index.ts'],
        tsconfig: '../api-2/tsconfig.json',
        out: 'api-2',
      },
    ],
  ],
};
```

### Watch mode

Watching files is supported by passing in the `watch: true` option see [https://typedoc.org/guides/options/#watch](https://typedoc.org/guides/options/#watch).

Targetting the option in development mode only can be achieved using Node.js Environment Variables:

`package.json`

```json
"start": "TYPEDOC_WATCH=true docusaurus start",
"build": "TYPEDOC_WATCH=false docusaurus build",
```

`docusaurus.config.js`

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],
};
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/docusaurus-plugin-typedoc/LICENSE)
