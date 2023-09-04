const path = require('path');
module.exports = {
  ...require('./typedoc.base.cjs'),
  entryPoints: [path.join(__dirname, '../src/csdk/*.ts')],
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-plugin-frontmatter',
    'typedoc-plugin-mdn-links',
  ],
  hideInPageTOC: true,
  hidePageHeader: true,
  hidePageTitle: false,
  hideBreadcrumbs: true,
  titleTemplate: "{kind} {name}",
  propertiesFormat: 'list',
};
