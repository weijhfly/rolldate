import './rolldate.less';
// 从npm下载的iscroll发现无法滑动bug，这里用github上的最新版v5.2.0-snapshot
import IScroll from './iscroll/iscroll';
let pkg = require('../package.json');

// 暂定dom只渲染一次
console.log('正在渲染ui');
var yearScroll = new IScroll(".rolldate-year", {
   snap: 'li'
});
var monthScroll = new IScroll(".rolldate-month", {
    snap: 'li'
});
var dayScroll = new IScroll(".rolldate-day", {
    snap: 'li'
});
export class Date{
	constructor(config){
		console.log(config);
    }
}
export var version = pkg.version;