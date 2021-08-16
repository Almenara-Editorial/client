const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
  stories: [
    "../src/components/**/stories.ts?(x)"
  ],
  addons: [
    "@storybook/addon-essentials",
  ]
}
