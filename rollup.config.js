import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import banner from 'rollup-plugin-banner';
import merge from 'webpack-merge';
import json from 'rollup-plugin-json';

let year = new Date().getFullYear(),
    version = pkg.version;

const bannerText =`Rolldate ${version}\nCopyright ${year}\nweijhfly https://github.com/weijhfly/rolldate\nLicensed under MIT\nReleased on: aug 4, 2018`;

let config = {
    input: 'src/index.js',
    output: {
      name: 'Rolldate',
      file: 'dist/rolldate.js',
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      json(),
      postcss({
          plugins: [
            autoprefixer({//补全前缀
        			browsers: ['last 20 versions']
        		}),
            cssnano
          ],
          //extract: 'dist/css/bundle.css' // 输出路径
      }),
      babel({
        exclude: 'node_modules/**', // 排除引入的库
        runtimeHelpers: true // 配置runtime，不设置会报错
      }),
      banner(bannerText),
    ],
  };

let confinMin = merge({}, config);

confinMin.output.file = 'dist/rolldate.min.js';
confinMin.plugins.unshift(uglify());
export default [config, confinMin];
