import {resolve} from "path";
import theme from './theme.config';
import routes from './router.config';

export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: { webpackChunkName: true },
      title: 'OSS_moitoring',
      dll: true,
      pwa: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      //links: [
      //  { rel: 'icon', href: '<%= PUBLIC_PATH %>/public/favicon.ico' },
      //],
    }],
  ],
  alias: {
    '@': resolve(__dirname, '../src'),
  },
  manifest: {
    basePath: '/',
  },
  theme,
  routes
};
