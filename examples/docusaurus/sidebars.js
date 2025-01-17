/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  sidebar: [
    {
      'API-1': [
        {
          type: 'autogenerated',
          dirName: 'api-1',
        },
      ],
    },
    {
      type: 'category',
      label: 'API 2',
      link: {
        type: 'doc',
        id: 'api-2/index',
      },
      items: [{ type: 'autogenerated', dirName: 'api-2' }],
    },
    {
      type: 'category',
      label: 'API 3',
      link: {
        type: 'doc',
        id: 'api-3/index',
      },
      items: [{ type: 'autogenerated', dirName: 'api-3' }],
    },
  ],
};

module.exports = sidebars;
