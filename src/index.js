import './rolldate.less';

import BScroll from './bscroll.min';
let pkg = require('../package.json');

export class Date{
    constructor(config){
        if(!config || !config.el){return;}
        let _this = this,
            el = _this.$(config.el);

        if(!el || el.rolldate){return;}
        el.rolldate = true;
        _this.extend(config);
        el.addEventListener('click', function() {
            let dom = _this.$('.rolldate-container');
            if(dom){return;}
            if(el.nodeName.toLowerCase() == 'input'){el.blur();}
            if(_this.config.tapBefore && _this.config.tapBefore.call(_this,el) === false){return false;}
            _this.createUi();
        })
        // 设置默认日期
        if(config.value){
            if(el.nodeName.toLowerCase() == 'input'){
                el.value = config.value;
            }else{
                el.innerText = config.value;
            }
            let str = config.value.replace(/-/g,'/').replace(/[^\d/:\s]/g,''),
                date = new window.Date(str);

            if(!date || date == 'Invalid Date'){
                console.error('Invalid Date：'+str);
            }else{
                el.date = date;
            }
        }
    }
    baseData(){

        return {
            date:new window.Date(),
            dateFormat:['YYYY-MM','YYYY-MM-DD','YYYY-MM-DD hh:mm','YYYY-MM-DD hh:mm:ss','YYYY','MM','DD','hh:mm','hh:mm:ss','YYYY-MM-DD hh','hh','mm','ss'],//支持的日期格式
            domClass:['rolldate-year','rolldate-month','rolldate-day','rolldate-hour','rolldate-min','rolldate-sec'],
            opts:{//插件默认配置
                el:'',
                format:'YYYY-MM-DD',
                beginYear:2000,
                endYear:2100,
                tapBefore:null,
                moveEnd:null,
                confirmBefore:null,
                confirmEnd:null,
                minStep:1,
                lang:{title:'选择日期',cancel:'取消',confirm:'确认',year:'年',month:'月',day:'日',hour:'时',min:'分',sec:'秒'}
            }
        };
    }
    extend(config){
        let _this = this,
            opts = _this.baseData().opts;
            
        for(let key in opts){
            if(opts[key] && typeof opts[key] == 'object'){
                for(let key2 in config[key]){
                    opts[key][key2] = config[key][key2] == undefined? opts[key][key2]:config[key][key2];
                }
            }else{
                opts[key] = config[key] === 0? 0 : config[key] || opts[key];
            }
        }
        _this.config = opts;
    }
    createUi(){
        let _this = this,   
            data = _this.baseData(),
            index = data.dateFormat.indexOf(_this.config.format);

        index = index > 1? index+1 : index;
        let $class = index == 5? [data.domClass[0]]: index ==6? [data.domClass[1]]: index ==7? [data.domClass[2]]: index ==8? data.domClass.slice(3,5): index ==9? data.domClass.slice(3):index ==10? data.domClass.slice(0,4):index ==11? data.domClass.slice(3,4):index ==12? data.domClass.slice(4,5):index ==13? data.domClass.slice(5,6):data.domClass.slice(0,index + 2),
            len = $class.length,
            ul = '',
            el = _this.$(_this.config.el),
            date = el.date || data.date,
            itemClass = '',
            lang = _this.config.lang;

        for(let i=0; i<len; i++){
            ul += '<div id="'+ $class[i]+'"><ul class="wheel-scroll">';

            let domMndex = 0;
            if(i == 0 && (index < 6 || index == 10)){
                for(let j=_this.config.beginYear; j<=_this.config.endYear; j++){
                    itemClass = j == date.getFullYear()? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${j}${lang.year}</li>`;
                    domMndex ++;
                }
            }else if((i == 1 || index == 6) && (index < 7 || index == 10)){
                for(let k=1; k<=12; k++){
                    itemClass = k == date.getMonth() + 1? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${k<10? '0'+k : k}${lang.month}</li>`;
                    domMndex ++;
                }
            }else if((i == 2 || index == 7) && (index <= 7 || index == 10)){
                let day = _this.bissextile(date.getFullYear(),date.getMonth() + 1);
                for(let l=1; l<=day; l++){
                    itemClass = l == date.getDate()? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${l<10? '0'+l : l}${lang.day}</li>`;
                    domMndex ++;
                }
            }else if(i == 3 || (index > 7 && index < 12  && i == 0)){
                for(let m=0; m<=23; m++){
                    itemClass = m == date.getHours()? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${m<10? '0'+m : m}${lang.hour}</li>`;
                    domMndex ++;
                }
            }else if(i == 4 || (index > 7 && i == 1) || index == 12){
                for(let n=0; n<=59; n+=_this.config.minStep){
                    itemClass = n == date.getMinutes()? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${n<10? '0'+n : n}${lang.min}</li>`;
                    domMndex ++;
                }
            }else if(i == 5 || (index > 7 && i == 2) || index == 13){
                for(let o=0; o<=59; o++){
                    itemClass = o == date.getSeconds()? 'active':'';

                    ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}">${o<10? '0'+o : o}${lang.sec}</li>`;
                    domMndex ++;
                }
            }
            ul += '</ul></div>'
        }
        let $html = `<div class="rolldate-mask"></div>
            <div class="rolldate-panel fadeIn">
                <header>
                    <span class="rolldate-btn rolldate-cancel">${lang.cancel}</span>
                    ${lang.title}
                    <span class="rolldate-btn rolldate-confirm">${lang.confirm}</span>
                </header>
                <section class="rolldate-content">
                    <div class="rolldate-dim mask-top"></div>
                    <div class="rolldate-dim mask-bottom"></div>
                    <div class="rolldate-wrapper">
                        ${ul}
                    </div>
                </section>
            </div>`,
            box = document.createElement("div");

            // 在微信中输入框在底部时，偶现按钮点击范围被挤压，暂定增加按钮高度
            box.className = `rolldate-container${!!navigator.userAgent.match(/MicroMessenger/i)?' wx':''}`;
            box.innerHTML = $html;
            document.body.appendChild(box);
            
        _this.scroll = [];
        
        for(let i=0; i<len; i++){
            
            _this.scroll[i] = new BScroll('#'+$class[i], {
                wheel: {
                  selectedIndex: 0,
                  wheelWrapperClass: 'wheel-scroll',
                  wheelItemClass: 'wheel-item'
                },
                probeType: 1
              });

           let that = _this.scroll[i],
               active = _this.$('#'+$class[i]+' .active'),
               index = active? active.getAttribute('data-index') : Math.round(date.getMinutes()/_this.config.minStep);

            that.wheelTo(index);
            // 滚动结束
            that.on('scrollEnd', () => {
                if(_this.config.moveEnd){
                    _this.config.moveEnd.call(_this,_this.$(_this.config.el),that);
                }
                if(data.domClass.slice(0,2).indexOf(that.wrapper.id) != -1 && _this.scroll[2]){
                    let prevDay = _this.getscrollDay(_this.scroll[2]),
                        day = _this.bissextile(_this.getscrollDay(_this.scroll[0]),_this.getscrollDay(_this.scroll[1])),
                        li = '';
  
                    if(day != _this.$('#'+data.domClass[2]+' li','all').length){

                        for(let l=1; l<=day; l++){
                            li += `<li class="wheel-item">${l<10? '0'+l : l}${lang.day}</li>`;
                        }
                        _this.$('#'+data.domClass[2]+' ul').innerHTML = li;
                        _this.scroll[2].refresh();
                    }
                }
            })
           
        }
        _this.event();
    }
    $(selector,flag){
        if(typeof selector != 'string' && selector.nodeType){
            return selector;
        }

        return flag? document.querySelectorAll(selector) : document.querySelector(selector);
    }
    event(){
        let _this = this,
             mask = _this.$('.rolldate-mask'),
             cancel = _this.$('.rolldate-cancel'),
             confirm = _this.$('.rolldate-confirm');

        mask.addEventListener('click', function(){_this.destroy();})
        cancel.addEventListener('click', function(){_this.destroy();})
        confirm.addEventListener('click', function(){
            let el = _this.$(_this.config.el),
                data = _this.baseData(),
                date = _this.config.format,
                nativeDate = new window.Date(),
                index = data.dateFormat.indexOf(date);

            _this.scroll.forEach(function(v,i){
                let d = _this.getscrollDay(v),
                    str;

                    if(index <=4 || index == 9){
                        str = i == 0? 'YYYY':i == 1? 'MM':i == 2? 'DD':i == 3? 'hh':i == 4? 'mm':'ss';
                    }else if(index == 5){
                        str = 'MM';
                    }else if(index == 6){
                        str = 'DD';
                    }else if(index == 7){
                        str = i == 0? 'hh':i == 1? 'mm':'';
                    }else if(index == 8){
                         str = i == 0? 'hh':i == 1? 'mm':'ss';
                    }else if(index == 10){
                        str = 'hh';
                    }else if(index == 11){
                        str = 'mm';
                    }else if(index == 12){
                        str = 'ss';
                    }

                date = date.replace(str,d);

                if(str == 'YYYY'){
                    nativeDate.setFullYear(d);
                }else if(str == 'MM'){
                    nativeDate.setMonth(d-1);
                }else if(str == 'DD'){
                    nativeDate.setDate(d);   
                }else if(str == 'hh'){
                    nativeDate.setHours(d);
                }else if(str == 'mm'){
                    nativeDate.setMinutes(d);
                }else if(str == 'ss'){
                    nativeDate.setSeconds(d);
                }
            })
            if(_this.config.confirmBefore){
                var flag = _this.config.confirmBefore.call(_this,el,date);
                if(flag === false){
                    return false
                }else if(flag){
                    date = flag;
                }
            }
            if(el.nodeName.toLowerCase() == 'input'){
                el.value = date;
            }else{
                el.innerText = date;
            }
            _this.destroy(date);
            el.date = nativeDate;
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
    destroy(date){
        let _this = this;

        _this.scroll.forEach(function(v,i){v.destroy();})

        if(_this.config.confirmEnd){
            let el = _this.$(_this.config.el);
            
            _this.config.confirmEnd.call(_this,el,date);
        }
        _this.$('.rolldate-panel').className = 'rolldate-panel fadeOut';
        setTimeout(function() {
            document.body.removeChild(_this.$('.rolldate-container'));
        }, 300);
    }
    getscrollDay(scroll){
        let _this = this;

        return this.$('#'+scroll.wrapper.id+' li','all')[scroll.getSelectedIndex()].innerText.replace(/\D/g,'');
    }
}
export let version = pkg.version;