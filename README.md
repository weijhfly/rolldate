# rolldate [![npm](https://img.shields.io/npm/v/rolldate.svg)](https://www.npmjs.com/package/rolldate)
此插件为[jquery-date](https://github.com/weijhfly/jqueryDatePlugin "jquery-date")的全新版本，主要为了解决旧版参数设计不够合理、滑动效率不高、依赖jquery、没有可选的主题风格等问题，并增加了回调函数，使插件有更大的灵活性。
## 2019/02/03重要版本更新
上一个版本为1.5.1, 新版本(从2.0.0开始)与此前版本的不同之处： 

1. 将滑动插件由iscroll替换为better-scroll，提升了兼容性;  
2. 改变了界面风格，操作更加方便;  
3. 取消了rolldate.css文件，只需引入js即可;  
4. 移除了主题风格、日期初始化的滑动时间设置；  

注意2.0.0之前的版本将不再维护，如有需要请访问：[旧版rolldate](https://weijhfly.github.io/rolldate-index2.html "rolldate")
## 演示
[rolldate](https://weijhfly.github.io/rolldate-index.html "rolldate")(下方直接扫码即可体验)  

![rolldate](https://weijhfly.github.io/images/rolldate-demo.jpg)

## 使用方式
### es6
```js
import '../node_modules/rolldate/dist/css/rolldate.css'
import {Date as rolldate} from 'rolldate'
new rolldate({
  el:'#date'
})
```
### commonJS
```js
require('../node_modules/rolldate/dist/css/rolldate.css');
var rolldate = require('rolldate');
new rolldate.Date({
  el:'#date'
})
```
### require.js
```js
require(['rolldate'],function(rolldate){
  new rolldate.Date({
    el:'#date'
  })
})
```
### browser
```js
new rolldate.Date({
  el:'#date'
})
```
## 参数及方法
演示或dist/index.html中有完整示例，请查阅。