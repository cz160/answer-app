import { defineConfig } from 'umi';

import pxToRem from 'postcss-pxtorem';

import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  targets: {
    ie: 11,
  },
  theme: {
    hd: '2px',
  },
  fastRefresh: {},
  extraPostCSSPlugins: [
    pxToRem({
      rootValue: 50,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
  ],
});
