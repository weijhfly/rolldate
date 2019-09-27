/**
 * Rolldate 3.1.2
 * Copyright 2018-2019
 * weijhfly https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Rolldate = factory());
}(this, function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "ul{margin:0;padding:0}li{list-style-type:none}.rolldate-container{font-size:20px;color:#333;text-align:center}.rolldate-container header{position:relative;line-height:60px;font-size:18px;border-bottom:1px solid #e0e0e0}.rolldate-container .rolldate-mask{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;background-color:rgba(37,38,45,.4)}.rolldate-container .rolldate-panel{position:fixed;bottom:0;left:0;width:100%;height:273px;z-index:1000;background:#fff;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.rolldate-container .rolldate-btn{position:absolute;left:0;top:0;height:100%;padding:0 15px;color:#666;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}.rolldate-container.wx .rolldate-btn{height:150%}.rolldate-container .rolldate-confirm{left:auto;right:0;color:#007bff}.rolldate-container .rolldate-content{position:relative;top:20px}.rolldate-container .rolldate-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.rolldate-container .rolldate-wrapper>div{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:173px;line-height:36px;overflow:hidden;-webkit-flex-basis:-8e;-ms-flex-preferred-size:-8e;flex-basis:-8e;width:1%}.rolldate-container .rolldate-wrapper ul{margin-top:68px}.rolldate-container .rolldate-wrapper li{height:36px}.rolldate-container .rolldate-dim{position:absolute;left:0;top:0;width:100%;height:68px;background:-o-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));background:-webkit-gradient(linear, left bottom, left top, from(hsla(0, 0%, 100%, 0.4)), to(hsla(0, 0%, 100%, 0.8)));background:-o-linear-gradient(bottom, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.rolldate-container .mask-top{border-bottom:1px solid #ebebeb}.rolldate-container .mask-bottom{top:auto;bottom:1px;border-top:1px solid #ebebeb}.rolldate-container .fadeIn{-webkit-transform:translateZ(0);transform:translateZ(0)}.rolldate-container .fadeOut{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}@media screen and (max-width:414px){.rolldate-container{font-size:18px}}@media screen and (max-width:320px){.rolldate-container{font-size:15px}}";
  styleInject(css);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var bscroll_min = createCommonjsModule(function (module, exports) {
  /*!
   * better-normal-scroll v1.14.1
   * (c) 2016-2019 ustbhuangyi
   * Released under the MIT License.
   */
  !function(t,i){module.exports=i();}(commonjsGlobal,function(){function o(t,i){for(;i+1<t.length;i++)t[i]=t[i+1];t.pop();}var l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t;}finally{try{!s&&h.return&&h.return();}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")};var e="undefined"!=typeof window,t=e&&navigator.userAgent.toLowerCase(),i=t&&/wechatdevtools/.test(t),s=t&&0<t.indexOf("android");function T(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function a(t){for(var i=arguments.length,e=Array(1<i?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r];}return t}function c(t){return null==t}var n=e&&document.createElement("div").style,r=function(){if(!e)return !1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==n[t[i]])return i;return !1}();function h(t){return !1!==r&&("standard"===r?"transitionEnd"===t?"transitionend":t:r+t.charAt(0).toUpperCase()+t.substr(1))}function p(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s});}function u(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s});}function m(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return {left:i,top:e}}r&&"standard"!==r&&r.toLowerCase();var d=h("transform"),f=h("transition"),v=e&&h("perspective")in n,g=e&&("ontouchstart"in window||i),y=!1!==d,w=e&&f in n,S={transform:d,transition:f,transitionTimingFunction:h("transitionTimingFunction"),transitionDuration:h("transitionDuration"),transitionDelay:h("transitionDelay"),transformOrigin:h("transformOrigin"),transitionEnd:h("transitionEnd")},x={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2};function b(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return {top:i.top,left:i.left,width:i.width,height:i.height}}return {top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function X(t,i){for(var e in i)if(i[e].test(t[e]))return !0;return !1}function Y(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"click",e=void 0;"mouseup"===t.type||"mousecancel"===t.type?e=t:"touchend"!==t.type&&"touchcancel"!==t.type||(e=t.changedTouches[0]);var s={};e&&(s.screenX=e.screenX||0,s.screenY=e.screenY||0,s.clientX=e.clientX||0,s.clientY=e.clientY||0);var o=void 0,n=!0,r=!0;if("undefined"!=typeof MouseEvent)try{o=new MouseEvent(i,a({bubbles:n,cancelable:r},s));}catch(t){h();}else h();function h(){(o=document.createEvent("Event")).initEvent(i,n,r),a(o,s);}o.forwardedTouchEvent=!0,o._constructed=!0,t.target.dispatchEvent(o);}var _={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.0015,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:g,disableTouch:!g,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1,stopPropagation:!1,zoom:!1,infinity:!1,dblclick:!1};var M={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function E(t,i,e,s,o,n,r){var h=t-i,a=Math.abs(h)/e,l=r.deceleration,c=r.itemHeight,p=r.swipeBounceTime,u=r.wheel,m=r.swipeTime,d=u?4:15,f=t+a/l*(h<0?-1:1);return u&&c&&(f=Math.round(f/c)*c),f<s?(f=n?Math.max(s-n/4,s-n/d*a):s,m=p):o<f&&(f=n?Math.min(o+n/4,o+n/d*a):o,m=p),{destination:Math.round(f),duration:m}}function D(){}var k,P,L,O,W,H=e?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:D,z=e?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t);}:D;function I(t){console.error("[BScroll warn]: "+t);}function A(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||I("Can not resolve the wrapper DOM."),this.scroller=this.wrapper.children[0],this.scroller||I("The wrapper need at least one child element to be scroller."),this.scrollerStyle=this.scroller.style,this._init(i);}return (k=A).prototype._init=function(t){this._handleOptions(t),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this.setScale(1),this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable();},k.prototype.setScale=function(t){this.lastScale=c(this.scale)?t:this.scale,this.scale=t;},k.prototype._handleOptions=function(t){this.options=a({},_,t),this.translateZ=this.options.HWCompositing&&v?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&w,this.options.useTransform=this.options.useTransform&&y,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap");},k.prototype._addDOMEvents=function(){var t=p;this._handleDOMEvents(t);},k.prototype._removeDOMEvents=function(){var t=u;this._handleDOMEvents(t);},k.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),g&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,S.transitionEnd,this);},k.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel(),this.options.zoom&&this._initZoom(),this.options.infinity&&this._initInfinite();},k.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var o=this,n=!1,t=this.options.useTransition?"isInTransition":"isAnimating";Object.defineProperty(this,t,{get:function(){return n},set:function(t){n=t;for(var i=o.scroller.children.length?o.scroller.children:[o.scroller],e=n&&!o.pulling?"none":"auto",s=0;s<i.length;s++)i[s].style.pointerEvents=e;}});}},k.prototype._handleAutoBlur=function(){this.on("scrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur();});},k.prototype._initDOMObserver=function(){var n=this;if("undefined"!=typeof MutationObserver){var r=void 0,t=new MutationObserver(function(t){if(!n._shouldNotRefresh()){for(var i=!1,e=!1,s=0;s<t.length;s++){var o=t[s];if("attributes"!==o.type){i=!0;break}if(o.target!==n.scroller){e=!0;break}}i?n.refresh():e&&(clearTimeout(r),r=setTimeout(function(){n._shouldNotRefresh()||n.refresh();},60));}});t.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){t.disconnect();});}else this._checkDOMUpdate();},k.prototype._shouldNotRefresh=function(){var t=this.x>this.minScrollX||this.x<this.maxScrollX||this.y>this.minScrollY||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},k.prototype._checkDOMUpdate=function(){var e=b(this.scroller),s=e.width,o=e.height;function n(){var t=this;setTimeout(function(){(function(){if(!this.destroyed){var t=(e=b(this.scroller)).width,i=e.height;s===t&&o===i||this.refresh(),s=t,o=i,n.call(this);}}).call(t);},1e3);}n.call(this);},k.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t),this.options.zoom&&t.touches&&1<t.touches.length&&this._zoomStart(t);break;case"touchmove":case"mousemove":this.options.zoom&&t.touches&&1<t.touches.length?this._zoom(t):this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this.scaled?this._zoomEnd(t):this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(X(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t);}},k.prototype.refresh=function(){var t="static"===window.getComputedStyle(this.wrapper,null).position,i=b(this.wrapper);this.wrapperWidth=i.width,this.wrapperHeight=i.height;var e=b(this.scroller);this.scrollerWidth=Math.round(e.width*this.scale),this.scrollerHeight=Math.round(e.height*this.scale),this.relativeX=e.left,this.relativeY=e.top,t&&(this.relativeX-=i.left,this.relativeY-=i.top),this.minScrollX=0,this.minScrollY=0;var s=this.options.wheel;s?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=s.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.options.infinity||(this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.maxScrollX<0?(this.maxScrollX-=this.relativeX,this.minScrollX=-this.relativeX):1<this.scale&&(this.maxScrollX=this.maxScrollX/2-this.relativeX,this.minScrollX=this.maxScrollX),this.maxScrollY<0?(this.maxScrollY-=this.relativeY,this.minScrollY=-this.relativeY):1<this.scale&&(this.maxScrollY=this.maxScrollY/2-this.relativeY,this.minScrollY=this.maxScrollY)),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<this.minScrollX,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<this.minScrollY,this.hasHorizontalScroll||(this.maxScrollX=this.minScrollX,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=this.minScrollY,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m(this.wrapper),this.trigger("refresh"),!this.scaled&&this.resetPosition();},k.prototype.enable=function(){this.enabled=!0;},k.prototype.disable=function(){this.enabled=!1;},(P=A).prototype._start=function(t){var i=x[t.type];if((1===i||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=T(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart");}},P.prototype._move=function(t){if(this.enabled&&!this.destroyed&&x[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=T();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0;}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0;}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=0<e?-1:e<0?1:0,this.movingDirectionY=0<s?-1:s<0?1:0;var h=this.x+e,a=this.y+s,l=!1,c=!1,p=!1,u=!1,m=this.options.bounce;!1!==m&&(l=void 0===m.top||m.top,c=void 0===m.bottom||m.bottom,p=void 0===m.left||m.left,u=void 0===m.right||m.right),(h>this.minScrollX||h<this.maxScrollX)&&(h=h>this.minScrollX&&p||h<this.maxScrollX&&u?this.x+e/3:h>this.minScrollX?this.minScrollX:this.maxScrollX),(a>this.minScrollY||a<this.maxScrollY)&&(a=a>this.minScrollY&&l||a<this.maxScrollY&&c?this.y+s/3:a>this.minScrollY?this.minScrollY:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,a),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),1<this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y});var d=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,f=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,v=this.pointX-d,g=this.pointY-f;(v>document.documentElement.clientWidth-this.options.momentumLimitDistance||v<this.options.momentumLimitDistance||g<this.options.momentumLimitDistance||g>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t);}}},P.prototype._end=function(t){if(this.enabled&&!this.destroyed&&x[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=0<s?-1:s<0?1:0,this.directionY=0<o?-1:o<0?1:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,M.bounce)){this._translate(i,e),this.endTime=T();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),h=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&r<this.options.flickLimitDistance&&h<this.options.flickLimitDistance)this.trigger("flick");else{var a=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var l=!1,c=!1,p=!1,u=!1,m=this.options.bounce;!1!==m&&(l=void 0===m.top||m.top,c=void 0===m.bottom||m.bottom,p=void 0===m.left||m.left,u=void 0===m.right||m.right);var d=-1===this.directionX&&p||1===this.directionX&&u?this.wrapperWidth:0,f=-1===this.directionY&&l||1===this.directionY&&c?this.wrapperHeight:0,v=this.hasHorizontalScroll?E(this.x,this.startX,n,this.maxScrollX,this.minScrollX,d,this.options):{destination:i,duration:0},g=this.hasVerticalScroll?E(this.y,this.startY,n,this.maxScrollY,this.minScrollY,f,this.options):{destination:e,duration:0};i=v.destination,e=g.destination,a=Math.max(v.duration,g.duration),this.isInTransition=!0;}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,a=this.options.wheel.adjustTime||400);var y=M.swipe;if(this.options.snap){var w=this._nearestSnap(i,e);this.currentPage=w,a=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-w.x),1e3),Math.min(Math.abs(e-w.y),1e3)),300),i=w.x,e=w.y,this.directionX=0,this.directionY=0,y=this.options.snap.easing||M.bounce;}if(i!==this.x||e!==this.y)return (i>this.minScrollX||i<this.maxScrollX||e>this.minScrollY||e<this.maxScrollY)&&(y=M.swipeBounce),void this.scrollTo(i,e,a,y);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y});}}}},P.prototype._checkClick=function(t){var i,e,s,o,n,r=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,this.moved)return !1;if(this.options.wheel){if(this.target&&this.target.classList.contains(this.options.wheel.wheelWrapperClass)){var h=Math.abs(Math.round(this.y/this.itemHeight)),a=Math.round((this.pointY+(o=this.wrapper,n=o.getBoundingClientRect(),{left:-(n.left+window.pageXOffset),top:-(n.top+window.pageYOffset)}).top-this.wrapperHeight/2)/this.itemHeight);this.target=this.items[h+a];}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,M.swipe),!0}if(r)return !1;var l=this.options.dblclick,c=!1;if(l&&this.lastClickTime){var p=l.delay,u=void 0===p?300:p;T()-this.lastClickTime<u&&(c=!0,Y(t,"dblclick"));}return this.options.tap&&(i=t,e=this.options.tap,(s=document.createEvent("Event")).initEvent(e,!0,!0),s.pageX=i.pageX,s.pageY=i.pageY,i.target.dispatchEvent(s)),this.options.click&&!X(t.target,this.options.preventDefaultException)&&Y(t),this.lastClickTime=c?null:T(),!0},P.prototype._resize=function(){var t=this;this.enabled&&(s&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh();},this.options.resizePolling));},P.prototype._startProbe=function(){z(this.probeTimer),this.probeTimer=H(function t(){var i=e.getComputedPosition();e.trigger("scroll",i),e.isInTransition?e.probeTimer=H(t):e.trigger("scrollEnd",i);});var e=this;},P.prototype._transitionTime=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[S.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[S.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t);},P.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[S.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[S.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t);},P.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),(!this.pulling||1===this.movingDirectionY)&&!this.resetPosition(this.options.bounceTime,M.bounce)&&(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})));},P.prototype._translate=function(t,i,e){if(function(t,i){if(!t)throw new Error("[BScroll] "+i)}(!c(t)&&!c(i),"Translate x or y is null or undefined."),c(e)&&(e=this.scale),this.options.useTransform?this.scrollerStyle[S.transform]="translate("+t+"px,"+i+"px) scale("+e+")"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var s=this.options.wheel.rotate,o=void 0===s?25:s,n=0;n<this.items.length;n++){var r=o*(i/this.itemHeight+n);this.items[n].style[S.transform]="rotateX("+r+"deg)";}if(this.x=t,this.y=i,this.setScale(e),this.indicators)for(var h=0;h<this.indicators.length;h++)this.indicators[h].updatePosition();},P.prototype._animate=function(r,h,a,l){var c=this,p=this.x,u=this.y,m=this.lastScale,d=this.scale,f=T(),v=f+a;this.isAnimating=!0,z(this.animateTimer),function t(){var i=T();if(v<=i)return c.isAnimating=!1,c._translate(r,h,d),c.trigger("scroll",{x:c.x,y:c.y}),void(c.pulling||c.resetPosition(c.options.bounceTime)||c.trigger("scrollEnd",{x:c.x,y:c.y}));var e=l(i=(i-f)/a),s=(r-p)*e+p,o=(h-u)*e+u,n=(d-m)*e+m;c._translate(s,o,n),c.isAnimating&&(c.animateTimer=H(t)),3===c.options.probeType&&c.trigger("scroll",{x:c.x,y:c.y});}();},P.prototype.scrollBy=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:M.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s);},P.prototype.scrollTo=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:M.bounce;(this.x!==t||this.y!==i)&&(this.isInTransition=this.options.useTransition&&0<e&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),e||(this.trigger("scroll",{x:t,y:i}),this._reflow=document.body.offsetHeight,this.resetPosition(this.options.bounceTime,M.bounce)||this.trigger("scrollEnd",{x:t,y:i})),this.options.wheel&&(i>this.minScrollY?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn));},P.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.classList.contains(this.options.wheel.wheelItemClass))){var n=m(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>this.minScrollX?this.minScrollX:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>this.minScrollY?this.minScrollY:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o);}},P.prototype.resetPosition=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:M.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>this.minScrollX?e=this.minScrollX:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return !this.hasVerticalScroll||n>this.minScrollY?o=this.minScrollY:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},P.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return e=this.options.useTransform?(i=+((t=t[S.transform].split(")")[0].split(", "))[12]||t[4]),+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},P.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1,z(this.probeTimer);var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0;}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,z(this.animateTimer),this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0);},P.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this.options.useTransition?z(this.probeTimer):z(this.animateTimer),this._removeDOMEvents(),this._events={};},(L=A).prototype.on=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e]);},L.prototype.once=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments);}s.fn=i,this.on(t,s);},L.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&o(e,s);},L.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,s=[].concat(function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}(i)),o=0;o<e;o++){var n=s[o],r=l(n,2),h=r[0],a=r[1];h&&h.apply(a,[].slice.call(arguments,1));}},(O=A).prototype.wheelTo=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(this.options.wheel){var i=-t*this.itemHeight;this.scrollTo(0,i);}},O.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},O.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,I("wheel option selectedIndex is required!"));},(W=A).prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(p),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),clearTimeout(t.mouseWheelEndTimer),t._handleMouseWheelEvent(u);}),this.firstWheelOpreation=!0;},W.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this);},W.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1;var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,n=e.invert,r=void 0!==n&&n,h=e.easeTime,a=void 0===h?300:h;clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||a||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0;},400);var l=void 0,c=void 0;switch(!0){case"deltaX"in t:c=1===t.deltaMode?(l=-t.deltaX*o,-t.deltaY*o):(l=-t.deltaX,-t.deltaY);break;case"wheelDeltaX"in t:l=t.wheelDeltaX/120*o,c=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:l=c=t.wheelDelta/120*o;break;case"detail"in t:l=c=-t.detail/3*o;break;default:return}var p=r?-1:1;l*=p,c*=p,this.hasVerticalScroll||(l=c,c=0);var u=void 0,m=void 0;if(this.options.snap)return u=this.currentPage.pageX,m=this.currentPage.pageY,0<l?u--:l<0&&u++,0<c?m--:c<0&&m++,void this._goToPage(u,m);u=this.x+Math.round(this.hasHorizontalScroll?l:0),m=this.y+Math.round(this.hasVerticalScroll?c:0),this.movingDirectionX=this.directionX=0<l?-1:l<0?1:0,this.movingDirectionY=this.directionY=0<c?-1:c<0?1:0,u>this.minScrollX?u=this.minScrollX:u<this.maxScrollX&&(u=this.maxScrollX),m>this.minScrollY?m=this.minScrollY:m<this.maxScrollY&&(m=this.maxScrollY);var d=this.y===m;this.scrollTo(u,m,a,M.swipe),this.trigger("scroll",{x:this.x,y:this.y}),clearTimeout(this.mouseWheelEndTimer),d&&(this.mouseWheelEndTimer=setTimeout(function(){i.trigger("scrollEnd",{x:i.x,y:i.y});},a));}},A.Version="1.14.1",A});
  });

  var version = "3.1.2";

  function Rolldate() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _this = this,
          el = void 0;

      _this.extend(config);
      if (config.el) {
          el = _this.$(config.el);

          if (!el || el.bindRolldate) {
              return;
          }
          el.bindRolldate = 1;

          _this.tap(el, function () {
              _this.show();
          });
      }
      // 设置默认日期
      if (config.value) {
          if (config.el) {
              if (el.nodeName.toLowerCase() == 'input') {
                  el.value = config.value;
              } else {
                  el.innerText = config.value;
              }
          }
          var str = config.value.replace(/-/g, '/').replace(/[^\d/:\s]/g, ''),
              date = new Date(str);

          if (!date || date == 'Invalid Date') {
              console.error('Invalid Date：' + str);
          } else {
              if (config.el) {
                  el.bindDate = date;
              } else {
                  _this.bindDate = date;
              }
          }
      }
  }
  Rolldate.prototype = {
      constructor: Rolldate,
      baseData: function baseData() {
          return {
              domId: {
                  YYYY: 'rolldate-year',
                  MM: 'rolldate-month',
                  DD: 'rolldate-day',
                  hh: 'rolldate-hour',
                  mm: 'rolldate-min',
                  ss: 'rolldate-sec'
              },
              opts: { //插件默认配置
                  el: '',
                  format: 'YYYY-MM-DD',
                  beginYear: 2000,
                  endYear: 2100,
                  init: null,
                  moveEnd: null,
                  confirm: null,
                  cancel: null,
                  minStep: 1,
                  trigger: 'tap',
                  lang: { title: '选择日期', cancel: '取消', confirm: '确认', year: '年', month: '月', day: '日', hour: '时', min: '分', sec: '秒' }
              }
          };
      },
      extend: function extend(config) {
          var _this = this,
              opts = _this.baseData().opts;

          for (var key in opts) {
              if (opts[key] && Object.prototype.toString.call(opts[key]) == '[object Object]') {
                  for (var key2 in config[key]) {
                      opts[key][key2] = config[key][key2] == undefined ? opts[key][key2] : config[key][key2];
                  }
              } else {
                  opts[key] = config[key] || opts[key];
              }
          }
          _this.config = opts;
      },
      createUI: function createUI() {
          var _this = this,
              data = _this.baseData(),
              config = _this.config,
              domId = data.domId,
              FormatArr = config.format.split(/-|\/|\s|:/g),
              len = FormatArr.length,
              ul = '',
              date = config.el ? _this.$(config.el).bindDate || new Date() : _this.bindDate || new Date(),
              itemClass = '',
              lang = config.lang;

          for (var i = 0; i < len; i++) {
              var f = FormatArr[i],
                  domMndex = 0;

              ul += '<div id="' + domId[f] + '"><ul class="wheel-scroll">';

              if (f == 'YYYY') {
                  for (var j = config.beginYear; j <= config.endYear; j++) {
                      itemClass = j == date.getFullYear() ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + j + lang.year + '</li>';
                      domMndex++;
                  }
              } else if (f == 'MM') {
                  for (var k = 1; k <= 12; k++) {
                      itemClass = k == date.getMonth() + 1 ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (k < 10 ? '0' + k : k) + lang.month + '</li>';
                      domMndex++;
                  }
              } else if (f == 'DD') {
                  var day = _this.bissextile(date.getFullYear(), date.getMonth() + 1);
                  for (var l = 1; l <= day; l++) {
                      itemClass = l == date.getDate() ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (l < 10 ? '0' + l : l) + lang.day + '</li>';
                      domMndex++;
                  }
              } else if (f == 'hh') {
                  for (var m = 0; m <= 23; m++) {
                      itemClass = m == date.getHours() ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (m < 10 ? '0' + m : m) + lang.hour + '</li>';
                      domMndex++;
                  }
              } else if (f == 'mm') {
                  for (var n = 0; n <= 59; n += config.minStep) {
                      itemClass = n == date.getMinutes() ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (n < 10 ? '0' + n : n) + lang.min + '</li>';
                      domMndex++;
                  }
              } else if (f == 'ss') {
                  for (var o = 0; o <= 59; o++) {
                      itemClass = o == date.getSeconds() ? 'active' : '';

                      ul += '<li class="wheel-item ' + itemClass + '" data-index="' + domMndex + '">' + (o < 10 ? '0' + o : o) + lang.sec + '</li>';
                      domMndex++;
                  }
              }
              ul += '</ul></div>';
          }
          var $html = '<div class="rolldate-mask"></div>\n            <div class="rolldate-panel">\n                <header>\n                    <span class="rolldate-btn rolldate-cancel">' + lang.cancel + '</span>\n                    ' + lang.title + '\n                    <span class="rolldate-btn rolldate-confirm">' + lang.confirm + '</span>\n                </header>\n                <section class="rolldate-content">\n                    <div class="rolldate-dim mask-top"></div>\n                    <div class="rolldate-dim mask-bottom"></div>\n                    <div class="rolldate-wrapper">\n                        ' + ul + '\n                    </div>\n                </section>\n            </div>',
              box = document.createElement("div");

          // 在微信中输入框在底部时，偶现按钮点击范围被挤压，暂定增加按钮高度
          box.className = 'rolldate-container' + (!!navigator.userAgent.match(/MicroMessenger/i) ? ' wx' : '');
          box.innerHTML = $html;
          document.body.appendChild(box);

          _this.scroll = {};

          var _loop = function _loop(_i) {
              var $id = domId[FormatArr[_i]];

              _this.scroll[FormatArr[_i]] = new bscroll_min('#' + $id, {
                  wheel: {
                      selectedIndex: 0
                  }
              });

              var that = _this.scroll[FormatArr[_i]],
                  active = _this.$('#' + $id + ' .active'),
                  index = active ? active.getAttribute('data-index') : Math.round(date.getMinutes() / config.minStep);

              that.wheelTo(index);
              // 滚动结束
              that.on('scrollEnd', function () {
                  if (config.moveEnd) {
                      config.moveEnd.call(_this, that);
                  }
                  if ([domId['YYYY'], domId['MM']].indexOf(that.wrapper.id) != -1 && _this.scroll['YYYY'] && _this.scroll['MM'] && _this.scroll['DD']) {
                      var prevDay = _this.getSelected(_this.scroll['DD']),
                          _day = _this.bissextile(_this.getSelected(_this.scroll['YYYY']), _this.getSelected(_this.scroll['MM'])),
                          li = '';

                      if (_day != _this.$('#' + domId['DD'] + ' li', 1).length) {

                          for (var _l = 1; _l <= _day; _l++) {
                              li += '<li class="wheel-item">' + (_l < 10 ? '0' + _l : _l) + lang.day + '</li>';
                          }
                          _this.$('#' + domId['DD'] + ' ul').innerHTML = li;
                          _this.scroll['DD'].refresh();
                      }
                  }
              });
          };

          for (var _i = 0; _i < len; _i++) {
              _loop(_i);
          }
          _this.$('.rolldate-panel').className = 'rolldate-panel fadeIn';
      },
      $: function $(selector, flag) {
          if (typeof selector != 'string' && selector.nodeType) {
              return selector;
          }

          return flag ? document.querySelectorAll(selector) : document.querySelector(selector);
      },
      tap: function tap(el, fn) {
          var _this = this,
              hasTouch = "ontouchstart" in window;

          if (hasTouch && _this.config.trigger == 'tap') {
              var o = {};
              el.addEventListener('touchstart', function (e) {
                  var t = e.touches[0];

                  o.startX = t.pageX;
                  o.startY = t.pageY;
                  o.sTime = +new Date();
              });
              el.addEventListener('touchend', function (e) {
                  var t = e.changedTouches[0];

                  o.endX = t.pageX;
                  o.endY = t.pageY;
                  if (+new Date() - o.sTime < 300) {
                      if (Math.abs(o.endX - o.startX) + Math.abs(o.endY - o.startY) < 20) {
                          e.preventDefault();
                          fn.call(this, e);
                      }
                  }
                  o = {};
              });
          } else {
              el.addEventListener('click', function (e) {
                  fn.call(this, e);
              });
          }
      },
      show: function show() {
          var _this = this,
              config = _this.config,
              el = void 0;

          if (config.el) {
              el = _this.$(config.el);

              if (!el.bindRolldate) {
                  return;
              }
              if (el.nodeName.toLowerCase() == 'input') {
                  el.blur();
              }
          }
          if (_this.$('.rolldate-container')) {
              return;
          }
          if (config.init && config.init.call(_this) === false) {
              return;
          }

          _this.createUI();
          _this.event();
      },
      hide: function hide(flag) {
          var _this = this,
              el = _this.$('.rolldate-panel.fadeIn');

          if (el) {
              el.className = 'rolldate-panel fadeOut';
              _this.destroy(flag);
          }
      },
      event: function event() {
          var _this = this,
              mask = _this.$('.rolldate-mask'),
              cancel = _this.$('.rolldate-cancel'),
              confirm = _this.$('.rolldate-confirm');

          _this.tap(mask, function () {
              _this.hide(1);
          });
          _this.tap(cancel, function () {
              _this.hide(1);
          });
          _this.tap(confirm, function () {
              var config = _this.config,
                  el = void 0,
                  date = config.format,
                  newDate = new Date();

              for (var f in _this.scroll) {
                  var d = _this.getSelected(_this.scroll[f]);

                  date = date.replace(f, d);
                  if (f == 'YYYY') {
                      newDate.setFullYear(d);
                  } else if (f == 'MM') {
                      newDate.setMonth(d - 1);
                  } else if (f == 'DD') {
                      newDate.setDate(d);
                  } else if (f == 'hh') {
                      newDate.setHours(d);
                  } else if (f == 'mm') {
                      newDate.setMinutes(d);
                  } else if (f == 'ss') {
                      newDate.setSeconds(d);
                  }
              }
              if (config.confirm) {
                  var flag = config.confirm.call(_this, date);
                  if (flag === false) {
                      return false;
                  } else if (flag) {
                      date = flag;
                  }
              }
              if (config.el) {
                  el = _this.$(config.el);
                  if (el.nodeName.toLowerCase() == 'input') {
                      el.value = date;
                  } else {
                      el.innerText = date;
                  }
                  el.bindDate = newDate;
              } else {
                  _this.bindDate = newDate;
              }
              _this.hide();
          });
      },
      bissextile: function bissextile(year, month) {
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
      },
      destroy: function destroy(flag) {
          var _this = this,
              config = _this.config;

          for (var i in _this.scroll) {
              _this.scroll[i].destroy();
          }

          if (flag && config.cancel) {
              config.cancel.call(_this);
          }
          setTimeout(function () {
              var el = _this.$('.rolldate-container');
              document.body.removeChild(el);
          }, 300);
      },
      getSelected: function getSelected(scroll) {

          return this.$('#' + scroll.wrapper.id + ' li', 1)[scroll.getSelectedIndex()].innerText.replace(/\D/g, '');
      }
  };
  Rolldate.version = version;

  return Rolldate;

}));
