/**
 * Rolldate 3.1.3
 * Copyright 2018-2023
 * weijhfly https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */

'use strict';

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

var css_248z = ".rolldate-container{font-size:20px;color:#333;text-align:center}.rolldate-container ul{margin:0;padding:0}.rolldate-container li{list-style-type:none}.rolldate-container header{position:relative;line-height:60px;font-size:18px;border-bottom:1px solid #e0e0e0}.rolldate-container .rolldate-mask{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;background-color:rgba(37,38,45,.4)}.rolldate-container .rolldate-panel{position:fixed;bottom:0;left:0;width:100%;height:273px;z-index:1000;background:#fff;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}.rolldate-container .rolldate-btn{position:absolute;left:0;top:0;height:100%;padding:0 15px;color:#666;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}.rolldate-container .rolldate-confirm{left:auto;right:0;color:#007bff}.rolldate-container .rolldate-content{position:relative;top:20px}.rolldate-container .rolldate-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.rolldate-container .rolldate-wrapper>div{-webkit-box-flex:1;-ms-flex:1;flex:1;height:173px;line-height:36px;overflow:hidden;-ms-flex-preferred-size:-8e;flex-basis:-8e;width:1%}.rolldate-container .rolldate-wrapper ul{margin-top:68px}.rolldate-container .rolldate-wrapper li{height:36px}.rolldate-container .rolldate-dim{position:absolute;left:0;top:0;width:100%;height:68px;background:-o-linear-gradient(bottom,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));background:-webkit-gradient(linear, left bottom, left top, from(hsla(0, 0%, 100%, 0.4)), to(hsla(0, 0%, 100%, 0.8)));background:-o-linear-gradient(bottom, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));background:linear-gradient(0deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.rolldate-container .mask-top{border-bottom:1px solid #ebebeb}.rolldate-container .mask-bottom{top:auto;bottom:1px;border-top:1px solid #ebebeb}.rolldate-container .fadeIn{-webkit-transform:translateZ(0);transform:translateZ(0)}.rolldate-container .fadeOut{-webkit-transform:translate3d(0,273px,0);transform:translate3d(0,273px,0)}@media screen and (max-width:414px){.rolldate-container{font-size:18px}}@media screen and (max-width:320px){.rolldate-container{font-size:15px}}";
styleInject(css_248z);

/*!
 * better-scroll / core
 * (c) 2016-2023 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var propertiesConfig = [
    {
        sourceKey: 'scroller.scrollBehaviorX.currentPos',
        key: 'x'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.currentPos',
        key: 'y'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
        key: 'hasHorizontalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
        key: 'hasVerticalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.contentSize',
        key: 'scrollerWidth'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.contentSize',
        key: 'scrollerHeight'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
        key: 'maxScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
        key: 'maxScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
        key: 'minScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
        key: 'minScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
        key: 'movingDirectionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
        key: 'movingDirectionY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.direction',
        key: 'directionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.direction',
        key: 'directionY'
    },
    {
        sourceKey: 'scroller.actions.enabled',
        key: 'enabled'
    },
    {
        sourceKey: 'scroller.animater.pending',
        key: 'pending'
    },
    {
        sourceKey: 'scroller.animater.stop',
        key: 'stop'
    },
    {
        sourceKey: 'scroller.scrollTo',
        key: 'scrollTo'
    },
    {
        sourceKey: 'scroller.scrollBy',
        key: 'scrollBy'
    },
    {
        sourceKey: 'scroller.scrollToElement',
        key: 'scrollToElement'
    },
    {
        sourceKey: 'scroller.resetPosition',
        key: 'resetPosition'
    }
];

function warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = !!(ua && /wechatdevtools/.test(ua));
var isAndroid = ua && ua.indexOf('android') > 0;
/* istanbul ignore next */
var isIOSBadVersion = (function () {
    if (typeof ua === 'string') {
        var regex = /os (\d\d?_\d(_\d)?)/;
        var matches = regex.exec(ua);
        if (!matches)
            return false;
        var parts = matches[1].split('_').map(function (item) {
            return parseInt(item, 10);
        });
        // ios version >= 13.4 issue 982
        return !!(parts[0] === 13 && parts[1] >= 4);
    }
    return false;
})();
/* istanbul ignore next */
var supportsPassive = false;
/* istanbul ignore next */
if (inBrowser) {
    var EventName = 'test-passive';
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                supportsPassive = true;
            },
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener(EventName, function () { }, opts);
    }
    catch (e) { }
}

function getNow() {
    return window.performance &&
        window.performance.now &&
        window.performance.timing
        ? window.performance.now() + window.performance.timing.navigationStart
        : +new Date();
}
var extend = function (target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};
function isUndef(v) {
    return v === undefined || v === null;
}
function between(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return false;
    }
    var transformNames = [
        {
            key: 'standard',
            value: 'transform',
        },
        {
            key: 'webkit',
            value: 'webkitTransform',
        },
        {
            key: 'Moz',
            value: 'MozTransform',
        },
        {
            key: 'O',
            value: 'OTransform',
        },
        {
            key: 'ms',
            value: 'msTransform',
        },
    ];
    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
        var obj = transformNames_1[_i];
        if (elementStyle[obj.value] !== undefined) {
            return obj.key;
        }
    }
    /* istanbul ignore next  */
    return false;
})();
/* istanbul ignore next  */
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function getElement(el) {
    return (typeof el === 'string' ? document.querySelector(el) : el);
}
function addEvent(el, type, fn, capture) {
    var useCapture = supportsPassive
        ? {
            passive: false,
            capture: !!capture,
        }
        : !!capture;
    el.addEventListener(type, fn, useCapture);
}
function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture,
    });
}
function maybePrevent(e) {
    if (e.cancelable) {
        e.preventDefault();
    }
}
function offset(el) {
    var left = 0;
    var top = 0;
    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top,
    };
}
vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransition = inBrowser && transition in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd'),
    transitionProperty: prefixStyle('transitionProperty'),
};
var eventTypeMap = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    touchcancel: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2,
};
function getRect(el) {
    /* istanbul ignore if  */
    if (el instanceof window.SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        };
    }
    else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight,
        };
    }
}
function preventDefaultExceptionFn(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}
var tagExceptionFn = preventDefaultExceptionFn;
function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
}
function click(e, event) {
    if (event === void 0) { event = 'click'; }
    var eventSource;
    if (e.type === 'mouseup') {
        eventSource = e;
    }
    else if (e.type === 'touchend' || e.type === 'touchcancel') {
        eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
        posSrc.screenX = eventSource.screenX || 0;
        posSrc.screenY = eventSource.screenY || 0;
        posSrc.clientX = eventSource.clientX || 0;
        posSrc.clientY = eventSource.clientY || 0;
    }
    var ev;
    var bubbles = true;
    var cancelable = true;
    var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey;
    var pressedKeysMap = {
        ctrlKey: ctrlKey,
        shiftKey: shiftKey,
        altKey: altKey,
        metaKey: metaKey,
    };
    if (typeof MouseEvent !== 'undefined') {
        try {
            ev = new MouseEvent(event, extend(__assign({ bubbles: bubbles,
                cancelable: cancelable }, pressedKeysMap), posSrc));
        }
        catch (e) {
            /* istanbul ignore next */
            createEvent();
        }
    }
    else {
        createEvent();
    }
    function createEvent() {
        ev = document.createEvent('Event');
        ev.initEvent(event, bubbles, cancelable);
        extend(ev, posSrc);
    }
    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
}
function dblclick(e) {
    click(e, 'dblclick');
}

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 1000 / 60;
var windowCompat = inBrowser && window;
/* istanbul ignore next */
function noop$1() { }
var requestAnimationFrame = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return noop$1;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, callback.interval || DEFAULT_INTERVAL); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return noop$1;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

/* istanbul ignore next */
var noop = function (val) { };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop,
};
var getProperty = function (obj, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
        if (typeof obj !== 'object' || !obj)
            return;
    }
    var lastKey = keys.pop();
    if (typeof obj[lastKey] === 'function') {
        return function () {
            return obj[lastKey].apply(obj, arguments);
        };
    }
    else {
        return obj[lastKey];
    }
};
var setProperty = function (obj, key, value) {
    var keys = key.split('.');
    var temp;
    for (var i = 0; i < keys.length - 1; i++) {
        temp = keys[i];
        if (!obj[temp])
            obj[temp] = {};
        obj = obj[temp];
    }
    obj[keys.pop()] = value;
};
function propertiesProxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return getProperty(this, sourceKey);
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        setProperty(this, sourceKey, val);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

var EventEmitter = /** @class */ (function () {
    function EventEmitter(names) {
        this.events = {};
        this.eventTypes = {};
        this.registerType(names);
    }
    EventEmitter.prototype.on = function (type, fn, context) {
        if (context === void 0) { context = this; }
        this.hasType(type);
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push([fn, context]);
        return this;
    };
    EventEmitter.prototype.once = function (type, fn, context) {
        var _this = this;
        if (context === void 0) { context = this; }
        this.hasType(type);
        var magic = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(type, magic);
            var ret = fn.apply(context, args);
            if (ret === true) {
                return ret;
            }
        };
        magic.fn = fn;
        this.on(type, magic);
        return this;
    };
    EventEmitter.prototype.off = function (type, fn) {
        if (!type && !fn) {
            this.events = {};
            return this;
        }
        if (type) {
            this.hasType(type);
            if (!fn) {
                this.events[type] = [];
                return this;
            }
            var events = this.events[type];
            if (!events) {
                return this;
            }
            var count = events.length;
            while (count--) {
                if (events[count][0] === fn ||
                    (events[count][0] && events[count][0].fn === fn)) {
                    events.splice(count, 1);
                }
            }
            return this;
        }
    };
    EventEmitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.hasType(type);
        var events = this.events[type];
        if (!events) {
            return;
        }
        var len = events.length;
        var eventsCopy = __spreadArrays(events);
        var ret;
        for (var i = 0; i < len; i++) {
            var event_1 = eventsCopy[i];
            var fn = event_1[0], context = event_1[1];
            if (fn) {
                ret = fn.apply(context, args);
                if (ret === true) {
                    return ret;
                }
            }
        }
    };
    EventEmitter.prototype.registerType = function (names) {
        var _this = this;
        names.forEach(function (type) {
            _this.eventTypes[type] = type;
        });
    };
    EventEmitter.prototype.destroy = function () {
        this.events = {};
        this.eventTypes = {};
    };
    EventEmitter.prototype.hasType = function (type) {
        var types = this.eventTypes;
        var isType = types[type] === type;
        if (!isType) {
            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" +
                ("" + Object.keys(types).map(function (_) { return JSON.stringify(_); })) +
                "]");
        }
    };
    return EventEmitter;
}());
var EventRegister = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var CustomOptions = /** @class */ (function () {
    function CustomOptions() {
    }
    return CustomOptions;
}());
var OptionsConstructor = /** @class */ (function (_super) {
    __extends(OptionsConstructor, _super);
    function OptionsConstructor() {
        var _this = _super.call(this) || this;
        _this.startX = 0;
        _this.startY = 0;
        _this.scrollX = false;
        _this.scrollY = true;
        _this.freeScroll = false;
        _this.directionLockThreshold = 0;
        _this.eventPassthrough = "" /* None */;
        _this.click = false;
        _this.dblclick = false;
        _this.tap = '';
        _this.bounce = {
            top: true,
            bottom: true,
            left: true,
            right: true,
        };
        _this.bounceTime = 800;
        _this.momentum = true;
        _this.momentumLimitTime = 300;
        _this.momentumLimitDistance = 15;
        _this.swipeTime = 2500;
        _this.swipeBounceTime = 500;
        _this.deceleration = 0.0015;
        _this.flickLimitTime = 200;
        _this.flickLimitDistance = 100;
        _this.resizePolling = 60;
        _this.probeType = 0 /* Default */;
        _this.stopPropagation = false;
        _this.preventDefault = true;
        _this.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
        };
        _this.tagException = {
            tagName: /^TEXTAREA$/,
        };
        _this.HWCompositing = true;
        _this.useTransition = true;
        _this.bindToWrapper = false;
        _this.bindToTarget = false;
        _this.disableMouse = hasTouch;
        _this.disableTouch = !hasTouch;
        _this.autoBlur = true;
        _this.autoEndDistance = 5;
        _this.outOfBoundaryDampingFactor = 1 / 3;
        _this.specifiedIndexAsContent = 0;
        _this.quadrant = 1 /* First */;
        return _this;
    }
    OptionsConstructor.prototype.merge = function (options) {
        if (!options)
            return this;
        for (var key in options) {
            if (key === 'bounce') {
                this.bounce = this.resolveBounce(options[key]);
                continue;
            }
            this[key] = options[key];
        }
        return this;
    };
    OptionsConstructor.prototype.process = function () {
        this.translateZ =
            this.HWCompositing && hasPerspective ? ' translateZ(1px)' : '';
        this.useTransition = this.useTransition && hasTransition;
        this.preventDefault = !this.eventPassthrough && this.preventDefault;
        // If you want eventPassthrough I have to lock one of the axes
        this.scrollX =
            this.eventPassthrough === "horizontal" /* Horizontal */
                ? false
                : this.scrollX;
        this.scrollY =
            this.eventPassthrough === "vertical" /* Vertical */ ? false : this.scrollY;
        // With eventPassthrough we also need lockDirection mechanism
        this.freeScroll = this.freeScroll && !this.eventPassthrough;
        // force true when freeScroll is true
        this.scrollX = this.freeScroll ? true : this.scrollX;
        this.scrollY = this.freeScroll ? true : this.scrollY;
        this.directionLockThreshold = this.eventPassthrough
            ? 0
            : this.directionLockThreshold;
        return this;
    };
    OptionsConstructor.prototype.resolveBounce = function (bounceOptions) {
        var DEFAULT_BOUNCE = {
            top: true,
            right: true,
            bottom: true,
            left: true,
        };
        var NEGATED_BOUNCE = {
            top: false,
            right: false,
            bottom: false,
            left: false,
        };
        var ret;
        if (typeof bounceOptions === 'object') {
            ret = extend(DEFAULT_BOUNCE, bounceOptions);
        }
        else {
            ret = bounceOptions ? DEFAULT_BOUNCE : NEGATED_BOUNCE;
        }
        return ret;
    };
    return OptionsConstructor;
}(CustomOptions));

var ActionsHandler = /** @class */ (function () {
    function ActionsHandler(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeStart',
            'start',
            'move',
            'end',
            'click',
        ]);
        this.handleDOMEvents();
    }
    ActionsHandler.prototype.handleDOMEvents = function () {
        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
        var wrapper = this.wrapper;
        var target = bindToWrapper ? wrapper : window;
        var wrapperEvents = [];
        var targetEvents = [];
        var shouldRegisterTouch = !disableTouch;
        var shouldRegisterMouse = !disableMouse;
        if (click) {
            wrapperEvents.push({
                name: 'click',
                handler: this.click.bind(this),
                capture: true,
            });
        }
        if (shouldRegisterTouch) {
            wrapperEvents.push({
                name: 'touchstart',
                handler: this.start.bind(this),
            });
            targetEvents.push({
                name: 'touchmove',
                handler: this.move.bind(this),
            }, {
                name: 'touchend',
                handler: this.end.bind(this),
            }, {
                name: 'touchcancel',
                handler: this.end.bind(this),
            });
        }
        if (shouldRegisterMouse) {
            wrapperEvents.push({
                name: 'mousedown',
                handler: this.start.bind(this),
            });
            targetEvents.push({
                name: 'mousemove',
                handler: this.move.bind(this),
            }, {
                name: 'mouseup',
                handler: this.end.bind(this),
            });
        }
        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
        this.targetEventRegister = new EventRegister(target, targetEvents);
    };
    ActionsHandler.prototype.beforeHandler = function (e, type) {
        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        var preventDefaultConditions = {
            start: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            end: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            move: function () {
                return preventDefault;
            },
        };
        if (preventDefaultConditions[type]()) {
            e.preventDefault();
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    ActionsHandler.prototype.setInitiated = function (type) {
        if (type === void 0) { type = 0; }
        this.initiated = type;
    };
    ActionsHandler.prototype.start = function (e) {
        var _eventType = eventTypeMap[e.type];
        if (this.initiated && this.initiated !== _eventType) {
            return;
        }
        this.setInitiated(_eventType);
        // if textarea or other html tags in options.tagException is manipulated
        // do not make bs scroll
        if (tagExceptionFn(e.target, this.options.tagException)) {
            this.setInitiated();
            return;
        }
        // only allow mouse left button
        if (_eventType === 2 /* Mouse */ && e.button !== 0 /* Left */)
            return;
        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
            return;
        }
        this.beforeHandler(e, 'start');
        var point = (e.touches ? e.touches[0] : e);
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ActionsHandler.prototype.move = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.beforeHandler(e, 'move');
        var point = (e.touches ? e.touches[0] : e);
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        if (this.hooks.trigger(this.hooks.eventTypes.move, {
            deltaX: deltaX,
            deltaY: deltaY,
            e: e,
        })) {
            return;
        }
        // auto end when out of viewport
        var scrollLeft = document.documentElement.scrollLeft ||
            window.pageXOffset ||
            document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        var pX = this.pointX - scrollLeft;
        var pY = this.pointY - scrollTop;
        var autoEndDistance = this.options.autoEndDistance;
        if (pX > document.documentElement.clientWidth - autoEndDistance ||
            pY > document.documentElement.clientHeight - autoEndDistance ||
            pX < autoEndDistance ||
            pY < autoEndDistance) {
            this.end(e);
        }
    };
    ActionsHandler.prototype.end = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.setInitiated();
        this.beforeHandler(e, 'end');
        this.hooks.trigger(this.hooks.eventTypes.end, e);
    };
    ActionsHandler.prototype.click = function (e) {
        this.hooks.trigger(this.hooks.eventTypes.click, e);
    };
    ActionsHandler.prototype.setContent = function (content) {
        if (content !== this.wrapper) {
            this.wrapper = content;
            this.rebindDOMEvents();
        }
    };
    ActionsHandler.prototype.rebindDOMEvents = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.handleDOMEvents();
    };
    ActionsHandler.prototype.destroy = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.hooks.destroy();
    };
    return ActionsHandler;
}());

var translaterMetaData = {
    x: ['translateX', 'px'],
    y: ['translateY', 'px'],
};
var Translater = /** @class */ (function () {
    function Translater(content) {
        this.setContent(content);
        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
    }
    Translater.prototype.getComputedPosition = function () {
        var cssStyle = window.getComputedStyle(this.content, null);
        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]) || 0;
        var y = +(matrix[13] || matrix[5]) || 0;
        return {
            x: x,
            y: y,
        };
    };
    Translater.prototype.translate = function (point) {
        var transformStyle = [];
        Object.keys(point).forEach(function (key) {
            if (!translaterMetaData[key]) {
                return;
            }
            var transformFnName = translaterMetaData[key][0];
            if (transformFnName) {
                var transformFnArgUnit = translaterMetaData[key][1];
                var transformFnArg = point[key];
                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
            }
        });
        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
        this.style[style.transform] = transformStyle.join(' ');
        this.hooks.trigger(this.hooks.eventTypes.translate, point);
    };
    Translater.prototype.setContent = function (content) {
        if (this.content !== content) {
            this.content = content;
            this.style = content.style;
        }
    };
    Translater.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Translater;
}());

var Base = /** @class */ (function () {
    function Base(content, translater, options) {
        this.translater = translater;
        this.options = options;
        this.timer = 0;
        this.hooks = new EventEmitter([
            'move',
            'end',
            'beforeForceStop',
            'forceStop',
            'callStop',
            'time',
            'timeFunction',
        ]);
        this.setContent(content);
    }
    Base.prototype.translate = function (endPoint) {
        this.translater.translate(endPoint);
    };
    Base.prototype.setPending = function (pending) {
        this.pending = pending;
    };
    Base.prototype.setForceStopped = function (forceStopped) {
        this.forceStopped = forceStopped;
    };
    Base.prototype.setCallStop = function (called) {
        this.callStopWhenPending = called;
    };
    Base.prototype.setContent = function (content) {
        if (this.content !== content) {
            this.content = content;
            this.style = content.style;
            this.stop();
        }
    };
    Base.prototype.clearTimer = function () {
        if (this.timer) {
            cancelAnimationFrame(this.timer);
            this.timer = 0;
        }
    };
    Base.prototype.destroy = function () {
        this.hooks.destroy();
        cancelAnimationFrame(this.timer);
    };
    return Base;
}());

// iOS 13.6 - 14.x, window.getComputedStyle sometimes will get wrong transform value
// when bs use transition mode
// eg: translateY -100px -> -200px, when the last frame which is about to scroll to -200px
// window.getComputedStyle(this.content) will calculate transformY to be -100px(startPoint)
// it is weird
// so we should validate position caculated by 'window.getComputedStyle'
var isValidPostion = function (startPoint, endPoint, currentPos, prePos) {
    var computeDirection = function (endValue, startValue) {
        var delta = endValue - startValue;
        var direction = delta > 0
            ? -1 /* Negative */
            : delta < 0
                ? 1 /* Positive */
                : 0 /* Default */;
        return direction;
    };
    var directionX = computeDirection(endPoint.x, startPoint.x);
    var directionY = computeDirection(endPoint.y, startPoint.y);
    var deltaX = currentPos.x - prePos.x;
    var deltaY = currentPos.y - prePos.y;
    return directionX * deltaX <= 0 && directionY * deltaY <= 0;
};

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.startProbe = function (startPoint, endPoint) {
        var _this = this;
        var prePos = startPoint;
        var probe = function () {
            var pos = _this.translater.getComputedPosition();
            if (isValidPostion(startPoint, endPoint, pos, prePos)) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
            }
            // call bs.stop() should not dispatch end hook again.
            // forceStop hook will do this.
            /* istanbul ignore if  */
            if (!_this.pending) {
                if (_this.callStopWhenPending) {
                    _this.callStopWhenPending = false;
                }
                else {
                    // transition ends should dispatch end hook.
                    _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
                }
            }
            prePos = pos;
            if (_this.pending) {
                _this.timer = requestAnimationFrame(probe);
            }
        };
        // when manually call bs.stop(), then bs.scrollTo()
        // we should reset callStopWhenPending to dispatch end hook
        if (this.callStopWhenPending) {
            this.setCallStop(false);
        }
        cancelAnimationFrame(this.timer);
        probe();
    };
    Transition.prototype.transitionTime = function (time) {
        if (time === void 0) { time = 0; }
        this.style[style.transitionDuration] = time + 'ms';
        this.hooks.trigger(this.hooks.eventTypes.time, time);
    };
    Transition.prototype.transitionTimingFunction = function (easing) {
        this.style[style.transitionTimingFunction] = easing;
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
    };
    Transition.prototype.transitionProperty = function () {
        this.style[style.transitionProperty] = style.transform;
    };
    Transition.prototype.move = function (startPoint, endPoint, time, easingFn) {
        this.setPending(time > 0);
        this.transitionTimingFunction(easingFn);
        this.transitionProperty();
        this.transitionTime(time);
        this.translate(endPoint);
        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
        if (time && isRealtimeProbeType) {
            this.startProbe(startPoint, endPoint);
        }
        // if we change content's transformY in a tick
        // such as: 0 -> 50px -> 0
        // transitionend will not be triggered
        // so we forceupdate by reflow
        if (!time) {
            this._reflow = this.content.offsetHeight;
            if (isRealtimeProbeType) {
                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            }
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
        }
    };
    Transition.prototype.doStop = function () {
        var pending = this.pending;
        this.setForceStopped(false);
        this.setCallStop(false);
        // still in transition
        if (pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
            this.transitionTime();
            this.translate({ x: x, y: y });
            this.setForceStopped(true);
            this.setCallStop(true);
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
        }
        return pending;
    };
    Transition.prototype.stop = function () {
        var stopFromTransition = this.doStop();
        if (stopFromTransition) {
            this.hooks.trigger(this.hooks.eventTypes.callStop);
        }
    };
    return Transition;
}(Base));

var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.move = function (startPoint, endPoint, time, easingFn) {
        // time is 0
        if (!time) {
            this.translate(endPoint);
            if (this.options.probeType === 3 /* Realtime */) {
                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            }
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
            return;
        }
        this.animate(startPoint, endPoint, time, easingFn);
    };
    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
        var _this = this;
        var startTime = getNow();
        var destTime = startTime + duration;
        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
        var step = function () {
            var now = getNow();
            // js animation end
            if (now >= destTime) {
                _this.translate(endPoint);
                if (isRealtimeProbeType) {
                    _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
                }
                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                return;
            }
            now = (now - startTime) / duration;
            var easing = easingFn(now);
            var newPoint = {};
            Object.keys(endPoint).forEach(function (key) {
                var startValue = startPoint[key];
                var endValue = endPoint[key];
                newPoint[key] = (endValue - startValue) * easing + startValue;
            });
            _this.translate(newPoint);
            if (isRealtimeProbeType) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
            }
            if (_this.pending) {
                _this.timer = requestAnimationFrame(step);
            }
            // call bs.stop() should not dispatch end hook again.
            // forceStop hook will do this.
            /* istanbul ignore if  */
            if (!_this.pending) {
                if (_this.callStopWhenPending) {
                    _this.callStopWhenPending = false;
                }
                else {
                    // raf ends should dispatch end hook.
                    _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                }
            }
        };
        this.setPending(true);
        // when manually call bs.stop(), then bs.scrollTo()
        // we should reset callStopWhenPending to dispatch end hook
        if (this.callStopWhenPending) {
            this.setCallStop(false);
        }
        cancelAnimationFrame(this.timer);
        step();
    };
    Animation.prototype.doStop = function () {
        var pending = this.pending;
        this.setForceStopped(false);
        this.setCallStop(false);
        // still in requestFrameAnimation
        if (pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var pos = this.translater.getComputedPosition();
            this.setForceStopped(true);
            this.setCallStop(true);
            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
        }
        return pending;
    };
    Animation.prototype.stop = function () {
        var stopFromAnimation = this.doStop();
        if (stopFromAnimation) {
            this.hooks.trigger(this.hooks.eventTypes.callStop);
        }
    };
    return Animation;
}(Base));

function createAnimater(element, translater, options) {
    var useTransition = options.useTransition;
    var animaterOptions = {};
    Object.defineProperty(animaterOptions, 'probeType', {
        enumerable: true,
        configurable: false,
        get: function () {
            return options.probeType;
        },
    });
    if (useTransition) {
        return new Transition(element, translater, animaterOptions);
    }
    else {
        return new Animation(element, translater, animaterOptions);
    }
}

var Behavior = /** @class */ (function () {
    function Behavior(wrapper, content, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeComputeBoundary',
            'computeBoundary',
            'momentum',
            'end',
            'ignoreHasScroll'
        ]);
        this.refresh(content);
    }
    Behavior.prototype.start = function () {
        this.dist = 0;
        this.setMovingDirection(0 /* Default */);
        this.setDirection(0 /* Default */);
    };
    Behavior.prototype.move = function (delta) {
        delta = this.hasScroll ? delta : 0;
        this.setMovingDirection(delta);
        return this.performDampingAlgorithm(delta, this.options.outOfBoundaryDampingFactor);
    };
    Behavior.prototype.setMovingDirection = function (delta) {
        this.movingDirection =
            delta > 0
                ? -1 /* Negative */
                : delta < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
    };
    Behavior.prototype.setDirection = function (delta) {
        this.direction =
            delta > 0
                ? -1 /* Negative */
                : delta < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
    };
    Behavior.prototype.performDampingAlgorithm = function (delta, dampingFactor) {
        var newPos = this.currentPos + delta;
        // Slow down or stop if outside of the boundaries
        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
                (newPos < this.maxScrollPos && this.options.bounces[1])) {
                newPos = this.currentPos + delta * dampingFactor;
            }
            else {
                newPos =
                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
            }
        }
        return newPos;
    };
    Behavior.prototype.end = function (duration) {
        var momentumInfo = {
            duration: 0
        };
        var absDist = Math.abs(this.currentPos - this.startPos);
        // start momentum animation if needed
        if (this.options.momentum &&
            duration < this.options.momentumLimitTime &&
            absDist > this.options.momentumLimitDistance) {
            var wrapperSize = (this.direction === -1 /* Negative */ && this.options.bounces[0]) ||
                (this.direction === 1 /* Positive */ && this.options.bounces[1])
                ? this.wrapperSize
                : 0;
            momentumInfo = this.hasScroll
                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
                : { destination: this.currentPos, duration: 0 };
        }
        else {
            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
        }
        return momentumInfo;
    };
    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
        if (options === void 0) { options = this.options; }
        var distance = current - start;
        var speed = Math.abs(distance) / time;
        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
        var duration = Math.min(swipeTime, (speed * 2) / deceleration);
        var momentumData = {
            destination: current + ((speed * speed) / deceleration) * (distance < 0 ? -1 : 1),
            duration: duration,
            rate: 15
        };
        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
        if (momentumData.destination < lowerMargin) {
            momentumData.destination = wrapperSize
                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
                : lowerMargin;
            momentumData.duration = swipeBounceTime;
        }
        else if (momentumData.destination > upperMargin) {
            momentumData.destination = wrapperSize
                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
                : upperMargin;
            momentumData.duration = swipeBounceTime;
        }
        momentumData.destination = Math.round(momentumData.destination);
        return momentumData;
    };
    Behavior.prototype.updateDirection = function () {
        var absDist = this.currentPos - this.absStartPos;
        this.setDirection(absDist);
    };
    Behavior.prototype.refresh = function (content) {
        var _a = this.options.rect, size = _a.size, position = _a.position;
        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
        // Force reflow
        var wrapperRect = getRect(this.wrapper);
        // use client is more fair than offset
        this.wrapperSize = this.wrapper[size === 'width' ? 'clientWidth' : 'clientHeight'];
        this.setContent(content);
        var contentRect = getRect(this.content);
        this.contentSize = contentRect[size];
        this.relativeOffset = contentRect[position];
        /* istanbul ignore if  */
        if (isWrapperStatic) {
            this.relativeOffset -= wrapperRect[position];
        }
        this.computeBoundary();
        this.setDirection(0 /* Default */);
    };
    Behavior.prototype.setContent = function (content) {
        if (content !== this.content) {
            this.content = content;
            this.resetState();
        }
    };
    Behavior.prototype.resetState = function () {
        this.currentPos = 0;
        this.startPos = 0;
        this.dist = 0;
        this.setDirection(0 /* Default */);
        this.setMovingDirection(0 /* Default */);
        this.resetStartPos();
    };
    Behavior.prototype.computeBoundary = function () {
        this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
        var boundary = {
            minScrollPos: 0,
            maxScrollPos: this.wrapperSize - this.contentSize
        };
        if (boundary.maxScrollPos < 0) {
            boundary.maxScrollPos -= this.relativeOffset;
            if (this.options.specifiedIndexAsContent === 0) {
                boundary.minScrollPos = -this.relativeOffset;
            }
        }
        this.hooks.trigger(this.hooks.eventTypes.computeBoundary, boundary);
        this.minScrollPos = boundary.minScrollPos;
        this.maxScrollPos = boundary.maxScrollPos;
        this.hasScroll =
            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
        if (!this.hasScroll && this.minScrollPos < this.maxScrollPos) {
            this.maxScrollPos = this.minScrollPos;
            this.contentSize = this.wrapperSize;
        }
    };
    Behavior.prototype.updatePosition = function (pos) {
        this.currentPos = pos;
    };
    Behavior.prototype.getCurrentPos = function () {
        return this.currentPos;
    };
    Behavior.prototype.checkInBoundary = function () {
        var position = this.adjustPosition(this.currentPos);
        var inBoundary = position === this.getCurrentPos();
        return {
            position: position,
            inBoundary: inBoundary
        };
    };
    // adjust position when out of boundary
    Behavior.prototype.adjustPosition = function (pos) {
        if (!this.hasScroll &&
            !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)) {
            pos = this.minScrollPos;
        }
        else if (pos > this.minScrollPos) {
            pos = this.minScrollPos;
        }
        else if (pos < this.maxScrollPos) {
            pos = this.maxScrollPos;
        }
        return pos;
    };
    Behavior.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
    };
    Behavior.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
    };
    Behavior.prototype.resetStartPos = function () {
        this.updateStartPos();
        this.updateAbsStartPos();
    };
    Behavior.prototype.getAbsDist = function (delta) {
        this.dist += delta;
        return Math.abs(this.dist);
    };
    Behavior.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Behavior;
}());

var _a, _b, _c, _d;
var PassthroughHandlers = (_a = {},
    _a["yes" /* Yes */] = function (e) {
        return true;
    },
    _a["no" /* No */] = function (e) {
        maybePrevent(e);
        return false;
    },
    _a);
var DirectionMap = (_b = {},
    _b["horizontal" /* Horizontal */] = (_c = {},
        _c["yes" /* Yes */] = "horizontal" /* Horizontal */,
        _c["no" /* No */] = "vertical" /* Vertical */,
        _c),
    _b["vertical" /* Vertical */] = (_d = {},
        _d["yes" /* Yes */] = "vertical" /* Vertical */,
        _d["no" /* No */] = "horizontal" /* Horizontal */,
        _d),
    _b);
var DirectionLockAction = /** @class */ (function () {
    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
        this.directionLockThreshold = directionLockThreshold;
        this.freeScroll = freeScroll;
        this.eventPassthrough = eventPassthrough;
        this.reset();
    }
    DirectionLockAction.prototype.reset = function () {
        this.directionLocked = "" /* Default */;
    };
    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
        this.computeDirectionLock(absDistX, absDistY);
        return this.handleEventPassthrough(e);
    };
    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
        if (this.directionLocked === "horizontal" /* Horizontal */) {
            deltaY = 0;
        }
        else if (this.directionLocked === "vertical" /* Vertical */) {
            deltaX = 0;
        }
        return {
            deltaX: deltaX,
            deltaY: deltaY,
        };
    };
    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
        // If you are scrolling in one direction, lock it
        if (this.directionLocked === "" /* Default */ && !this.freeScroll) {
            if (absDistX > absDistY + this.directionLockThreshold) {
                this.directionLocked = "horizontal" /* Horizontal */; // lock horizontally
            }
            else if (absDistY >= absDistX + this.directionLockThreshold) {
                this.directionLocked = "vertical" /* Vertical */; // lock vertically
            }
            else {
                this.directionLocked = "none" /* None */; // no lock
            }
        }
    };
    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
        var handleMap = DirectionMap[this.directionLocked];
        if (handleMap) {
            if (this.eventPassthrough === handleMap["yes" /* Yes */]) {
                return PassthroughHandlers["yes" /* Yes */](e);
            }
            else if (this.eventPassthrough === handleMap["no" /* No */]) {
                return PassthroughHandlers["no" /* No */](e);
            }
        }
        return false;
    };
    return DirectionLockAction;
}());

var applyQuadrantTransformation = function (deltaX, deltaY, quadrant) {
    if (quadrant === 2 /* Second */) {
        return [deltaY, -deltaX];
    }
    else if (quadrant === 3 /* Third */) {
        return [-deltaX, -deltaY];
    }
    else if (quadrant === 4 /* Forth */) {
        return [-deltaY, deltaX];
    }
    else {
        return [deltaX, deltaY];
    }
};
var ScrollerActions = /** @class */ (function () {
    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
        this.hooks = new EventEmitter([
            'start',
            'beforeMove',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'end',
            'scrollEnd',
            'contentNotMoved',
            'detectMovingDirection',
            'coordinateTransformation',
        ]);
        this.scrollBehaviorX = scrollBehaviorX;
        this.scrollBehaviorY = scrollBehaviorY;
        this.actionsHandler = actionsHandler;
        this.animater = animater;
        this.options = options;
        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
        this.enabled = true;
        this.bindActionsHandler();
    }
    ScrollerActions.prototype.bindActionsHandler = function () {
        var _this = this;
        // [mouse|touch]start event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleStart(e);
        });
        // [mouse|touch]move event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
            if (!_this.enabled)
                return true;
            var _b = applyQuadrantTransformation(deltaX, deltaY, _this.options.quadrant), transformateDeltaX = _b[0], transformateDeltaY = _b[1];
            var transformateDeltaData = {
                deltaX: transformateDeltaX,
                deltaY: transformateDeltaY,
            };
            _this.hooks.trigger(_this.hooks.eventTypes.coordinateTransformation, transformateDeltaData);
            return _this.handleMove(transformateDeltaData.deltaX, transformateDeltaData.deltaY, e);
        });
        // [mouse|touch]end event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleEnd(e);
        });
        // click
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            // handle native click event
            if (_this.enabled && !e._constructed) {
                _this.handleClick(e);
            }
        });
    };
    ScrollerActions.prototype.handleStart = function (e) {
        var timestamp = getNow();
        this.fingerMoved = false;
        this.contentMoved = false;
        this.startTime = timestamp;
        this.directionLockAction.reset();
        this.scrollBehaviorX.start();
        this.scrollBehaviorY.start();
        // force stopping last transition or animation
        this.animater.doStop();
        this.scrollBehaviorX.resetStartPos();
        this.scrollBehaviorY.resetStartPos();
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
            return;
        }
        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
        var timestamp = getNow();
        // We need to move at least momentumLimitDistance pixels
        // for the scrolling to initiate
        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
            return true;
        }
        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
            this.actionsHandler.setInitiated();
            return true;
        }
        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
        var prevX = this.scrollBehaviorX.getCurrentPos();
        var newX = this.scrollBehaviorX.move(delta.deltaX);
        var prevY = this.scrollBehaviorY.getCurrentPos();
        var newY = this.scrollBehaviorY.move(delta.deltaY);
        if (this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
            return;
        }
        if (!this.fingerMoved) {
            this.fingerMoved = true;
        }
        var positionChanged = newX !== prevX || newY !== prevY;
        if (!this.contentMoved && !positionChanged) {
            this.hooks.trigger(this.hooks.eventTypes.contentNotMoved);
        }
        if (!this.contentMoved && positionChanged) {
            this.contentMoved = true;
            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
        }
        if (this.contentMoved && positionChanged) {
            this.animater.translate({
                x: newX,
                y: newY,
            });
            this.dispatchScroll(timestamp);
        }
    };
    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
        // dispatch scroll in interval time
        if (timestamp - this.startTime > this.options.momentumLimitTime) {
            // refresh time and starting position to initiate a momentum
            this.startTime = timestamp;
            this.scrollBehaviorX.updateStartPos();
            this.scrollBehaviorY.updateStartPos();
            if (this.options.probeType === 1 /* Throttle */) {
                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
            }
        }
        // dispatch scroll all the time
        if (this.options.probeType > 1 /* Throttle */) {
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
        }
    };
    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
        return (timestamp - this.endTime > this.options.momentumLimitTime &&
            absDistY < this.options.momentumLimitDistance &&
            absDistX < this.options.momentumLimitDistance);
    };
    ScrollerActions.prototype.handleEnd = function (e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
            return;
        }
        var currentPos = this.getCurrentPos();
        this.scrollBehaviorX.updateDirection();
        this.scrollBehaviorY.updateDirection();
        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
            return true;
        }
        currentPos = this.ensureIntegerPos(currentPos);
        this.animater.translate(currentPos);
        this.endTime = getNow();
        var duration = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
    };
    ScrollerActions.prototype.ensureIntegerPos = function (currentPos) {
        this.ensuringInteger = true;
        var x = currentPos.x, y = currentPos.y;
        var _a = this.scrollBehaviorX, minScrollPosX = _a.minScrollPos, maxScrollPosX = _a.maxScrollPos;
        var _b = this.scrollBehaviorY, minScrollPosY = _b.minScrollPos, maxScrollPosY = _b.maxScrollPos;
        x = x > 0 ? Math.ceil(x) : Math.floor(x);
        y = y > 0 ? Math.ceil(y) : Math.floor(y);
        x = between(x, maxScrollPosX, minScrollPosX);
        y = between(y, maxScrollPosY, minScrollPosY);
        return { x: x, y: y };
    };
    ScrollerActions.prototype.handleClick = function (e) {
        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
            maybePrevent(e);
            e.stopPropagation();
        }
    };
    ScrollerActions.prototype.getCurrentPos = function () {
        return {
            x: this.scrollBehaviorX.getCurrentPos(),
            y: this.scrollBehaviorY.getCurrentPos(),
        };
    };
    ScrollerActions.prototype.refresh = function () {
        this.endTime = 0;
    };
    ScrollerActions.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return ScrollerActions;
}());

function createActionsHandlerOptions(bsOptions) {
    var options = [
        'click',
        'bindToWrapper',
        'disableMouse',
        'disableTouch',
        'preventDefault',
        'stopPropagation',
        'tagException',
        'preventDefaultException',
        'autoEndDistance',
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    return options;
}
function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
    var options = [
        'momentum',
        'momentumLimitTime',
        'momentumLimitDistance',
        'deceleration',
        'swipeBounceTime',
        'swipeTime',
        'outOfBoundaryDampingFactor',
        'specifiedIndexAsContent',
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    // add extra property
    options.scrollable = !!bsOptions[extraProp];
    options.bounces = bounces;
    options.rect = rect;
    return options;
}

function bubbling(source, target, events) {
    events.forEach(function (event) {
        var sourceEvent;
        var targetEvent;
        if (typeof event === 'string') {
            sourceEvent = targetEvent = event;
        }
        else {
            sourceEvent = event.source;
            targetEvent = event.target;
        }
        source.on(sourceEvent, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return target.trigger.apply(target, __spreadArrays([targetEvent], args));
        });
    });
}

function isSamePoint(startPoint, endPoint) {
    // keys of startPoint and endPoint should be equal
    var keys = Object.keys(startPoint);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (startPoint[key] !== endPoint[key])
            return false;
    }
    return true;
}

var MIN_SCROLL_DISTANCE = 1;
var Scroller = /** @class */ (function () {
    function Scroller(wrapper, content, options) {
        this.wrapper = wrapper;
        this.content = content;
        this.resizeTimeout = 0;
        this.hooks = new EventEmitter([
            'beforeStart',
            'beforeMove',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'scrollEnd',
            'resize',
            'touchEnd',
            'end',
            'flick',
            'scrollCancel',
            'momentum',
            'scrollTo',
            'minDistanceScroll',
            'scrollToElement',
            'beforeRefresh',
        ]);
        this.options = options;
        var _a = this.options.bounce, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        // direction X
        this.scrollBehaviorX = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollX', [left, right], {
            size: 'width',
            position: 'left',
        }));
        // direction Y
        this.scrollBehaviorY = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollY', [top, bottom], {
            size: 'height',
            position: 'top',
        }));
        this.translater = new Translater(this.content);
        this.animater = createAnimater(this.content, this.translater, this.options);
        this.actionsHandler = new ActionsHandler(this.options.bindToTarget ? this.content : wrapper, createActionsHandlerOptions(this.options));
        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
        var resizeHandler = this.resize.bind(this);
        this.resizeRegister = new EventRegister(window, [
            {
                name: 'orientationchange',
                handler: resizeHandler,
            },
            {
                name: 'resize',
                handler: resizeHandler,
            },
        ]);
        this.registerTransitionEnd();
        this.init();
    }
    Scroller.prototype.init = function () {
        var _this = this;
        this.bindTranslater();
        this.bindAnimater();
        this.bindActions();
        // enable pointer events when scrolling ends
        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            _this.togglePointerEvents(true);
        });
    };
    Scroller.prototype.registerTransitionEnd = function () {
        this.transitionEndRegister = new EventRegister(this.content, [
            {
                name: style.transitionEnd,
                handler: this.transitionEnd.bind(this),
            },
        ]);
    };
    Scroller.prototype.bindTranslater = function () {
        var _this = this;
        var hooks = this.translater.hooks;
        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
            if (_this.options.translateZ) {
                transformStyle.push(_this.options.translateZ);
            }
        });
        // disable pointer events when scrolling
        hooks.on(hooks.eventTypes.translate, function (pos) {
            var prevPos = _this.getCurrentPos();
            _this.updatePositions(pos);
            // scrollEnd will dispatch when scroll is force stopping in touchstart handler
            // so in touchend handler, don't toggle pointer-events
            if (_this.actions.ensuringInteger === true) {
                _this.actions.ensuringInteger = false;
                return;
            }
            // a valid translate
            if (pos.x !== prevPos.x || pos.y !== prevPos.y) {
                _this.togglePointerEvents(false);
            }
        });
    };
    Scroller.prototype.bindAnimater = function () {
        var _this = this;
        // reset position
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
            if (!_this.resetPosition(_this.options.bounceTime)) {
                _this.animater.setPending(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
        });
        bubbling(this.animater.hooks, this.hooks, [
            {
                source: this.animater.hooks.eventTypes.move,
                target: this.hooks.eventTypes.scroll,
            },
            {
                source: this.animater.hooks.eventTypes.forceStop,
                target: this.hooks.eventTypes.scrollEnd,
            },
        ]);
    };
    Scroller.prototype.bindActions = function () {
        var _this = this;
        var actions = this.actions;
        bubbling(actions.hooks, this.hooks, [
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeStart,
            },
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeScrollStart,
            },
            {
                source: actions.hooks.eventTypes.beforeMove,
                target: this.hooks.eventTypes.beforeMove,
            },
            {
                source: actions.hooks.eventTypes.scrollStart,
                target: this.hooks.eventTypes.scrollStart,
            },
            {
                source: actions.hooks.eventTypes.scroll,
                target: this.hooks.eventTypes.scroll,
            },
            {
                source: actions.hooks.eventTypes.beforeEnd,
                target: this.hooks.eventTypes.beforeEnd,
            },
        ]);
        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
                return true;
            }
            // check if it is a click operation
            if (!actions.fingerMoved) {
                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
                if (_this.checkClick(e)) {
                    return true;
                }
            }
            // reset if we are outside of the boundaries
            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
                _this.animater.setForceStopped(false);
                return true;
            }
        });
        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
            if (_this.checkFlick(duration, deltaX, deltaY)) {
                _this.animater.setForceStopped(false);
                _this.hooks.trigger(_this.hooks.eventTypes.flick);
                return;
            }
            if (_this.momentum(pos, duration)) {
                _this.animater.setForceStopped(false);
                return;
            }
            if (actions.contentMoved) {
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
            if (_this.animater.forceStopped) {
                _this.animater.setForceStopped(false);
            }
        });
    };
    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
        var flickMinMovingDistance = 1; // distinguish flick from click
        if (this.hooks.events.flick.length > 1 &&
            duration < this.options.flickLimitTime &&
            deltaX < this.options.flickLimitDistance &&
            deltaY < this.options.flickLimitDistance &&
            (deltaY > flickMinMovingDistance || deltaX > flickMinMovingDistance)) {
            return true;
        }
    };
    Scroller.prototype.momentum = function (pos, duration) {
        var meta = {
            time: 0,
            easing: ease.swiper,
            newX: pos.x,
            newY: pos.y,
        };
        // start momentum animation if needed
        var momentumX = this.scrollBehaviorX.end(duration);
        var momentumY = this.scrollBehaviorY.end(duration);
        meta.newX = isUndef(momentumX.destination)
            ? meta.newX
            : momentumX.destination;
        meta.newY = isUndef(momentumY.destination)
            ? meta.newY
            : momentumY.destination;
        meta.time = Math.max(momentumX.duration, momentumY.duration);
        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
        // when x or y changed, do momentum animation now!
        if (meta.newX !== pos.x || meta.newY !== pos.y) {
            // change easing function when scroller goes out of the boundaries
            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
                meta.newX < this.scrollBehaviorX.maxScrollPos ||
                meta.newY > this.scrollBehaviorY.minScrollPos ||
                meta.newY < this.scrollBehaviorY.maxScrollPos) {
                meta.easing = ease.swipeBounce;
            }
            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
            return true;
        }
    };
    Scroller.prototype.checkClick = function (e) {
        var cancelable = {
            preventClick: this.animater.forceStopped,
        };
        // we scrolled less than momentumLimitDistance pixels
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick)) {
            this.animater.setForceStopped(false);
            return true;
        }
        if (!cancelable.preventClick) {
            var _dblclick = this.options.dblclick;
            var dblclickTrigged = false;
            if (_dblclick && this.lastClickTime) {
                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
                if (getNow() - this.lastClickTime < delay) {
                    dblclickTrigged = true;
                    dblclick(e);
                }
            }
            if (this.options.tap) {
                tap(e, this.options.tap);
            }
            if (this.options.click &&
                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
                click(e);
            }
            this.lastClickTime = dblclickTrigged ? null : getNow();
            return true;
        }
        return false;
    };
    Scroller.prototype.resize = function () {
        var _this = this;
        if (!this.actions.enabled) {
            return;
        }
        // fix a scroll problem under Android condition
        /* istanbul ignore if  */
        if (isAndroid) {
            this.wrapper.scrollTop = 0;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(function () {
            _this.hooks.trigger(_this.hooks.eventTypes.resize);
        }, this.options.resizePolling);
    };
    /* istanbul ignore next */
    Scroller.prototype.transitionEnd = function (e) {
        if (e.target !== this.content || !this.animater.pending) {
            return;
        }
        var animater = this.animater;
        animater.transitionTime();
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
            this.animater.setPending(false);
            if (this.options.probeType !== 3 /* Realtime */) {
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
            }
        }
    };
    Scroller.prototype.togglePointerEvents = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        var el = this.content.children.length
            ? this.content.children
            : [this.content];
        var pointerEvents = enabled ? 'auto' : 'none';
        for (var i = 0; i < el.length; i++) {
            var node = el[i];
            // ignore BetterScroll instance's wrapper DOM
            /* istanbul ignore if  */
            if (node.isBScrollContainer) {
                continue;
            }
            node.style.pointerEvents = pointerEvents;
        }
    };
    Scroller.prototype.refresh = function (content) {
        var contentChanged = this.setContent(content);
        this.hooks.trigger(this.hooks.eventTypes.beforeRefresh);
        this.scrollBehaviorX.refresh(content);
        this.scrollBehaviorY.refresh(content);
        if (contentChanged) {
            this.translater.setContent(content);
            this.animater.setContent(content);
            this.transitionEndRegister.destroy();
            this.registerTransitionEnd();
            if (this.options.bindToTarget) {
                this.actionsHandler.setContent(content);
            }
        }
        this.actions.refresh();
        this.wrapperOffset = offset(this.wrapper);
    };
    Scroller.prototype.setContent = function (content) {
        var contentChanged = content !== this.content;
        if (contentChanged) {
            this.content = content;
        }
        return contentChanged;
    };
    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
        if (time === void 0) { time = 0; }
        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
        easing = !easing ? ease.bounce : easing;
        deltaX += x;
        deltaY += y;
        this.scrollTo(deltaX, deltaY, time, easing);
    };
    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform) {
        if (time === void 0) { time = 0; }
        if (easing === void 0) { easing = ease.bounce; }
        if (extraTransform === void 0) { extraTransform = {
            start: {},
            end: {},
        }; }
        var easingFn = this.options.useTransition ? easing.style : easing.fn;
        var currentPos = this.getCurrentPos();
        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
        var endPoint = __assign({ x: x,
            y: y }, extraTransform.end);
        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
        // it is an useless move
        if (isSamePoint(startPoint, endPoint))
            return;
        var deltaX = Math.abs(endPoint.x - startPoint.x);
        var deltaY = Math.abs(endPoint.y - startPoint.y);
        // considering of browser compatibility for decimal transform value
        // force translating immediately
        if (deltaX < MIN_SCROLL_DISTANCE && deltaY < MIN_SCROLL_DISTANCE) {
            time = 0;
            this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll);
        }
        this.animater.move(startPoint, endPoint, time, easingFn);
    };
    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
        var targetEle = getElement(el);
        var pos = offset(targetEle);
        var getOffset = function (offset, size, wrapperSize) {
            if (typeof offset === 'number') {
                return offset;
            }
            // if offsetX/Y are true we center the element to the screen
            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
        };
        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
            pos -= wrapperPos;
            pos = scrollBehavior.adjustPosition(pos - offset);
            return pos;
        };
        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
            return;
        }
        this.scrollTo(pos.left, pos.top, time, easing);
    };
    Scroller.prototype.resetPosition = function (time, easing) {
        if (time === void 0) { time = 0; }
        if (easing === void 0) { easing = ease.bounce; }
        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
        if (xInBoundary && yInBoundary) {
            return false;
        }
        /* istanbul ignore if  */
        if (isIOSBadVersion) {
            // fix ios 13.4 bouncing
            // see it in issues 982
            this.reflow();
        }
        // out of boundary
        this.scrollTo(x, y, time, easing);
        return true;
    };
    /* istanbul ignore next */
    Scroller.prototype.reflow = function () {
        this._reflow = this.content.offsetHeight;
    };
    Scroller.prototype.updatePositions = function (pos) {
        this.scrollBehaviorX.updatePosition(pos.x);
        this.scrollBehaviorY.updatePosition(pos.y);
    };
    Scroller.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
    };
    Scroller.prototype.enable = function () {
        this.actions.enabled = true;
    };
    Scroller.prototype.disable = function () {
        cancelAnimationFrame(this.animater.timer);
        this.actions.enabled = false;
    };
    Scroller.prototype.destroy = function () {
        var _this = this;
        var keys = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY',
        ];
        keys.forEach(function (key) { return _this[key].destroy(); });
    };
    return Scroller;
}());

var BScrollConstructor = /** @class */ (function (_super) {
    __extends(BScrollConstructor, _super);
    function BScrollConstructor(el, options) {
        var _this = _super.call(this, [
            'refresh',
            'contentChanged',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy'
        ]) || this;
        var wrapper = getElement(el);
        if (!wrapper) {
            warn('Can not resolve the wrapper DOM.');
            return _this;
        }
        _this.plugins = {};
        _this.options = new OptionsConstructor().merge(options).process();
        if (!_this.setContent(wrapper).valid) {
            return _this;
        }
        _this.hooks = new EventEmitter([
            'refresh',
            'enable',
            'disable',
            'destroy',
            'beforeInitialScrollTo',
            'contentChanged'
        ]);
        _this.init(wrapper);
        return _this;
    }
    BScrollConstructor.use = function (ctor) {
        var name = ctor.pluginName;
        var installed = BScrollConstructor.plugins.some(function (plugin) { return ctor === plugin.ctor; });
        if (installed)
            return BScrollConstructor;
        if (isUndef(name)) {
            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
            return BScrollConstructor;
        }
        BScrollConstructor.pluginsMap[name] = true;
        BScrollConstructor.plugins.push({
            name: name,
            applyOrder: ctor.applyOrder,
            ctor: ctor
        });
        return BScrollConstructor;
    };
    BScrollConstructor.prototype.setContent = function (wrapper) {
        var contentChanged = false;
        var valid = true;
        var content = wrapper.children[this.options.specifiedIndexAsContent];
        if (!content) {
            warn('The wrapper need at least one child element to be content element to scroll.');
            valid = false;
        }
        else {
            contentChanged = this.content !== content;
            if (contentChanged) {
                this.content = content;
            }
        }
        return {
            valid: valid,
            contentChanged: contentChanged
        };
    };
    BScrollConstructor.prototype.init = function (wrapper) {
        var _this = this;
        this.wrapper = wrapper;
        // mark wrapper to recognize bs instance by DOM attribute
        wrapper.isBScrollContainer = true;
        this.scroller = new Scroller(wrapper, this.content, this.options);
        this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
            _this.refresh();
        });
        this.eventBubbling();
        this.handleAutoBlur();
        this.enable();
        this.proxy(propertiesConfig);
        this.applyPlugins();
        // maybe boundary has changed, should refresh
        this.refreshWithoutReset(this.content);
        var _a = this.options, startX = _a.startX, startY = _a.startY;
        var position = {
            x: startX,
            y: startY
        };
        // maybe plugins want to control scroll position
        if (this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, position)) {
            return;
        }
        this.scroller.scrollTo(position.x, position.y);
    };
    BScrollConstructor.prototype.applyPlugins = function () {
        var _this = this;
        var options = this.options;
        BScrollConstructor.plugins
            .sort(function (a, b) {
            var _a;
            var applyOrderMap = (_a = {},
                _a["pre" /* Pre */] = -1,
                _a["post" /* Post */] = 1,
                _a);
            var aOrder = a.applyOrder ? applyOrderMap[a.applyOrder] : 0;
            var bOrder = b.applyOrder ? applyOrderMap[b.applyOrder] : 0;
            return aOrder - bOrder;
        })
            .forEach(function (item) {
            var ctor = item.ctor;
            if (options[item.name] && typeof ctor === 'function') {
                _this.plugins[item.name] = new ctor(_this);
            }
        });
    };
    BScrollConstructor.prototype.handleAutoBlur = function () {
        /* istanbul ignore if  */
        if (this.options.autoBlur) {
            this.on(this.eventTypes.beforeScrollStart, function () {
                var activeElement = document.activeElement;
                if (activeElement &&
                    (activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            });
        }
    };
    BScrollConstructor.prototype.eventBubbling = function () {
        bubbling(this.scroller.hooks, this, [
            this.eventTypes.beforeScrollStart,
            this.eventTypes.scrollStart,
            this.eventTypes.scroll,
            this.eventTypes.scrollEnd,
            this.eventTypes.scrollCancel,
            this.eventTypes.touchEnd,
            this.eventTypes.flick
        ]);
    };
    BScrollConstructor.prototype.refreshWithoutReset = function (content) {
        this.scroller.refresh(content);
        this.hooks.trigger(this.hooks.eventTypes.refresh, content);
        this.trigger(this.eventTypes.refresh, content);
    };
    BScrollConstructor.prototype.proxy = function (propertiesConfig) {
        var _this = this;
        propertiesConfig.forEach(function (_a) {
            var key = _a.key, sourceKey = _a.sourceKey;
            propertiesProxy(_this, sourceKey, key);
        });
    };
    BScrollConstructor.prototype.refresh = function () {
        var _a = this.setContent(this.wrapper), contentChanged = _a.contentChanged, valid = _a.valid;
        if (valid) {
            var content = this.content;
            this.refreshWithoutReset(content);
            if (contentChanged) {
                this.hooks.trigger(this.hooks.eventTypes.contentChanged, content);
                this.trigger(this.eventTypes.contentChanged, content);
            }
            this.scroller.resetPosition();
        }
    };
    BScrollConstructor.prototype.enable = function () {
        this.scroller.enable();
        this.hooks.trigger(this.hooks.eventTypes.enable);
        this.trigger(this.eventTypes.enable);
    };
    BScrollConstructor.prototype.disable = function () {
        this.scroller.disable();
        this.hooks.trigger(this.hooks.eventTypes.disable);
        this.trigger(this.eventTypes.disable);
    };
    BScrollConstructor.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy);
        this.trigger(this.eventTypes.destroy);
        this.scroller.destroy();
    };
    BScrollConstructor.prototype.eventRegister = function (names) {
        this.registerType(names);
    };
    BScrollConstructor.plugins = [];
    BScrollConstructor.pluginsMap = {};
    return BScrollConstructor;
}(EventEmitter));
function createBScroll(el, options) {
    var bs = new BScrollConstructor(el, options);
    return bs;
}
createBScroll.use = BScrollConstructor.use;
createBScroll.plugins = BScrollConstructor.plugins;
createBScroll.pluginsMap = BScrollConstructor.pluginsMap;
var BScroll = createBScroll;

/*!
 * better-scroll / wheel
 * (c) 2016-2023 ustbhuangyi
 * Released under the MIT License.
 */
// ssr support
var inBrowser$1 = typeof window !== 'undefined';
var ua$1 = inBrowser$1 && navigator.userAgent.toLowerCase();
!!(ua$1 && /wechatdevtools/.test(ua$1));
ua$1 && ua$1.indexOf('android') > 0;
/* istanbul ignore next */
((function () {
    if (typeof ua$1 === 'string') {
        var regex = /os (\d\d?_\d(_\d)?)/;
        var matches = regex.exec(ua$1);
        if (!matches)
            return false;
        var parts = matches[1].split('_').map(function (item) {
            return parseInt(item, 10);
        });
        // ios version >= 13.4 issue 982
        return !!(parts[0] === 13 && parts[1] >= 4);
    }
    return false;
}))();
/* istanbul ignore next */
var supportsPassive$1 = false;
/* istanbul ignore next */
if (inBrowser$1) {
    var EventName$1 = 'test-passive';
    try {
        var opts$1 = {};
        Object.defineProperty(opts$1, 'passive', {
            get: function () {
                supportsPassive$1 = true;
            },
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener(EventName$1, function () { }, opts$1);
    }
    catch (e) { }
}

var extend$1 = function (target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};

var elementStyle$1 = (inBrowser$1 &&
    document.createElement('div').style);
var vendor$1 = (function () {
    /* istanbul ignore if  */
    if (!inBrowser$1) {
        return false;
    }
    var transformNames = [
        {
            key: 'standard',
            value: 'transform',
        },
        {
            key: 'webkit',
            value: 'webkitTransform',
        },
        {
            key: 'Moz',
            value: 'MozTransform',
        },
        {
            key: 'O',
            value: 'OTransform',
        },
        {
            key: 'ms',
            value: 'msTransform',
        },
    ];
    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
        var obj = transformNames_1[_i];
        if (elementStyle$1[obj.value] !== undefined) {
            return obj.key;
        }
    }
    /* istanbul ignore next  */
    return false;
})();
/* istanbul ignore next  */
function prefixStyle$1(style) {
    if (vendor$1 === false) {
        return style;
    }
    if (vendor$1 === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor$1 + style.charAt(0).toUpperCase() + style.substr(1);
}
vendor$1 && vendor$1 !== 'standard' ? '-' + vendor$1.toLowerCase() + '-' : '';
var transform$1 = prefixStyle$1('transform');
var transition$1 = prefixStyle$1('transition');
inBrowser$1 && prefixStyle$1('perspective') in elementStyle$1;
var style$1 = {
    transform: transform$1,
    transition: transition$1,
    transitionTimingFunction: prefixStyle$1('transitionTimingFunction'),
    transitionDuration: prefixStyle$1('transitionDuration'),
    transitionDelay: prefixStyle$1('transitionDelay'),
    transformOrigin: prefixStyle$1('transformOrigin'),
    transitionEnd: prefixStyle$1('transitionEnd'),
    transitionProperty: prefixStyle$1('transitionProperty'),
};
function hasClass(el, className) {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
}
function HTMLCollectionToArray(el) {
    return Array.prototype.slice.call(el, 0);
}

var ease$1 = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var sourcePrefix = 'plugins.wheel';
var propertiesMap = [
    {
        key: 'wheelTo',
        name: 'wheelTo',
    },
    {
        key: 'getSelectedIndex',
        name: 'getSelectedIndex',
    },
    {
        key: 'restorePosition',
        name: 'restorePosition',
    },
];
var propertiesConfig$1 = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name,
    };
});

var WHEEL_INDEX_CHANGED_EVENT_NAME = 'wheelIndexChanged';
var CONSTANTS = {
    rate: 4
};
var Wheel = /** @class */ (function () {
    function Wheel(scroll) {
        this.scroll = scroll;
        this.init();
    }
    Wheel.prototype.init = function () {
        this.handleBScroll();
        this.handleOptions();
        this.handleHooks();
        // init boundary for Wheel
        this.refreshBoundary();
        this.setSelectedIndex(this.options.selectedIndex);
    };
    Wheel.prototype.handleBScroll = function () {
        this.scroll.proxy(propertiesConfig$1);
        this.scroll.registerType([WHEEL_INDEX_CHANGED_EVENT_NAME]);
    };
    Wheel.prototype.handleOptions = function () {
        var userOptions = (this.scroll.options.wheel === true
            ? {}
            : this.scroll.options.wheel);
        var defaultOptions = {
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item',
            rotate: 25,
            adjustTime: 400,
            selectedIndex: 0,
            wheelDisabledItemClass: 'wheel-disabled-item'
        };
        this.options = extend$1(defaultOptions, userOptions);
    };
    Wheel.prototype.handleHooks = function () {
        var _this = this;
        var scroll = this.scroll;
        var scroller = this.scroll.scroller;
        var actionsHandler = scroller.actionsHandler, scrollBehaviorX = scroller.scrollBehaviorX, scrollBehaviorY = scroller.scrollBehaviorY, animater = scroller.animater;
        var prevContent = scroller.content;
        // BScroll
        scroll.on(scroll.eventTypes.scrollEnd, function (position) {
            var index = _this.findNearestValidWheel(position.y).index;
            if (scroller.animater.forceStopped && !_this.isAdjustingPosition) {
                _this.target = _this.items[index];
                // since stopped from an animation.
                // prevent user's scrollEnd callback triggered twice
                return true;
            }
            else {
                _this.setSelectedIndex(index);
                if (_this.isAdjustingPosition) {
                    _this.isAdjustingPosition = false;
                }
            }
        });
        // BScroll.hooks
        this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh, function (content) {
            if (content !== prevContent) {
                prevContent = content;
                _this.setSelectedIndex(_this.options.selectedIndex, true);
            }
            // rotate all wheel-items
            // because position may not change
            _this.rotateX(_this.scroll.y);
            // check we are stop at a disable item or not
            _this.wheelTo(_this.selectedIndex, 0);
        });
        this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo, function (position) {
            // selectedIndex has higher priority than bs.options.startY
            position.x = 0;
            position.y = -(_this.selectedIndex * _this.itemHeight);
        });
        // Scroller
        scroller.hooks.on(scroller.hooks.eventTypes.checkClick, function () {
            var index = HTMLCollectionToArray(_this.items).indexOf(_this.target);
            if (index === -1)
                return true;
            _this.wheelTo(index, _this.options.adjustTime, ease$1.swipe);
            return true;
        });
        scroller.hooks.on(scroller.hooks.eventTypes.scrollTo, function (endPoint) {
            endPoint.y = _this.findNearestValidWheel(endPoint.y).y;
        });
        // when content is scrolling
        // click wheel-item DOM repeatedly and crazily will cause scrollEnd not triggered
        // so reset forceStopped
        scroller.hooks.on(scroller.hooks.eventTypes.minDistanceScroll, function () {
            var animater = scroller.animater;
            if (animater.forceStopped === true) {
                animater.forceStopped = false;
            }
        });
        scroller.hooks.on(scroller.hooks.eventTypes.scrollToElement, function (el, pos) {
            if (!hasClass(el, _this.options.wheelItemClass)) {
                return true;
            }
            else {
                pos.top = _this.findNearestValidWheel(pos.top).y;
            }
        });
        // ActionsHandler
        actionsHandler.hooks.on(actionsHandler.hooks.eventTypes.beforeStart, function (e) {
            _this.target = e.target;
        });
        // ScrollBehaviorX
        // Wheel has no x direction now
        scrollBehaviorX.hooks.on(scrollBehaviorX.hooks.eventTypes.computeBoundary, function (boundary) {
            boundary.maxScrollPos = 0;
            boundary.minScrollPos = 0;
        });
        // ScrollBehaviorY
        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.computeBoundary, function (boundary) {
            _this.items = _this.scroll.scroller.content.children;
            _this.checkWheelAllDisabled();
            _this.itemHeight =
                _this.items.length > 0
                    ? scrollBehaviorY.contentSize / _this.items.length
                    : 0;
            boundary.maxScrollPos = -_this.itemHeight * (_this.items.length - 1);
            boundary.minScrollPos = 0;
        });
        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.momentum, function (momentumInfo) {
            momentumInfo.rate = CONSTANTS.rate;
            momentumInfo.destination = _this.findNearestValidWheel(momentumInfo.destination).y;
        });
        scrollBehaviorY.hooks.on(scrollBehaviorY.hooks.eventTypes.end, function (momentumInfo) {
            var validWheel = _this.findNearestValidWheel(scrollBehaviorY.currentPos);
            momentumInfo.destination = validWheel.y;
            momentumInfo.duration = _this.options.adjustTime;
        });
        // Animater
        animater.hooks.on(animater.hooks.eventTypes.time, function (time) {
            _this.transitionDuration(time);
        });
        animater.hooks.on(animater.hooks.eventTypes.timeFunction, function (easing) {
            _this.timeFunction(easing);
        });
        // bs.stop() to make wheel stop at a correct position when pending
        animater.hooks.on(animater.hooks.eventTypes.callStop, function () {
            var index = _this.findNearestValidWheel(_this.scroll.y).index;
            _this.isAdjustingPosition = true;
            _this.wheelTo(index, 0);
        });
        // Translater
        animater.translater.hooks.on(animater.translater.hooks.eventTypes.translate, function (endPoint) {
            _this.rotateX(endPoint.y);
        });
    };
    Wheel.prototype.refreshBoundary = function () {
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY, content = _a.content;
        scrollBehaviorX.refresh(content);
        scrollBehaviorY.refresh(content);
    };
    Wheel.prototype.setSelectedIndex = function (index, contentChanged) {
        if (contentChanged === void 0) { contentChanged = false; }
        var prevSelectedIndex = this.selectedIndex;
        this.selectedIndex = index;
        // if content DOM changed, should not trigger event
        if (prevSelectedIndex !== index && !contentChanged) {
            this.scroll.trigger(WHEEL_INDEX_CHANGED_EVENT_NAME, index);
        }
    };
    Wheel.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    Wheel.prototype.wheelTo = function (index, time, ease) {
        if (index === void 0) { index = 0; }
        if (time === void 0) { time = 0; }
        var y = -index * this.itemHeight;
        this.scroll.scrollTo(0, y, time, ease);
    };
    Wheel.prototype.restorePosition = function () {
        // bs is scrolling
        var isPending = this.scroll.pending;
        if (isPending) {
            var selectedIndex = this.getSelectedIndex();
            this.scroll.scroller.animater.clearTimer();
            this.wheelTo(selectedIndex, 0);
        }
    };
    Wheel.prototype.transitionDuration = function (time) {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].style[style$1.transitionDuration] =
                time + 'ms';
        }
    };
    Wheel.prototype.timeFunction = function (easing) {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].style[style$1.transitionTimingFunction] = easing;
        }
    };
    Wheel.prototype.rotateX = function (y) {
        var _a = this.options.rotate, rotate = _a === void 0 ? 25 : _a;
        for (var i = 0; i < this.items.length; i++) {
            var deg = rotate * (y / this.itemHeight + i);
            // Too small value is invalid in some phones, issue 1026
            var SafeDeg = deg.toFixed(3);
            this.items[i].style[style$1.transform] = "rotateX(" + SafeDeg + "deg)";
        }
    };
    Wheel.prototype.findNearestValidWheel = function (y) {
        y = y > 0 ? 0 : y < this.scroll.maxScrollY ? this.scroll.maxScrollY : y;
        var currentIndex = Math.abs(Math.round(-y / this.itemHeight));
        var cacheIndex = currentIndex;
        var items = this.items;
        var wheelDisabledItemClassName = this.options
            .wheelDisabledItemClass;
        // implement web native select element
        // first, check whether there is a enable item whose index is smaller than currentIndex
        // then, check whether there is a enable item whose index is bigger than currentIndex
        // otherwise, there are all disabled items, just keep currentIndex unchange
        while (currentIndex >= 0) {
            if (!hasClass(items[currentIndex], wheelDisabledItemClassName)) {
                break;
            }
            currentIndex--;
        }
        if (currentIndex < 0) {
            currentIndex = cacheIndex;
            while (currentIndex <= items.length - 1) {
                if (!hasClass(items[currentIndex], wheelDisabledItemClassName)) {
                    break;
                }
                currentIndex++;
            }
        }
        // keep it unchange when all the items are disabled
        if (currentIndex === items.length) {
            currentIndex = cacheIndex;
        }
        // when all the items are disabled, selectedIndex should always be -1
        return {
            index: this.wheelItemsAllDisabled ? -1 : currentIndex,
            y: -currentIndex * this.itemHeight
        };
    };
    Wheel.prototype.checkWheelAllDisabled = function () {
        var wheelDisabledItemClassName = this.options.wheelDisabledItemClass;
        var items = this.items;
        this.wheelItemsAllDisabled = true;
        for (var i = 0; i < items.length; i++) {
            if (!hasClass(items[i], wheelDisabledItemClassName)) {
                this.wheelItemsAllDisabled = false;
                break;
            }
        }
    };
    Wheel.pluginName = 'wheel';
    return Wheel;
}());

/*!
 * better-scroll / mouse-wheel
 * (c) 2016-2023 ustbhuangyi
 * Released under the MIT License.
 */
function warn$1(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser$2 = typeof window !== 'undefined';
var ua$2 = inBrowser$2 && navigator.userAgent.toLowerCase();
!!(ua$2 && /wechatdevtools/.test(ua$2));
ua$2 && ua$2.indexOf('android') > 0;
/* istanbul ignore next */
((function () {
    if (typeof ua$2 === 'string') {
        var regex = /os (\d\d?_\d(_\d)?)/;
        var matches = regex.exec(ua$2);
        if (!matches)
            return false;
        var parts = matches[1].split('_').map(function (item) {
            return parseInt(item, 10);
        });
        // ios version >= 13.4 issue 982
        return !!(parts[0] === 13 && parts[1] >= 4);
    }
    return false;
}))();
/* istanbul ignore next */
var supportsPassive$2 = false;
/* istanbul ignore next */
if (inBrowser$2) {
    var EventName$2 = 'test-passive';
    try {
        var opts$2 = {};
        Object.defineProperty(opts$2, 'passive', {
            get: function () {
                supportsPassive$2 = true;
            },
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener(EventName$2, function () { }, opts$2);
    }
    catch (e) { }
}

var extend$2 = function (target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};

var elementStyle$2 = (inBrowser$2 &&
    document.createElement('div').style);
var vendor$2 = (function () {
    /* istanbul ignore if  */
    if (!inBrowser$2) {
        return false;
    }
    var transformNames = [
        {
            key: 'standard',
            value: 'transform',
        },
        {
            key: 'webkit',
            value: 'webkitTransform',
        },
        {
            key: 'Moz',
            value: 'MozTransform',
        },
        {
            key: 'O',
            value: 'OTransform',
        },
        {
            key: 'ms',
            value: 'msTransform',
        },
    ];
    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
        var obj = transformNames_1[_i];
        if (elementStyle$2[obj.value] !== undefined) {
            return obj.key;
        }
    }
    /* istanbul ignore next  */
    return false;
})();
/* istanbul ignore next  */
function prefixStyle$2(style) {
    if (vendor$2 === false) {
        return style;
    }
    if (vendor$2 === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor$2 + style.charAt(0).toUpperCase() + style.substr(1);
}
function addEvent$1(el, type, fn, capture) {
    var useCapture = supportsPassive$2
        ? {
            passive: false,
            capture: !!capture,
        }
        : !!capture;
    el.addEventListener(type, fn, useCapture);
}
function removeEvent$1(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture,
    });
}
function maybePrevent$1(e) {
    if (e.cancelable) {
        e.preventDefault();
    }
}
vendor$2 && vendor$2 !== 'standard' ? '-' + vendor$2.toLowerCase() + '-' : '';
var transform$2 = prefixStyle$2('transform');
var transition$2 = prefixStyle$2('transition');
inBrowser$2 && prefixStyle$2('perspective') in elementStyle$2;
({
    transform: transform$2,
    transition: transition$2,
    transitionTimingFunction: prefixStyle$2('transitionTimingFunction'),
    transitionDuration: prefixStyle$2('transitionDuration'),
    transitionDelay: prefixStyle$2('transitionDelay'),
    transformOrigin: prefixStyle$2('transformOrigin'),
    transitionEnd: prefixStyle$2('transitionEnd'),
    transitionProperty: prefixStyle$2('transitionProperty'),
});
function preventDefaultExceptionFn$1(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}

var EventRegister$1 = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent$1);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent$1);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var MouseWheel = /** @class */ (function () {
    function MouseWheel(scroll) {
        this.scroll = scroll;
        this.wheelEndTimer = 0;
        this.wheelMoveTimer = 0;
        this.wheelStart = false;
        this.init();
    }
    MouseWheel.prototype.init = function () {
        this.handleBScroll();
        this.handleOptions();
        this.handleHooks();
        this.registerEvent();
    };
    MouseWheel.prototype.handleBScroll = function () {
        this.scroll.registerType([
            'alterOptions',
            'mousewheelStart',
            'mousewheelMove',
            'mousewheelEnd',
        ]);
    };
    MouseWheel.prototype.handleOptions = function () {
        var userOptions = (this.scroll.options.mouseWheel === true
            ? {}
            : this.scroll.options.mouseWheel);
        var defaultOptions = {
            speed: 20,
            invert: false,
            easeTime: 300,
            discreteTime: 400,
            throttleTime: 0,
            dampingFactor: 0.1,
        };
        this.mouseWheelOpt = extend$2(defaultOptions, userOptions);
    };
    MouseWheel.prototype.handleHooks = function () {
        this.hooksFn = [];
        this.registerHooks(this.scroll.hooks, 'destroy', this.destroy);
    };
    MouseWheel.prototype.registerEvent = function () {
        this.eventRegister = new EventRegister$1(this.scroll.scroller.wrapper, [
            {
                name: 'wheel',
                handler: this.wheelHandler.bind(this),
            },
            {
                name: 'mousewheel',
                handler: this.wheelHandler.bind(this),
            },
            {
                name: 'DOMMouseScroll',
                handler: this.wheelHandler.bind(this),
            },
        ]);
    };
    MouseWheel.prototype.registerHooks = function (hooks, name, handler) {
        hooks.on(name, handler, this);
        this.hooksFn.push([hooks, name, handler]);
    };
    MouseWheel.prototype.wheelHandler = function (e) {
        if (!this.scroll.enabled) {
            return;
        }
        this.beforeHandler(e);
        // start
        if (!this.wheelStart) {
            this.wheelStartHandler(e);
            this.wheelStart = true;
        }
        // move
        var delta = this.getWheelDelta(e);
        this.wheelMoveHandler(delta);
        // end
        this.wheelEndDetector(delta);
    };
    MouseWheel.prototype.wheelStartHandler = function (e) {
        this.cleanCache();
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY;
        scrollBehaviorX.setMovingDirection(0 /* Default */);
        scrollBehaviorY.setMovingDirection(0 /* Default */);
        scrollBehaviorX.setDirection(0 /* Default */);
        scrollBehaviorY.setDirection(0 /* Default */);
        this.scroll.trigger(this.scroll.eventTypes.alterOptions, this.mouseWheelOpt);
        this.scroll.trigger(this.scroll.eventTypes.mousewheelStart);
    };
    MouseWheel.prototype.cleanCache = function () {
        this.deltaCache = [];
    };
    MouseWheel.prototype.wheelMoveHandler = function (delta) {
        var _this = this;
        var _a = this.mouseWheelOpt, throttleTime = _a.throttleTime, dampingFactor = _a.dampingFactor;
        if (throttleTime && this.wheelMoveTimer) {
            this.deltaCache.push(delta);
        }
        else {
            var cachedDelta = this.deltaCache.reduce(function (prev, current) {
                return {
                    x: prev.x + current.x,
                    y: prev.y + current.y,
                };
            }, { x: 0, y: 0 });
            this.cleanCache();
            var _b = this.scroll.scroller, scrollBehaviorX = _b.scrollBehaviorX, scrollBehaviorY = _b.scrollBehaviorY;
            scrollBehaviorX.setMovingDirection(-delta.directionX);
            scrollBehaviorY.setMovingDirection(-delta.directionY);
            scrollBehaviorX.setDirection(delta.x);
            scrollBehaviorY.setDirection(delta.y);
            // when out of boundary, perform a damping scroll
            var newX = scrollBehaviorX.performDampingAlgorithm(Math.round(delta.x) + cachedDelta.x, dampingFactor);
            var newY = scrollBehaviorY.performDampingAlgorithm(Math.round(delta.y) + cachedDelta.x, dampingFactor);
            if (!this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
                x: newX,
                y: newY,
            })) {
                var easeTime = this.getEaseTime();
                if (newX !== this.scroll.x || newY !== this.scroll.y) {
                    this.scroll.scrollTo(newX, newY, easeTime);
                }
            }
            if (throttleTime) {
                this.wheelMoveTimer = window.setTimeout(function () {
                    _this.wheelMoveTimer = 0;
                }, throttleTime);
            }
        }
    };
    MouseWheel.prototype.wheelEndDetector = function (delta) {
        var _this = this;
        window.clearTimeout(this.wheelEndTimer);
        this.wheelEndTimer = window.setTimeout(function () {
            _this.wheelStart = false;
            window.clearTimeout(_this.wheelMoveTimer);
            _this.wheelMoveTimer = 0;
            _this.scroll.trigger(_this.scroll.eventTypes.mousewheelEnd, delta);
        }, this.mouseWheelOpt.discreteTime);
    };
    MouseWheel.prototype.getWheelDelta = function (e) {
        var _a = this.mouseWheelOpt, speed = _a.speed, invert = _a.invert;
        var wheelDeltaX = 0;
        var wheelDeltaY = 0;
        var direction = invert ? -1 /* Negative */ : 1 /* Positive */;
        switch (true) {
            case 'deltaX' in e:
                if (e.deltaMode === 1) {
                    wheelDeltaX = -e.deltaX * speed;
                    wheelDeltaY = -e.deltaY * speed;
                }
                else {
                    wheelDeltaX = -e.deltaX;
                    wheelDeltaY = -e.deltaY;
                }
                break;
            case 'wheelDeltaX' in e:
                wheelDeltaX = (e.wheelDeltaX / 120) * speed;
                wheelDeltaY = (e.wheelDeltaY / 120) * speed;
                break;
            case 'wheelDelta' in e:
                wheelDeltaX = wheelDeltaY = (e.wheelDelta / 120) * speed;
                break;
            case 'detail' in e:
                wheelDeltaX = wheelDeltaY = (-e.detail / 3) * speed;
                break;
        }
        wheelDeltaX *= direction;
        wheelDeltaY *= direction;
        if (!this.scroll.hasVerticalScroll) {
            if (Math.abs(wheelDeltaY) > Math.abs(wheelDeltaX)) {
                wheelDeltaX = wheelDeltaY;
            }
            wheelDeltaY = 0;
        }
        if (!this.scroll.hasHorizontalScroll) {
            wheelDeltaX = 0;
        }
        var directionX = wheelDeltaX > 0
            ? -1 /* Negative */
            : wheelDeltaX < 0
                ? 1 /* Positive */
                : 0 /* Default */;
        var directionY = wheelDeltaY > 0
            ? -1 /* Negative */
            : wheelDeltaY < 0
                ? 1 /* Positive */
                : 0 /* Default */;
        return {
            x: wheelDeltaX,
            y: wheelDeltaY,
            directionX: directionX,
            directionY: directionY,
        };
    };
    MouseWheel.prototype.beforeHandler = function (e) {
        var _a = this.scroll.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        if (preventDefault &&
            !preventDefaultExceptionFn$1(e.target, preventDefaultException)) {
            maybePrevent$1(e);
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    MouseWheel.prototype.getEaseTime = function () {
        var SAFE_EASETIME = 100;
        var easeTime = this.mouseWheelOpt.easeTime;
        // scrollEnd event will be triggered in every calling of scrollTo when easeTime is too small
        // easeTime needs to be greater than 100
        if (easeTime < SAFE_EASETIME) {
            warn$1("easeTime should be greater than 100." +
                "If mouseWheel easeTime is too small," +
                "scrollEnd will be triggered many times.");
        }
        return Math.max(easeTime, SAFE_EASETIME);
    };
    MouseWheel.prototype.destroy = function () {
        this.eventRegister.destroy();
        window.clearTimeout(this.wheelEndTimer);
        window.clearTimeout(this.wheelMoveTimer);
        this.hooksFn.forEach(function (item) {
            var hooks = item[0];
            var hooksName = item[1];
            var handlerFn = item[2];
            hooks.off(hooksName, handlerFn);
        });
    };
    MouseWheel.pluginName = 'mouseWheel';
    MouseWheel.applyOrder = "pre" /* Pre */;
    return MouseWheel;
}());

var version = "3.1.3";

BScroll.use(Wheel);
BScroll.use(MouseWheel);

var $ = function $(selector, flag) {
  if (typeof selector != 'string' && selector.nodeType) {
    return selector;
  }

  return flag ? document.querySelectorAll(selector) : document.querySelector(selector);
};

function Rolldate() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _this = this,
      el = void 0;

  _this.extend(config);
  if (config.el) {
    el = $(config.el);

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
        beginYear: 1900,
        endYear: 2100,
        min: null,
        max: null,
        init: null,
        moveEnd: null,
        confirm: null,
        cancel: null,
        minStep: 1,
        trigger: 'tap',
        lang: { title: '選擇日期', cancel: '取消', confirm: '確認', year: '年', month: '月', day: '日', hour: '時', min: '分', sec: '秒' }
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
        date = config.el ? $(config.el).bindDate || new Date() : _this.bindDate || new Date(),
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
        var day = _this.getMonthlyDay(date.getFullYear(), date.getMonth() + 1);
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

    box.className = 'rolldate-container';
    box.innerHTML = $html;
    document.body.appendChild(box);

    _this.scroll = {};

    var _loop = function _loop(_i) {
      var $id = domId[FormatArr[_i]];

      _this.scroll[FormatArr[_i]] = new BScroll('#' + $id, {
        disableMouse: false,
        disableTouch: false,
        wheel: {
          selectedIndex: 0
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      });

      var that = _this.scroll[FormatArr[_i]],
          active = $('#' + $id + ' .active'),
          index = active ? active.getAttribute('data-index') : Math.round(date.getMinutes() / config.minStep);

      that.wheelTo(index);
      // 滚动结束
      that.on('scrollEnd', function () {
        var _this$getSelectedDate = _this.getSelectedDate(),
            date = _this$getSelectedDate.date;

        if (_this.config.min && new Date(date) - new Date(_this.config.min) < 0) {
          _this.scrollToDateTime(_this.config.min);
        }
        if (_this.config.max && new Date(date) - new Date(_this.config.max) > 0) {
          _this.scrollToDateTime(_this.config.max);
        }
        if ([domId['YYYY'], domId['MM']].indexOf(that.wrapper.id) != -1 && _this.scroll['YYYY'] && _this.scroll['MM'] && _this.scroll['DD']) {
          var _day = _this.getMonthlyDay(_this.getSelected(_this.scroll['YYYY']), _this.getSelected(_this.scroll['MM'])),
              li = '';

          if (_day != $('#' + domId['DD'] + ' li', 1).length) {
            for (var _l = 1; _l <= _day; _l++) {
              li += '<li class="wheel-item">' + (_l < 10 ? '0' + _l : _l) + lang.day + '</li>';
            }
            $('#' + domId['DD'] + ' ul').innerHTML = li;
            _this.scroll['DD'].refresh();
          }
        }
        if (config.moveEnd) {
          config.moveEnd.call(_this, that);
        }
      });
    };

    for (var _i = 0; _i < len; _i++) {
      _loop(_i);
    }
    $('.rolldate-panel').className = 'rolldate-panel fadeIn';
  },
  scrollToDateTime: function scrollToDateTime(dateTime) {
    var date = new Date(dateTime);
    if (this.scroll['YYYY']) {
      this.scroll['YYYY'].wheelTo(date.getFullYear() - this.config.beginYear);
    }
    if (this.scroll['MM']) {
      this.scroll['MM'].wheelTo(date.getMonth());
    }
    if (this.scroll['DD']) {
      this.scroll['DD'].wheelTo(date.getDate() - 1);
    }
    if (this.scroll['hh']) {
      this.scroll['hh'].wheelTo(date.getHours());
    }
    if (this.scroll['mm']) {
      this.scroll['mm'].wheelTo(date.getMinutes());
    }
    if (this.scroll['ss']) {
      this.scroll['ss'].wheelTo(date.getSeconds());
    }
  },
  tap: function tap(el, fn) {
    var _this = this,
        hasTouch = "ontouchstart" in window;

    if (hasTouch && _this.config.trigger == 'tap') {
      var o = {},
          touchstart = function touchstart(e) {
        var t = e.touches[0];

        o.startX = t.pageX;
        o.startY = t.pageY;
        o.sTime = +new Date();
      },
          touchend = function touchend(e) {
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
      };

      if (typeof fn == 'function') {
        el.addEventListener('touchstart', touchstart);
        el.addEventListener('touchend', touchend);
      } else {
        el.removeEventListener('touchstart', touchstart);
        el.removeEventListener('touchend', touchend);
      }
    } else {
      var click = function click(e) {
        fn.call(this, e);
      };
      if (typeof fn == 'function') {
        el.addEventListener('click', click);
      } else {
        el.removeEventListener('click', click);
      }
    }
  },
  show: function show() {
    var _this = this,
        config = _this.config,
        el = void 0;

    if (config.el) {
      el = $(config.el);

      if (!el.bindRolldate) {
        return;
      }
      if (el.nodeName.toLowerCase() == 'input') {
        el.blur();
      }
    }
    if ($('.rolldate-container')) {
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
        el = $('.rolldate-panel.fadeIn');

    if (el) {
      el.className = 'rolldate-panel fadeOut';
      _this.destroy(flag);
    }
  },
  event: function event() {
    var _this = this,
        mask = $('.rolldate-mask'),
        cancel = $('.rolldate-cancel'),
        confirm = $('.rolldate-confirm');

    _this.tap(mask, function () {
      _this.hide(1);
    });
    _this.tap(cancel, function () {
      _this.hide(1);
    });
    _this.tap(confirm, function () {
      var config = _this.config,
          el = void 0;

      var _this$getSelectedDate2 = _this.getSelectedDate(),
          date = _this$getSelectedDate2.date,
          newDate = _this$getSelectedDate2.newDate;

      if (config.confirm) {
        var flag = config.confirm.call(_this, date);
        if (flag === false) {
          return false;
        } else if (flag) {
          date = flag;
        }
      }
      if (config.el) {
        el = $(config.el);
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
  getSelectedDate: function getSelectedDate() {
    var date = this.config.format,
        newDate = new Date();

    for (var f in this.scroll) {
      var d = this.getSelected(this.scroll[f]);

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
    return { date: date, newDate: newDate };
  },
  getMonthlyDay: function getMonthlyDay(year, month) {
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

    _this.tap($('.rolldate-mask'), 0);
    _this.tap($('.rolldate-cancel'), 0);
    _this.tap($('.rolldate-confirm'), 0);
    setTimeout(function () {
      var el = $('.rolldate-container');

      if (el) document.body.removeChild(el);
      el = null;
    }, 300);
  },
  getSelected: function getSelected(scroll) {
    return $('#' + scroll.wrapper.id + ' li', 1)[scroll.getSelectedIndex()].innerText.replace(/\D/g, '');
  }
};
Rolldate.version = version;

module.exports = Rolldate;
