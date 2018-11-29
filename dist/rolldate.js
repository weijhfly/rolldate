/*!
 * Rolldate 1.5.0
 * Copyright 2018 雾空
 * https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rolldate"] = factory();
	else
		root["rolldate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = exports.Date = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// 更换为iscroll4


__webpack_require__(3);

var _iscroll = __webpack_require__(1);

var _iscroll2 = _interopRequireDefault(_iscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pkg = __webpack_require__(2),
    iScroll = _iscroll2.default.iScroll;

var Date = exports.Date = function () {
    function Date(config) {
        _classCallCheck(this, Date);

        if (!config || !config.el) {
            return;
        }
        var _this = this,
            el = _this.$(config.el)[0];

        if (!el || el.rolldate) {
            return;
        }
        el.rolldate = true;
        _this.extend(config);
        el.addEventListener('click', function () {
            var dom = _this.$('.rolldate-container')[0];
            if (dom) {
                return;
            }
            if (el.nodeName == 'INPUT') {
                el.blur();
            }
            if (_this.config.tapBefore && _this.config.tapBefore.call(_this, el) === false) {
                return false;
            }
            _this.createUi();
        });
        // 设置默认日期
        if (config.value) {
            if (el.nodeName == 'INPUT') {
                el.value = config.value;
            } else {
                el.innerText = config.value;
            }
            var date = config.value.replace(/-/g, '/').replace(/[^\d/:]/g, '');

            el.date = new window.Date(date);
        }
    }

    _createClass(Date, [{
        key: 'baseData',
        value: function baseData() {

            return {
                date: new window.Date(),
                emptyli: '<li>&nbsp;</li>',
                dateFormat: ['YYYY-MM', 'YYYY-MM-DD', 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD hh:mm:ss', 'YYYY', 'MM', 'DD', 'hh:mm', 'hh:mm:ss'], //支持的日期格式
                domClass: ['rolldate-year', 'rolldate-month', 'rolldate-day', 'rolldate-hour', 'rolldate-min', 'rolldate-sec'],
                opts: { //插件默认配置
                    el: '',
                    format: 'YYYY-MM-DD',
                    beginYear: 2000,
                    endYear: 2100,
                    theme: '',
                    scrollTime: 200,
                    tapBefore: null,
                    moveEnd: null,
                    confirmBefore: null,
                    confirmEnd: null,
                    liHeight: 40,
                    minStep: 1
                }
            };
        }
    }, {
        key: 'extend',
        value: function extend(config) {
            var _this = this,
                opts = _this.baseData().opts;

            for (var key in opts) {
                opts[key] = config[key] === 0 ? 0 : config[key] || opts[key];
            }
            _this.config = opts;
        }
    }, {
        key: 'createUi',
        value: function createUi() {
            var _this = this,
                data = _this.baseData(),
                index = data.dateFormat.indexOf(_this.config.format);

            index = index > 1 ? index + 1 : index;
            var $class = index == 5 ? [data.domClass[0]] : index == 6 ? [data.domClass[1]] : index == 7 ? [data.domClass[2]] : index == 8 ? data.domClass.slice(3, 5) : index == 9 ? data.domClass.slice(3) : data.domClass.slice(0, index + 2),
                len = $class.length,
                ul = '',
                el = _this.$(_this.config.el)[0],
                date = el.date ? el.date : data.date;

            for (var i = 0; i < len; i++) {
                ul += '<div id="' + $class[i] + '"><ul>' + data.emptyli;
                if (i == 0 && index < 6) {
                    for (var j = _this.config.beginYear; j <= _this.config.endYear; j++) {
                        ul += '<li' + (j == date.getFullYear() ? ' class="active"' : '') + '>' + j + '年</li>';
                    }
                } else if ((i == 1 || index == 6) && index < 7) {
                    for (var k = 1; k <= 12; k++) {
                        ul += '<li' + (k == date.getMonth() + 1 ? ' class="active"' : '') + '>' + (k < 10 ? '0' + k : k) + '月</li>';
                    }
                } else if ((i == 2 || index == 7) && index <= 7) {
                    var day = _this.bissextile(date.getFullYear(), date.getMonth() + 1);
                    for (var l = 1; l <= day; l++) {
                        ul += '<li' + (l == date.getDate() ? ' class="active"' : '') + '>' + (l < 10 ? '0' + l : l) + '日</li>';
                    }
                } else if (i == 3 || index > 7 && i == 0) {
                    for (var m = 0; m <= 23; m++) {
                        ul += '<li' + (m == date.getHours() ? ' class="active"' : '') + '>' + (m < 10 ? '0' + m : m) + '时</li>';
                    }
                } else if (i == 4 || index > 7 && i == 1) {
                    for (var n = 0; n <= 59; n += _this.config.minStep) {
                        ul += '<li' + (n == date.getMinutes() ? ' class="active"' : '') + '>' + (n < 10 ? '0' + n : n) + '分</li>';
                    }
                } else if (i == 5 || index > 7 && i == 2) {
                    for (var o = 0; o <= 59; o++) {
                        ul += '<li' + (o == date.getSeconds() ? ' class="active"' : '') + '>' + (o < 10 ? '0' + o : o) + '秒</li>';
                    }
                }
                ul += data.emptyli + '</ul></div>';
            }
            var $html = '<div class="rolldate-mask"></div>\n            <div class="rolldate-wrapper">\n                <header>\u9009\u62E9\u65E5\u671F</header>\n                <section class="rolldate-content">\n                    <div class="rolldate-frame">' + ul + '</div>\n                </section>\n                <footer>\n                    <button class="rolldate-btn rolldate-cancel">\u53D6\u6D88</button>\n                    <button class="rolldate-btn rolldate-confirm">\u786E\u5B9A</button>\n                </footer>\n            </div>',
                box = document.createElement("div"),
                className = index == 0 || index == 8 ? 'rolldate-two' : index == 3 ? 'rolldate-five' : index == 4 ? 'rolldate-six' : index >= 5 && index <= 7 ? 'rolldate-one' : '',
                scrollEnd = false;

            box.className = 'rolldate-container ' + className;
            box.innerHTML = $html;
            document.body.appendChild(box);
            _this.setTheme();

            _this.iscroll = [];
            _this.config.liHeight = document.querySelector('.rolldate-frame li').offsetHeight;

            for (var _i = 0; _i < len; _i++) {
                _this.iscroll[_i] = new iScroll($class[_i], {
                    snap: 'li',
                    vScrollbar: false,
                    hScroll: false,
                    checkDOMChanges: _i == 2,
                    onScrollEnd: function onScrollEnd() {
                        if (!scrollEnd) {
                            return;
                        }

                        var liHeight = _this.config.liHeight;
                        if (Math.abs(this.y % liHeight) !== 0) {
                            this.scrollTo(0, -Math.round(Math.abs(this.y) / liHeight) * liHeight, 0, false);
                            return false;
                        }
                        if (_this.config.moveEnd) {
                            _this.config.moveEnd.call(_this, _this.$(_this.config.el)[0], this);
                        }
                        if (data.domClass.slice(0, 2).indexOf(this.wrapper.id) != -1 && _this.iscroll[2]) {
                            var prevDay = _this.getIscrollDay(_this.iscroll[2]),
                                _day = _this.bissextile(_this.getIscrollDay(_this.iscroll[0]), _this.getIscrollDay(_this.iscroll[1])),
                                li = '';
                            if (_day + 2 != _this.$('#' + data.domClass[2] + ' li').length) {

                                for (var _l = 1; _l <= _day; _l++) {
                                    li += '<li>' + (_l < 10 ? '0' + _l : _l) + '日</li>';
                                }
                                li = data.emptyli + li + data.emptyli;
                                _this.$('#' + data.domClass[2] + ' ul')[0].innerHTML = li;
                                if (prevDay > _day) {
                                    _this.iscroll[2].scrollToElement(_this.$('#' + data.domClass[2] + ' li')[_day - 1]);
                                }
                            }
                        }
                    }
                });
                var active = _this.$('#' + $class[_i] + ' .active')[0];
                if (active) {
                    _this.iscroll[_i].scrollToElement(active.previousSibling, _this.config.scrollTime);
                }
            }
            _this.event();

            document.body.style.overflow = 'hidden';
            setTimeout(function () {
                scrollEnd = true;
            }, 1000);
        }
    }, {
        key: '$',
        value: function $(selector) {
            if (typeof selector != 'string' && selector.nodeType) {
                return [selector];
            }
            return document.querySelectorAll(selector);
        }
    }, {
        key: 'event',
        value: function event() {
            var _this = this,
                mask = _this.$('.rolldate-mask')[0],
                cancel = _this.$('.rolldate-cancel')[0],
                confirm = _this.$('.rolldate-confirm')[0];

            mask.addEventListener('click', function () {
                _this.destroy(true);
            });
            cancel.addEventListener('click', function () {
                _this.destroy(true);
            });
            confirm.addEventListener('click', function () {
                var el = _this.$(_this.config.el)[0],
                    data = _this.baseData(),
                    date = _this.config.format,
                    nativeDate = new window.Date(),
                    index = data.dateFormat.indexOf(date);

                _this.iscroll.forEach(function (v, i) {
                    var d = _this.getIscrollDay(v),
                        str = void 0;

                    if (index <= 4) {
                        str = i == 0 ? 'YYYY' : i == 1 ? 'MM' : i == 2 ? 'DD' : i == 3 ? 'hh' : i == 4 ? 'mm' : 'ss';
                    } else if (index == 5) {
                        str = 'MM';
                    } else if (index == 6) {
                        str = 'DD';
                    } else if (index == 7) {
                        str = i == 0 ? 'hh' : i == 1 ? 'mm' : '';
                    } else if (index == 8) {
                        str = i == 0 ? 'hh' : i == 1 ? 'mm' : 'ss';
                    }

                    date = date.replace(str, d);

                    if (str == 'YYYY') {
                        nativeDate.setFullYear(d);
                    } else if (str == 'MM') {
                        nativeDate.setMonth(d - 1);
                    } else if (str == 'DD') {
                        nativeDate.setDate(d);
                    } else if (str == 'hh') {
                        nativeDate.setHours(d);
                    } else if (str == 'mm') {
                        nativeDate.setMinutes(d);
                    } else if (str == 'ss') {
                        nativeDate.setSeconds(d);
                    }
                });
                if (_this.config.confirmBefore) {
                    var flag = _this.config.confirmBefore.call(_this, el, date);
                    if (flag === false) {
                        if (_this.config.confirmEnd) {
                            _this.config.confirmEnd.call(_this, el, date);
                        }
                        return false;
                    } else if (flag) {
                        date = flag;
                    }
                }
                if (el.nodeName == 'INPUT') {
                    el.value = date;
                } else {
                    el.innerText = date;
                }
                if (_this.config.confirmEnd) {
                    _this.config.confirmEnd.call(_this, el, date);
                }
                _this.destroy();
                el.date = nativeDate;
            });

            var liHeight = _this.config.liHeight;

            _this.config.queryStyle = function () {

                window.removeEventListener('resize', _this.config.queryStyle);
                setTimeout(function () {
                    if (_this.$('.rolldate-container')[0] && liHeight != document.querySelector('.rolldate-frame li').offsetHeight) {
                        _this.destroy(true);
                    }
                }, 0);
            };
            window.addEventListener("resize", _this.config.queryStyle, false);
        }
    }, {
        key: 'bissextile',
        value: function bissextile(year, month) {
            var day = void 0;
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                day = 31;
            } else if (month == 4 || month == 6 || month == 11 || month == 9) {
                day = 30;
            } else if (month == 2) {
                if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
                    //闰年
                    day = 29;
                } else {
                    day = 28;
                }
            }
            return day;
        }
    }, {
        key: 'destroy',
        value: function destroy(cancel) {
            var _this = this;

            _this.iscroll.forEach(function (v, i) {
                v.destroy();
            });
            document.body.removeChild(_this.$('.rolldate-container')[0]);
            if (cancel && _this.config.confirmEnd) {
                var el = _this.$(_this.config.el)[0];

                _this.config.confirmEnd.call(_this, el);
            }

            if (_this.config.queryStyle) {
                window.removeEventListener("resize", _this.config.queryStyle, false);
            }
            document.body.style.overflow = 'visible';
        }
    }, {
        key: 'getIscrollDay',
        value: function getIscrollDay(iscroll) {
            var _this = this,
                liHeight = _this.config.liHeight,
                index = Math.abs(iscroll.y % liHeight) !== 0 ? Math.round(Math.abs(iscroll.y) / liHeight) + 1 : Math.abs(iscroll.y) / liHeight + 1;

            return this.$('#' + iscroll.wrapper.id + ' li')[index].innerText.replace(/\D/g, '');
        }
    }, {
        key: 'setTheme',
        value: function setTheme() {
            var _this = this,
                theme = _this.config.theme,
                defaultTheme = { blue: '#16a1d3', red: '#d91600', green: '#009688', black: '#393D49' },
                header = _this.$('.rolldate-container header')[0],
                btn = _this.$('.rolldate-container .rolldate-confirm')[0];

            if (theme) {
                if (defaultTheme[theme]) {
                    header.style.background = btn.style.background = defaultTheme[theme];
                } else {
                    header.style.background = btn.style.background = theme;
                }
            }
        }
    }]);

    return Date;
}();

var version = exports.version = pkg.version;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function(){var m=Math,mround=function(r){return r>>0;},vendor=(/webkit/i).test(navigator.appVersion)?'webkit':(/firefox/i).test(navigator.userAgent)?'Moz':'opera'in window?'O':'',isAndroid=(/android/gi).test(navigator.appVersion),isIDevice=(/iphone|ipad/gi).test(navigator.appVersion),isPlaybook=(/playbook/gi).test(navigator.appVersion),isTouchPad=(/hp-tablet/gi).test(navigator.appVersion),has3d='WebKitCSSMatrix'in window&&'m11'in new WebKitCSSMatrix(),hasTouch='ontouchstart'in window&&!isTouchPad,hasTransform=vendor+'Transform'in document.documentElement.style,hasTransitionEnd=isIDevice||isPlaybook,nextFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1);}})(),cancelFrame=(function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})(),RESIZE_EV='onorientationchange'in window?'orientationchange':'resize',START_EV=hasTouch?'touchstart':'mousedown',MOVE_EV=hasTouch?'touchmove':'mousemove',END_EV=hasTouch?'touchend':'mouseup',CANCEL_EV=hasTouch?'touchcancel':'mouseup',WHEEL_EV=vendor=='Moz'?'DOMMouseScroll':'mousewheel',trnOpen='translate'+(has3d?'3d(':'('),trnClose=has3d?',0)':')',iScroll=function(el,options){var that=this,doc=document,i;that.wrapper=typeof el=='object'?el:doc.getElementById(el);that.wrapper.style.overflow='hidden';that.scroller=that.wrapper.children[0];that.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,hScrollbar:true,vScrollbar:true,fixedScrollbar:isAndroid,hideScrollbar:isIDevice,fadeScrollbar:isIDevice&&has3d,scrollbarClass:'',zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:'scroll',snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault();},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(i in options)that.options[i]=options[i];that.x=that.options.x;that.y=that.options.y;that.options.useTransform=hasTransform?that.options.useTransform:false;that.options.hScrollbar=that.options.hScroll&&that.options.hScrollbar;that.options.vScrollbar=that.options.vScroll&&that.options.vScrollbar;that.options.zoom=that.options.useTransform&&that.options.zoom;that.options.useTransition=hasTransitionEnd&&that.options.useTransition;if(that.options.zoom&&isAndroid){trnOpen='translate(';trnClose=')';}
that.scroller.style[vendor+'TransitionProperty']=that.options.useTransform?'-'+vendor.toLowerCase()+'-transform':'top left';that.scroller.style[vendor+'TransitionDuration']='0';that.scroller.style[vendor+'TransformOrigin']='0 0';if(that.options.useTransition)that.scroller.style[vendor+'TransitionTimingFunction']='cubic-bezier(0.33,0.66,0.66,1)';if(that.options.useTransform)that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose;else that.scroller.style.cssText+=';position:absolute;top:'+that.y+'px;left:'+that.x+'px';if(that.options.useTransition)that.options.fixedScrollbar=true;that.refresh();that._bind(RESIZE_EV,window);that._bind(START_EV);if(!hasTouch){that._bind('mouseout',that.wrapper);if(that.options.wheelAction!='none')
that._bind(WHEEL_EV);}
if(that.options.checkDOMChanges)that.checkDOMTime=setInterval(function(){that._checkDOMChanges();},500);};iScroll.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var that=this;switch(e.type){case START_EV:if(!hasTouch&&e.button!==0)return;that._start(e);break;case MOVE_EV:that._move(e);break;case END_EV:case CANCEL_EV:that._end(e);break;case RESIZE_EV:that._resize();break;case WHEEL_EV:that._wheel(e);break;case'mouseout':that._mouseout(e);break;case'webkitTransitionEnd':that._transitionEnd(e);break;}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))return;this.refresh();},_scrollbar:function(dir){var that=this,doc=document,bar;if(!that[dir+'Scrollbar']){if(that[dir+'ScrollbarWrapper']){if(hasTransform)that[dir+'ScrollbarIndicator'].style[vendor+'Transform']='';that[dir+'ScrollbarWrapper'].parentNode.removeChild(that[dir+'ScrollbarWrapper']);that[dir+'ScrollbarWrapper']=null;that[dir+'ScrollbarIndicator']=null;}
return;}
if(!that[dir+'ScrollbarWrapper']){bar=doc.createElement('div');if(that.options.scrollbarClass)bar.className=that.options.scrollbarClass+dir.toUpperCase();else bar.style.cssText='position:absolute;z-index:100;'+(dir=='h'?'height:7px;bottom:1px;left:2px;right:'+(that.vScrollbar?'7':'2')+'px':'width:7px;bottom:'+(that.hScrollbar?'7':'2')+'px;top:2px;right:1px');bar.style.cssText+=';pointer-events:none;-'+vendor+'-transition-property:opacity;-'+vendor+'-transition-duration:'+(that.options.fadeScrollbar?'350ms':'0')+';overflow:hidden;opacity:'+(that.options.hideScrollbar?'0':'1');that.wrapper.appendChild(bar);that[dir+'ScrollbarWrapper']=bar;bar=doc.createElement('div');if(!that.options.scrollbarClass){bar.style.cssText='position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-'+vendor+'-background-clip:padding-box;-'+vendor+'-box-sizing:border-box;'+(dir=='h'?'height:100%':'width:100%')+';-'+vendor+'-border-radius:3px;border-radius:3px';}
bar.style.cssText+=';pointer-events:none;-'+vendor+'-transition-property:-'+vendor+'-transform;-'+vendor+'-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-'+vendor+'-transition-duration:0;-'+vendor+'-transform:'+trnOpen+'0,0'+trnClose;if(that.options.useTransition)bar.style.cssText+=';-'+vendor+'-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';that[dir+'ScrollbarWrapper'].appendChild(bar);that[dir+'ScrollbarIndicator']=bar;}
if(dir=='h'){that.hScrollbarSize=that.hScrollbarWrapper.clientWidth;that.hScrollbarIndicatorSize=m.max(mround(that.hScrollbarSize*that.hScrollbarSize/that.scrollerW),8);that.hScrollbarIndicator.style.width=that.hScrollbarIndicatorSize+'px';that.hScrollbarMaxScroll=that.hScrollbarSize-that.hScrollbarIndicatorSize;that.hScrollbarProp=that.hScrollbarMaxScroll/that.maxScrollX;}else{that.vScrollbarSize=that.vScrollbarWrapper.clientHeight;that.vScrollbarIndicatorSize=m.max(mround(that.vScrollbarSize*that.vScrollbarSize/that.scrollerH),8);that.vScrollbarIndicator.style.height=that.vScrollbarIndicatorSize+'px';that.vScrollbarMaxScroll=that.vScrollbarSize-that.vScrollbarIndicatorSize;that.vScrollbarProp=that.vScrollbarMaxScroll/that.maxScrollY;}
that._scrollbarPos(dir,true);},_resize:function(){var that=this;setTimeout(function(){that.refresh();},isAndroid?200:0);},_pos:function(x,y){x=this.hScroll?x:0;y=this.vScroll?y:0;if(this.options.useTransform){this.scroller.style[vendor+'Transform']=trnOpen+x+'px,'+y+'px'+trnClose+' scale('+this.scale+')';}else{x=mround(x);y=mround(y);this.scroller.style.left=x+'px';this.scroller.style.top=y+'px';}
this.x=x;this.y=y;this._scrollbarPos('h');this._scrollbarPos('v');},_scrollbarPos:function(dir,hidden){var that=this,pos=dir=='h'?that.x:that.y,size;if(!that[dir+'Scrollbar'])return;pos=that[dir+'ScrollbarProp']*pos;if(pos<0){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']+mround(pos*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';}
pos=0;}else if(pos>that[dir+'ScrollbarMaxScroll']){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']-mround((pos-that[dir+'ScrollbarMaxScroll'])*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';pos=that[dir+'ScrollbarMaxScroll']+(that[dir+'ScrollbarIndicatorSize']-size);}else{pos=that[dir+'ScrollbarMaxScroll'];}}
that[dir+'ScrollbarWrapper'].style[vendor+'TransitionDelay']='0';that[dir+'ScrollbarWrapper'].style.opacity=hidden&&that.options.hideScrollbar?'0':'1';that[dir+'ScrollbarIndicator'].style[vendor+'Transform']=trnOpen+(dir=='h'?pos+'px,0':'0,'+pos+'px')+trnClose;},_start:function(e){var that=this,point=hasTouch?e.touches[0]:e,matrix,x,y,c1,c2;if(!that.enabled)return;if(that.options.onBeforeScrollStart)that.options.onBeforeScrollStart.call(that,e);if(that.options.useTransition||that.options.zoom)that._transitionTime(0);that.moved=false;that.animating=false;that.zoomed=false;that.distX=0;that.distY=0;that.absDistX=0;that.absDistY=0;that.dirX=0;that.dirY=0;if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDistStart=m.sqrt(c1*c1+c2*c2);that.originX=m.abs(e.touches[0].pageX+e.touches[1].pageX-that.wrapperOffsetLeft*2)/2-that.x;that.originY=m.abs(e.touches[0].pageY+e.touches[1].pageY-that.wrapperOffsetTop*2)/2-that.y;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);}
if(that.options.momentum){if(that.options.useTransform){matrix=getComputedStyle(that.scroller,null)[vendor+'Transform'].replace(/[^0-9-.,]/g,'').split(',');x=matrix[4]*1;y=matrix[5]*1;}else{x=getComputedStyle(that.scroller,null).left.replace(/[^0-9-]/g,'')*1;y=getComputedStyle(that.scroller,null).top.replace(/[^0-9-]/g,'')*1;}
if(x!=that.x||y!=that.y){if(that.options.useTransition)that._unbind('webkitTransitionEnd');else cancelFrame(that.aniTime);that.steps=[];that._pos(x,y);}}
that.absStartX=that.x;that.absStartY=that.y;that.startX=that.x;that.startY=that.y;that.pointX=point.pageX;that.pointY=point.pageY;that.startTime=e.timeStamp||Date.now();if(that.options.onScrollStart)that.options.onScrollStart.call(that,e);that._bind(MOVE_EV);that._bind(END_EV);that._bind(CANCEL_EV);},_move:function(e){var that=this,point=hasTouch?e.touches[0]:e,deltaX=point.pageX-that.pointX,deltaY=point.pageY-that.pointY,newX=that.x+deltaX,newY=that.y+deltaY,c1,c2,scale,timestamp=e.timeStamp||Date.now();if(that.options.onBeforeScrollMove)that.options.onBeforeScrollMove.call(that,e);if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDist=m.sqrt(c1*c1+c2*c2);that.zoomed=true;scale=1/that.touchesDistStart*that.touchesDist*this.scale;if(scale<that.options.zoomMin)scale=0.5*that.options.zoomMin*Math.pow(2.0,scale/that.options.zoomMin);else if(scale>that.options.zoomMax)scale=2.0*that.options.zoomMax*Math.pow(0.5,that.options.zoomMax/scale);that.lastScale=scale/this.scale;newX=this.originX-this.originX*that.lastScale+this.x,newY=this.originY-this.originY*that.lastScale+this.y;this.scroller.style[vendor+'Transform']=trnOpen+newX+'px,'+newY+'px'+trnClose+' scale('+scale+')';if(that.options.onZoom)that.options.onZoom.call(that,e);return;}
that.pointX=point.pageX;that.pointY=point.pageY;if(newX>0||newX<that.maxScrollX){newX=that.options.bounce?that.x+(deltaX/2):newX>=0||that.maxScrollX>=0?0:that.maxScrollX;}
if(newY>that.minScrollY||newY<that.maxScrollY){newY=that.options.bounce?that.y+(deltaY/2):newY>=that.minScrollY||that.maxScrollY>=0?that.minScrollY:that.maxScrollY;}
if(that.absDistX<6&&that.absDistY<6){that.distX+=deltaX;that.distY+=deltaY;that.absDistX=m.abs(that.distX);that.absDistY=m.abs(that.distY);return;}
if(that.options.lockDirection){if(that.absDistX>that.absDistY+5){newY=that.y;deltaY=0;}else if(that.absDistY>that.absDistX+5){newX=that.x;deltaX=0;}}
that.moved=true;that._pos(newX,newY);that.dirX=deltaX>0?-1:deltaX<0?1:0;that.dirY=deltaY>0?-1:deltaY<0?1:0;if(timestamp-that.startTime>300){that.startTime=timestamp;that.startX=that.x;that.startY=that.y;}
if(that.options.onScrollMove)that.options.onScrollMove.call(that,e);},_end:function(e){if(hasTouch&&e.touches.length!=0)return;var that=this,point=hasTouch?e.changedTouches[0]:e,target,ev,momentumX={dist:0,time:0},momentumY={dist:0,time:0},duration=(e.timeStamp||Date.now())-that.startTime,newPosX=that.x,newPosY=that.y,distX,distY,newDuration,snap,scale;that._unbind(MOVE_EV);that._unbind(END_EV);that._unbind(CANCEL_EV);if(that.options.onBeforeScrollEnd)that.options.onBeforeScrollEnd.call(that,e);if(that.zoomed){scale=that.scale*that.lastScale;scale=Math.max(that.options.zoomMin,scale);scale=Math.min(that.options.zoomMax,scale);that.lastScale=scale/that.scale;that.scale=scale;that.x=that.originX-that.originX*that.lastScale+that.x;that.y=that.originY-that.originY*that.lastScale+that.y;that.scroller.style[vendor+'TransitionDuration']='200ms';that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose+' scale('+that.scale+')';that.zoomed=false;that.refresh();if(that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);return;}
if(!that.moved){if(hasTouch){if(that.doubleTapTimer&&that.options.zoom){clearTimeout(that.doubleTapTimer);that.doubleTapTimer=null;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.zoom(that.pointX,that.pointY,that.scale==1?that.options.doubleTapZoom:1);if(that.options.onZoomEnd){setTimeout(function(){that.options.onZoomEnd.call(that,e);},200);}}else{that.doubleTapTimer=setTimeout(function(){that.doubleTapTimer=null;target=point.target;while(target.nodeType!=1)target=target.parentNode;if(target.tagName!='SELECT'&&target.tagName!='INPUT'&&target.tagName!='TEXTAREA'){ev=document.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,point.screenX,point.screenY,point.clientX,point.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);ev._fake=true;target.dispatchEvent(ev);}},that.options.zoom?250:0);}}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(duration<300&&that.options.momentum){momentumX=newPosX?that._momentum(newPosX-that.startX,duration,-that.x,that.scrollerW-that.wrapperW+that.x,that.options.bounce?that.wrapperW:0):momentumX;momentumY=newPosY?that._momentum(newPosY-that.startY,duration,-that.y,(that.maxScrollY<0?that.scrollerH-that.wrapperH+that.y-that.minScrollY:0),that.options.bounce?that.wrapperH:0):momentumY;newPosX=that.x+momentumX.dist;newPosY=that.y+momentumY.dist;if((that.x>0&&newPosX>0)||(that.x<that.maxScrollX&&newPosX<that.maxScrollX))momentumX={dist:0,time:0};if((that.y>that.minScrollY&&newPosY>that.minScrollY)||(that.y<that.maxScrollY&&newPosY<that.maxScrollY))momentumY={dist:0,time:0};}
if(momentumX.dist||momentumY.dist){newDuration=m.max(m.max(momentumX.time,momentumY.time),10);if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold){that.scrollTo(that.absStartX,that.absStartY,200);}
else{snap=that._snap(newPosX,newPosY);newPosX=snap.x;newPosY=snap.y;newDuration=m.max(snap.time,newDuration);}}
that.scrollTo(mround(newPosX),mround(newPosY),newDuration);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold)that.scrollTo(that.absStartX,that.absStartY,200);else{snap=that._snap(that.x,that.y);if(snap.x!=that.x||snap.y!=that.y)that.scrollTo(snap.x,snap.y,snap.time);}
if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);},_resetPos:function(time){var that=this,resetX=that.x>=0?0:that.x<that.maxScrollX?that.maxScrollX:that.x,resetY=that.y>=that.minScrollY||that.maxScrollY>0?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;if(resetX==that.x&&resetY==that.y){if(that.moved){that.moved=false;if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}
if(that.hScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.hScrollbarWrapper.style[vendor+'TransitionDelay']='300ms';that.hScrollbarWrapper.style.opacity='0';}
if(that.vScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.vScrollbarWrapper.style[vendor+'TransitionDelay']='300ms';that.vScrollbarWrapper.style.opacity='0';}
return;}
that.scrollTo(resetX,resetY,time||0);},_wheel:function(e){var that=this,wheelDeltaX,wheelDeltaY,deltaX,deltaY,deltaScale;if('wheelDeltaX'in e){wheelDeltaX=e.wheelDeltaX/12;wheelDeltaY=e.wheelDeltaY/12;}else if('detail'in e){wheelDeltaX=wheelDeltaY=-e.detail*3;}else{wheelDeltaX=wheelDeltaY=-e.wheelDelta;}
if(that.options.wheelAction=='zoom'){deltaScale=that.scale*Math.pow(2,1/3*(wheelDeltaY?wheelDeltaY/Math.abs(wheelDeltaY):0));if(deltaScale<that.options.zoomMin)deltaScale=that.options.zoomMin;if(deltaScale>that.options.zoomMax)deltaScale=that.options.zoomMax;if(deltaScale!=that.scale){if(!that.wheelZoomCount&&that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.wheelZoomCount++;that.zoom(e.pageX,e.pageY,deltaScale,400);setTimeout(function(){that.wheelZoomCount--;if(!that.wheelZoomCount&&that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);},400);}
return;}
deltaX=that.x+wheelDeltaX;deltaY=that.y+wheelDeltaY;if(deltaX>0)deltaX=0;else if(deltaX<that.maxScrollX)deltaX=that.maxScrollX;if(deltaY>that.minScrollY)deltaY=that.minScrollY;else if(deltaY<that.maxScrollY)deltaY=that.maxScrollY;that.scrollTo(deltaX,deltaY,0);},_mouseout:function(e){var t=e.relatedTarget;if(!t){this._end(e);return;}
while(t=t.parentNode)if(t==this.wrapper)return;this._end(e);},_transitionEnd:function(e){var that=this;if(e.target!=that.scroller)return;that._unbind('webkitTransitionEnd');that._startAni();},_startAni:function(){var that=this,startX=that.x,startY=that.y,startTime=Date.now(),step,easeOut,animate;if(that.animating)return;if(!that.steps.length){that._resetPos(400);return;}
step=that.steps.shift();if(step.x==startX&&step.y==startY)step.time=0;that.animating=true;that.moved=true;if(that.options.useTransition){that._transitionTime(step.time);that._pos(step.x,step.y);that.animating=false;if(step.time)that._bind('webkitTransitionEnd');else that._resetPos(0);return;}
animate=function(){var now=Date.now(),newX,newY;if(now>=startTime+step.time){that._pos(step.x,step.y);that.animating=false;if(that.options.onAnimationEnd)that.options.onAnimationEnd.call(that);that._startAni();return;}
now=(now-startTime)/step.time-1;easeOut=m.sqrt(1-now*now);newX=(step.x-startX)*easeOut+startX;newY=(step.y-startY)*easeOut+startY;that._pos(newX,newY);if(that.animating)that.aniTime=nextFrame(animate);};animate();},_transitionTime:function(time){time+='ms';this.scroller.style[vendor+'TransitionDuration']=time;if(this.hScrollbar)this.hScrollbarIndicator.style[vendor+'TransitionDuration']=time;if(this.vScrollbar)this.vScrollbarIndicator.style[vendor+'TransitionDuration']=time;},_momentum:function(dist,time,maxDistUpper,maxDistLower,size){var deceleration=0.0006,speed=m.abs(dist)/time,newDist=(speed*speed)/(2*deceleration),newTime=0,outsideDist=0;if(dist>0&&newDist>maxDistUpper){outsideDist=size/(6/(newDist/speed*deceleration));maxDistUpper=maxDistUpper+outsideDist;speed=speed*maxDistUpper/newDist;newDist=maxDistUpper;}else if(dist<0&&newDist>maxDistLower){outsideDist=size/(6/(newDist/speed*deceleration));maxDistLower=maxDistLower+outsideDist;speed=speed*maxDistLower/newDist;newDist=maxDistLower;}
newDist=newDist*(dist<0?-1:1);newTime=speed/deceleration;return{dist:newDist,time:mround(newTime)};},_offset:function(el){var left=-el.offsetLeft,top=-el.offsetTop;while(el=el.offsetParent){left-=el.offsetLeft;top-=el.offsetTop;}
if(el!=this.wrapper){left*=this.scale;top*=this.scale;}
return{left:left,top:top};},_snap:function(x,y){var that=this,i,l,page,time,sizeX,sizeY;page=that.pagesX.length-1;for(i=0,l=that.pagesX.length;i<l;i++){if(x>=that.pagesX[i]){page=i;break;}}
if(page==that.currPageX&&page>0&&that.dirX<0)page--;x=that.pagesX[page];sizeX=m.abs(x-that.pagesX[that.currPageX]);sizeX=sizeX?m.abs(that.x-x)/sizeX*500:0;that.currPageX=page;page=that.pagesY.length-1;for(i=0;i<page;i++){if(y>=that.pagesY[i]){page=i;break;}}
if(page==that.currPageY&&page>0&&that.dirY<0)page--;y=that.pagesY[page];sizeY=m.abs(y-that.pagesY[that.currPageY]);sizeY=sizeY?m.abs(that.y-y)/sizeY*500:0;that.currPageY=page;time=mround(m.max(sizeX,sizeY))||200;return{x:x,y:y,time:time};},_bind:function(type,el,bubble){(el||this.scroller).addEventListener(type,this,!!bubble);},_unbind:function(type,el,bubble){(el||this.scroller).removeEventListener(type,this,!!bubble);},destroy:function(){var that=this;that.scroller.style[vendor+'Transform']='';that.hScrollbar=false;that.vScrollbar=false;that._scrollbar('h');that._scrollbar('v');that._unbind(RESIZE_EV,window);that._unbind(START_EV);that._unbind(MOVE_EV);that._unbind(END_EV);that._unbind(CANCEL_EV);if(!that.options.hasTouch){that._unbind('mouseout',that.wrapper);that._unbind(WHEEL_EV);}
if(that.options.useTransition)that._unbind('webkitTransitionEnd');if(that.options.checkDOMChanges)clearInterval(that.checkDOMTime);if(that.options.onDestroy)that.options.onDestroy.call(that);},refresh:function(){var that=this,offset,i,l,els,pos=0,page=0;if(that.scale<that.options.zoomMin)that.scale=that.options.zoomMin;that.wrapperW=that.wrapper.clientWidth||1;that.wrapperH=that.wrapper.clientHeight||1;that.minScrollY=-that.options.topOffset||0;that.scrollerW=mround(that.scroller.offsetWidth*that.scale);that.scrollerH=mround((that.scroller.offsetHeight+that.minScrollY)*that.scale);that.maxScrollX=that.wrapperW-that.scrollerW;that.maxScrollY=that.wrapperH-that.scrollerH+that.minScrollY;that.dirX=0;that.dirY=0;if(that.options.onRefresh)that.options.onRefresh.call(that);that.hScroll=that.options.hScroll&&that.maxScrollX<0;that.vScroll=that.options.vScroll&&(!that.options.bounceLock&&!that.hScroll||that.scrollerH>that.wrapperH);that.hScrollbar=that.hScroll&&that.options.hScrollbar;that.vScrollbar=that.vScroll&&that.options.vScrollbar&&that.scrollerH>that.wrapperH;offset=that._offset(that.wrapper);that.wrapperOffsetLeft=-offset.left;that.wrapperOffsetTop=-offset.top;if(typeof that.options.snap=='string'){that.pagesX=[];that.pagesY=[];els=that.scroller.querySelectorAll(that.options.snap);for(i=0,l=els.length;i<l;i++){pos=that._offset(els[i]);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;that.pagesX[i]=pos.left<that.maxScrollX?that.maxScrollX:pos.left*that.scale;that.pagesY[i]=pos.top<that.maxScrollY?that.maxScrollY:pos.top*that.scale;}}else if(that.options.snap){that.pagesX=[];while(pos>=that.maxScrollX){that.pagesX[page]=pos;pos=pos-that.wrapperW;page++;}
if(that.maxScrollX%that.wrapperW)that.pagesX[that.pagesX.length]=that.maxScrollX-that.pagesX[that.pagesX.length-1]+that.pagesX[that.pagesX.length-1];pos=0;page=0;that.pagesY=[];while(pos>=that.maxScrollY){that.pagesY[page]=pos;pos=pos-that.wrapperH;page++;}
if(that.maxScrollY%that.wrapperH)that.pagesY[that.pagesY.length]=that.maxScrollY-that.pagesY[that.pagesY.length-1]+that.pagesY[that.pagesY.length-1];}
that._scrollbar('h');that._scrollbar('v');if(!that.zoomed){that.scroller.style[vendor+'TransitionDuration']='0';that._resetPos(200);}},scrollTo:function(x,y,time,relative){var that=this,step=x,i,l;that.stop();if(!step.length)step=[{x:x,y:y,time:time,relative:relative}];for(i=0,l=step.length;i<l;i++){if(step[i].relative){step[i].x=that.x-step[i].x;step[i].y=that.y-step[i].y;}
that.steps.push({x:step[i].x,y:step[i].y,time:step[i].time||0});}
that._startAni();},scrollToElement:function(el,time){var that=this,pos;el=el.nodeType?el:that.scroller.querySelector(el);if(!el)return;pos=that._offset(el);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;pos.left=pos.left>0?0:pos.left<that.maxScrollX?that.maxScrollX:pos.left;pos.top=pos.top>that.minScrollY?that.minScrollY:pos.top<that.maxScrollY?that.maxScrollY:pos.top;time=time===undefined?m.max(m.abs(pos.left)*2,m.abs(pos.top)*2):time;that.scrollTo(pos.left,pos.top,time);},scrollToPage:function(pageX,pageY,time){var that=this,x,y;time=time===undefined?400:time;if(that.options.onScrollStart)that.options.onScrollStart.call(that);if(that.options.snap){pageX=pageX=='next'?that.currPageX+1:pageX=='prev'?that.currPageX-1:pageX;pageY=pageY=='next'?that.currPageY+1:pageY=='prev'?that.currPageY-1:pageY;pageX=pageX<0?0:pageX>that.pagesX.length-1?that.pagesX.length-1:pageX;pageY=pageY<0?0:pageY>that.pagesY.length-1?that.pagesY.length-1:pageY;that.currPageX=pageX;that.currPageY=pageY;x=that.pagesX[pageX];y=that.pagesY[pageY];}else{x=-that.wrapperW*pageX;y=-that.wrapperH*pageY;if(x<that.maxScrollX)x=that.maxScrollX;if(y<that.maxScrollY)y=that.maxScrollY;}
that.scrollTo(x,y,time);},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(MOVE_EV);this._unbind(END_EV);this._unbind(CANCEL_EV);},enable:function(){this.enabled=true;},stop:function(){if(this.options.useTransition)this._unbind('webkitTransitionEnd');else cancelFrame(this.aniTime);this.steps=[];this.moved=false;this.animating=false;},zoom:function(x,y,scale,time){var that=this,relScale=scale/that.scale;if(!that.options.useTransform)return;that.zoomed=true;time=time===undefined?200:time;x=x-that.wrapperOffsetLeft-that.x;y=y-that.wrapperOffsetTop-that.y;that.x=x-x*relScale+that.x;that.y=y-y*relScale+that.y;that.scale=scale;that.refresh();that.x=that.x>0?0:that.x<that.maxScrollX?that.maxScrollX:that.x;that.y=that.y>that.minScrollY?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;that.scroller.style[vendor+'TransitionDuration']=time+'ms';that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose+' scale('+scale+')';that.zoomed=false;},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating;}};if(true)exports.iScroll=iScroll;else {}})();

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = {"name":"rolldate","version":"1.5.0","description":"rolldate 移动端日期选择插件","main":"dist/rolldate.min.js","scripts":{"build":"cross-env NODE_ENV=production webpack --config config/rolldate.config.js --mode production","build-common":"cross-env NODE_ENV=production webpack --config config/common.config.js --mode production","dev":"cross-env NODE_ENV=development webpack-dev-server --config config/rolldate.config.js --mode development","start":"npm run build-common && npm run build"},"keywords":["date","iscroll-date"],"repository":{"type":"git","url":"https://github.com/weijhfly/rolldate"},"author":"雾空","license":"MIT","dependencies":{},"devDependencies":{"autoprefixer":"^9.0.1","babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-es2015":"^6.24.1","clean-webpack-plugin":"^0.1.19","cross-env":"^5.2.0","css-loader":"^1.0.0","extract-text-webpack-plugin":"^4.0.0-beta.0","html-webpack-plugin":"^3.2.0","less":"^3.8.0","less-loader":"^4.1.0","postcss-loader":"^2.1.6","style-loader":"^0.21.0","webpack":"^4.16.2","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.5"}};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});