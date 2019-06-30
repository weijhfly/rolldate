# rolldate [![npm](https://img.shields.io/npm/v/rolldate.svg)](https://www.npmjs.com/package/rolldate) [![npm](https://img.shields.io/npm/dm/rolldate.svg)](https://www.npmjs.com/package/rolldate)
此插件为[jquery-date](https://github.com/weijhfly/jqueryDatePlugin "jquery-date")的全新版本，主要为了解决旧版参数设计不够合理、滑动效率不高、依赖jquery、没有可选的主题风格等问题，并增加了回调函数，使插件有更大的灵活性。
## 2019/05/24 3.0版本更新
上一个版本为2.1.5, 新版本(从3.0.0开始)的改动：

1. 使用方式由new rolldate.Date改为new Rolldate;  
2. 回调函数调整：tapBefore更名为init，confirmBefore更名为confirm，取消confirmEnd，增加cancel;  
3. 日期格式(format)调整为无限制，可根据规则随意组合;      

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
import Rolldate from 'rolldate'
new Rolldate({
  el:'#date'
})
```
### commonJS
```js
var Rolldate = require('rolldate');
new Rolldate({
  el:'#date'
})
```
### amd
```js
require(['rolldate'],function(Rolldate){
  new Rolldate({
    el:'#date'
  })
})
```
### cmd
```js
seajs.use('rolldate',function(undefined){
    //插件没有遵循cmd规范，这里的Rolldate是全局的
    new Rolldate({
      el:'#date'
    })
});
```
## 参数、方法说明
名称|必填|默认值|说明
---|:-:|:-:|---
el|否|无|绑定插件的dom元素，插件内部使用document.querySelector，<br>也可以直接传递dom元素对象，只支持单个
format|否|'YYYY-MM-DD'|日期格式，无限制。规则：年-YYYY 月-MM 日-DD 时-hh 分-mm 秒-ss 使用/、-、空格、:之一分隔，可随意组合
beginYear|否|2000|日期开始年份
endYear|否|2100|日期结束年份
value|否|无|日期初始化的默认值，列如'2018-03-18'
lang|否|年、月、日...|配置插件语言，默认：title:'选择日期',cancel:'取消',confirm:'确认',<br>year:'年',month:'月',day:'日',hour:'时',min:'分',sec:'秒'
minStep|否|1|分钟按指定数分隔
init|否|null|插件触发前的回调函数，return false可阻止插件执行
moveEnd|否|null|插件滚动后的回调函数，函数返回一个参数(better-scroll实例)
confirm|否|null|确认按钮触发前的回调函数，return false可阻止插件执行，<br>return其他值可修改日期，函数返回一个参数(选中的日期)
cancel|否|null|插件取消时触发的回调函数
trigger|否|'tap'|默认使用tap解决移动端click事件300ms延迟，可选click替换tap。注意使用tap会阻止其他绑定的click事件的触发
show|否|无|主动触发插件，当trigger为tap时，主动触发插件应该使用此方法
hide|否|无|主动隐藏插件  

```js
//完整参数、方法示例
var rd = new Rolldate({
    el: '#date',
    format: 'YYYY-MM-DD',
    beginYear: 2000,
    endYear: 2100,
    minStep:1,
    lang:{title:'自定义标题'},
    trigger:'tap',
    init: function() {
      console.log('插件开始触发');
    },
    moveEnd: function(scroll) {
      console.log('滚动结束');
    },
    confirm: function(date) {
      console.log('确定按钮触发');
    },
    cancel: function() {
      console.log('插件运行取消');
    }
})
rd.show();
rd.hide();

```
