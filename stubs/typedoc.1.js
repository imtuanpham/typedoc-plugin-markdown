module.exports = {
  ...require('./typedoc.base'),
  plugin: ['typedoc-plugin-markdown'],
  outputFileStrategy: 'members',
};