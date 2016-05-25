(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = function getOffsetRect(elem) {

  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docElem = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
};

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var scrollSpy = require('./scroll-spy');

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    window.scrollSpy = factory();
  }
})(function () {

  return scrollSpy;
});

},{"./scroll-spy":3}],3:[function(require,module,exports){
'use strict';

var getOffsetRect = require('./getOffsetRect');
var util = require('./util');
var $body = document.body;

module.exports = {
  init: function init(options) {
    var className = options.activeClassName || 'active';
    var scrollTarget = options.scrollTarget || document;
    var ary = Array.prototype.slice.call(options.nodeList);

    var items = getItems(ary);

    spy(items, className);

    util.bind(scrollTarget, 'scroll', function () {
      spy(items, className);
    });
  }
};

// //////////////////////
function getItems(ary) {
  var items = [];
  for (var i = 0, l = ary.length; i < l; i++) {
    var id = ary[i].hash.replace(/^#/, '');
    var $target = document.getElementById(id);
    var offset = getOffsetRect($target);
    var height = window.getComputedStyle(document.getElementById(id))['height'];
    items[i] = { height: parseInt(height), top: offset.top, elem: ary[i] };
  }

  return items;
}

function spy(items, className) {
  var find = 0;

  for (var i = 0, l = items.length; i < l; i++) {
    if ($body.scrollTop < items[i].top - items[i].height / 3) {
      find = i;
      break;
    }
  }

  for (var j = 0, _l = items.length; j < _l; j++) {
    util.removeClass(items[j].elem, className);
  }

  if (find > 0) {
    util.addClass(items[find - 1].elem, className);
  }
}

},{"./getOffsetRect":1,"./util":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  bind: function bind(element, name, listener) {
    element.addEventListener(name, listener, false);
  },

  addClass: function addClass(element, className) {
    var classes = element.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
    }

    element.className = classes.join(' ');
    return element;
  },

  removeClass: function removeClass(element, className) {
    var classes = element.className.split(' ');
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }

    element.className = classes.join(' ');
    return element;
  }
};

},{}]},{},[2]);
