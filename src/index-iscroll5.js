import './rolldate.less';
import IScroll from './iscroll/iscroll5';
let pkg = require('../package.json');

export class Date{
	constructor(config){
        if(!config || !config.el){return;}
        let _this = this,
            el = _this.$(config.el)[0];

		if(!el){return;}
		_this.extend(config);
        el.addEventListener('click', function() {
            if(el.nodeName == 'INPUT'){el.blur();}
            if(_this.config.tapBefore && _this.config.tapBefore.call(_this,el) === false){return false;}
            _this.createUi();
        })
    }
    baseData(){

    	return {
    		date:new window.Date(),
    		emptyli:'<li>&nbsp;</li>',
    		dateFormat:['YYYY-MM','YYYY-MM-DD','YYYY-MM-DD hh:mm','YYYY-MM-DD hh:mm:ss','YYYY'],//支持的日期格式
            domClass:['rolldate-year','rolldate-month','rolldate-day','rolldate-hour','rolldate-min','rolldate-sec'],
    		opts:{//插件默认配置
    			el:'',
				format:'YYYY-MM-DD',
				beginYear:2000,
				endYear:2100,
				theme:'',
				tapBefore:null,
				moveEnd:null,
				confirmBefore:null,
				confirmEnd:null
    		}
    	};
    }
    extend(config){
        let _this = this,
    	    opts = _this.baseData().opts;
    		
    	for(let key in opts){
    		opts[key] = config[key] || opts[key];
    	}
    	_this.config = opts;
    }
    createUi(){
        let _this = this,   
            data = _this.baseData(),
            index = data.dateFormat.indexOf(_this.config.format);

        index = index > 1? index+1 : index;
        let $class = index == 5? [data.domClass[0]]:data.domClass.slice(0,index + 2),
            len = $class.length,
            ul = '',
            el = _this.$(_this.config.el)[0],
            hasDate = !!el.date,
            date = hasDate? new window.Date(el.date.replace(/-/g,'/')):data.date;
 
        for(let i=0; i<len; i++){
            ul += '<div class="'+ $class[i]+'"><ul>' + data.emptyli;
            if(i == 0){
                for(let j=_this.config.beginYear; j<=_this.config.endYear; j++){
                    ul += '<li'+(j==date.getFullYear()?' class="active"':'')+'>'+ j +'年</li>';
                }
            }else if(i == 1){
                for(let k=1; k<=12; k++){
                    ul += '<li'+(k==date.getMonth() + 1?' class="active"':'')+'>'+ (k<10? '0'+k : k) +'月</li>';
                }
            }else if(i == 2){
                let day = _this.bissextile(date.getFullYear(),date.getMonth() + 1);
                for(let l=1; l<=day; l++){
                    ul += '<li'+(l==date.getDate()?' class="active"':'')+'>'+ (l<10? '0'+l : l) +'日</li>';
                }
            }else if(i == 3){
                for(let m=0; m<=23; m++){
                    ul += '<li'+(m==date.getHours()?' class="active"':'')+'>'+ (m<10? '0'+m : m) +'时</li>';
                }
            }else if(i == 4){
                for(let n=0; n<=59; n++){
                    ul += '<li'+(n==date.getMinutes()?' class="active"':'')+'>'+ (n<10? '0'+n : n) +'分</li>';
                }
            }else if(i == 5){
                for(let o=0; o<=59; o++){
                    ul += '<li'+(o==date.getSeconds()?' class="active"':'')+'>'+ (o<10? '0'+o : o) +'秒</li>';
                }
            }
            ul += data.emptyli +'</ul></div>'
        }
    	let $html = `<div class="rolldate-mask"></div>
			<div class="rolldate-wrapper">
				<header>选择日期</header>
				<section class="rolldate-content">
					<div class="rolldate-frame">${ul}</div>
				</section>
				<footer>
					<button class="rolldate-btn rolldate-cancel">取消</button>
					<button class="rolldate-btn rolldate-confirm">确定</button>
				</footer>
			</div>`,
            box = document.createElement("div"),
            className = index == 0? 'rolldate-two':index == 3? 'rolldate-five':index == 4? 'rolldate-six':index == 5? 'rolldate-one':'';

            box.className = 'rolldate-container ' + className;
            box.innerHTML = $html;
            document.body.append(box);
            _this.setTheme();
            
        _this.iscroll = [];
        for(let i=0; i<len; i++){
            _this.iscroll[i] = new IScroll('.'+$class[i], {
               snap: 'li',
               checkDOMChanges:i==2
            });
            let li = _this.$('.'+$class[i]+' .active')[0].previousSibling;
            _this.iscroll[i].scrollToElement(li);
            _this.iscroll[i].on('scrollEnd', function(){
                if(_this.config.moveEnd){
                    _this.config.moveEnd.call(_this,_this.$(_this.config.el)[0],this);
                }
                if(data.domClass.slice(0,2).indexOf(this.wrapper.className) != -1 && _this.iscroll[2]){
                    let prevDay = _this.getIscrollDay(_this.iscroll[2]),
                        day = _this.bissextile(_this.getIscrollDay(_this.iscroll[0]),_this.getIscrollDay(_this.iscroll[1])),
                        li = '';

                    if(day+2 != _this.$('.'+data.domClass[2]+' li').length){

                        for(let l=1; l<=day; l++){
                            li += '<li>'+ (l<10? '0'+l : l) +'日</li>';
                        }
                        li = data.emptyli + li + data.emptyli;
                        _this.$('.'+data.domClass[2]+' ul')[0].innerHTML = li;
                        if(prevDay > day){
                            _this.iscroll[2].scrollToElement(_this.$('.'+data.domClass[2]+' li')[day-1]);
                        }
                    }
                }
            });
        }
        _this.event();
    }
    $(selector){
    	return document.querySelectorAll(selector);
    }
    event(){
        let _this = this,
             mask = _this.$('.rolldate-mask')[0],
             cancel = _this.$('.rolldate-cancel')[0],
             confirm = _this.$('.rolldate-confirm')[0];

        mask.addEventListener('click', function(){_this.destroy();})
        cancel.addEventListener('click', function(){_this.destroy();})
        confirm.addEventListener('click', function(){
            let el = _this.$(_this.config.el)[0],
                date = _this.config.format;

            _this.iscroll.forEach(function(v,i){
                let d = _this.getIscrollDay(v),
                    str = i == 0? 'YYYY':i == 1? 'MM':i == 2? 'DD':i == 3? 'hh':i == 4? 'mm':'ss';

                date = date.replace(str,d);
            })
            el.date = date;
            if(_this.config.confirmBefore){
                var flag = _this.config.confirmBefore.call(_this,el,date);
                if(flag === false){
                    if(_this.config.confirmEnd){_this.config.confirmEnd.call(_this);}
                    return false
                }else if(flag){
                    date = flag;
                }
            }
            if(el.nodeName == 'INPUT'){
                el.value = date;
            }else{
                el.innerText = date;
            }
            if(_this.config.confirmEnd){_this.config.confirmEnd();}
            _this.destroy();
        })
    }
    bissextile(year,month){
        let day;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            day = 31
        } else if (month == 4 || month == 6 || month == 11 || month == 9) {
            day = 30
        } else if (month == 2) {
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) { //闰年
                day = 29
            } else {
                day = 28
            }

        }
        return day;
    }
    destroy(){
        let _this = this;

        _this.iscroll.forEach(function(v,i){v.destroy();})
        document.body.removeChild(_this.$('.rolldate-container')[0]);
    }
    getIscrollDay(iscroll){
        return this.$('.'+iscroll.wrapper.className+' li')[Math.abs(iscroll.y)/40+1].innerText.replace(/\D/g,'');
    }
    setTheme(){
        let _this = this,
            theme = _this.config.theme,
            defaultTheme = {blue:'#16a1d3',red:'#d91600',green:'#009688',black:'#393D49'},
            header = _this.$('.rolldate-container header')[0],
            btn = _this.$('.rolldate-container .rolldate-confirm')[0];

        if(theme){
            if(defaultTheme[theme]){
                header.style.background = btn.style.background = defaultTheme[theme];
            }else{
                header.style.background = btn.style.background = theme;
            }
        }

    }
}
export let version = pkg.version;