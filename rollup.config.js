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

let bannerText = `Rolldate ${version}
Copyright 2018-${year}
weijhfly https://github.com/weijhfly/rolldate
Licensed under MIT
Released on: aug 4, 2018`;

console.log(bannerText)
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
          overrideBrowserslist: ['last 20 versions']
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

let [min, es, cjs] = [merge({}, config), merge({}, config), merge({}, config)];

min.output.file = 'dist/rolldate.min.js';
min.plugins.unshift(uglify());

es.output.file = 'dist/rolldate.es.js';
es.output.format = 'es';

cjs.output.file = 'dist/rolldate.cjs.js';
cjs.output.format = 'cjs';

export default [config, min, es, cjs];
