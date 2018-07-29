import './rolldate.less';
var pkg = require('../package.json')
// 从npm下载的iscroll发现无法滑动bug，这里用github上的最新版v5.2.0-snapshot
import IScroll from './iscroll/iscroll';

let c = 2;
export class Date{
	constructor(el, obj){
		console.log(el,obj);
        this.createUi();
        this.setIscroll();
    }
    createUi(){
    	console.log('正在渲染ui');
    }
    setIscroll(){
    	var yearScroll = new IScroll(".rolldate-year", {
    	       snap: 'li'
			});
		var monthScroll = new IScroll(".rolldate-month", {
		    snap: 'li'
		});
		var dayScroll = new IScroll(".rolldate-day", {
		    snap: 'li'
		});
    }
}
export var version = pkg.version;