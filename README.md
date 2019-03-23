# rolldate [![npm](https://img.shields.io/npm/v/rolldate.svg)](https://www.npmjs.com/package/rolldate) [![npm](https://img.shields.io/npm/dm/rolldate.svg)](https://www.npmjs.com/package/rolldate)
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
import {Date as rolldate} from 'rolldate'
new rolldate({
  el:'#date'
})
```
### commonJS
```js
var rolldate = require('rolldate');
new rolldate.Date({
  el:'#date'
})
```
### amd
```js
require(['rolldate'],function(rolldate){
  new rolldate.Date({
    el:'#date'
  })
})
```
### cmd 
```js
seajs.use('rolldate',function(undefined){
    //插件没有遵循cmd规范，这里的rolldate是全局的
    new rolldate.Date({
      el:'#date'
    })
});
```
## 参数说明
名称|必填|默认值|说明
---|:-:|:-:|---
el|是|无|绑定插件的dom元素，插件内部使用document.querySelector，<br>也可以直接传递dom元素对象，只支持单个
format|否|'YYYY-MM-DD'|日期格式，支持YYYY-MM、YYYY-MM-DD、YYYY-MM-DD hh:mm、<br>YYYY、YYYY-MM-DD hh:mm:ss、MM、DD、hh:mm、hh:mm:ss、<br>YYYY-MM-DD hh、hh、mm、ss
beginYear|否|2000|日期开始年份
endYear|否|2100|日期结束年份
value|否|无|日期初始化的默认值，列如'2018-03-18'
lang|否|年、月、日...|可配置插件语言，默认：title:'选择日期',cancel:'取消',confirm:'确认',<br>year:'年',month:'月',day:'日',hour:'时',min:'分',sec:'秒'
minStep|否|1|分钟按指定数分隔
tapBefore|否|null|插件触发前的回调函数，return false可阻止插件执行，<br>函数返回一个参数(绑定插件的dom元素)
moveEnd|否|null|插件滚动后的回调函数，函数返回两个参数<br>(绑定插件的dom元素及better-scroll实例)
confirmBefore|否|null|确认按钮触发前的回调函数，return false可阻止插件执行，<br>return其他值可修改日期，函数返回两个参数(绑定插件的dom元素<br>及选中的日期)
confirmEnd|否|null|插件运行结束后的回调函数，确认、取消都会执行，函数返回两个<br>参数(绑定插件的dom元素及选中的日期，取消时日期为undefined)

```js
//参数示例
new rolldate.Date({
  el:'#date',
  format:'YYYY-MM-DD',
  beginYear:2000,
  endYear:2100,
  value:'2018-03-18',
  minStep:1,
  lang:{title:'自定义标题'},
  tapBefore:function(el){
    console.log('插件开始触发');
  },
  moveEnd:function(el,scroll){
    console.log('滚动结束');
  },
  confirmBefore:function(el,date){
    console.log('确定按钮触发');
  },
  confirmEnd:function(el,date){
    console.log('插件运行结束');
  }
 })
```
