# typedoc-github-wiki-theme

A [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md) theme that publishes Markdown pages compatible with [Github Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis).

[![npm](https://img.shields.io/npm/v/typedoc-github-wiki-theme.svg)](https://www.npmjs.com/package/typedoc-github-wiki-theme)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What does it do?

This theme customises the output from [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md):

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_Sidebar.md` file to enable custom sidebar navigation.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown@next typedoc-github-wiki-theme@next --save-dev
```

## Usage

**typedoc.json**

```json
{
  "plugin": ["typedoc-plugin-markdown", "typedoc-github-wiki-theme"]
}
```

## Options

For options please refer to [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md#options).

The following options are preset with the theme:

```json
{
  "entryFileName": "Home.md",
  "flattenOutputFiles": true,
  "skipIndexPage": true,
  "hideInPageTOC": true,
  "hidePageHeader": true,
  "hideBreadcrumbs": true,
  "hidePageTitle": true
}
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-github-wiki-theme/LICENSE)

```

```
