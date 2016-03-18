(function () {
  'use strict';

  var $html = document.documentElement;
  var $body = document.body;
  var $toc = document.getElementById('toc');
  var $backTop = document.getElementById('backTop');
  var scrollTop = 0;

  (function init() {
    if ($backTop) {
      $body.scrollTop > 10 ? addClass($backTop, 'show') : removeClass($backTop, 'show');
    }
  }());

  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);

  // toc and backTop
  bind(window, 'scroll', function () {
    scrollTop = $body.scrollTop;
    if ($toc) {
      scrollTop > 200 ? addClass($toc, 'fixed') : removeClass($toc, 'fixed');
    }

    if ($backTop) {
      scrollTop > 10 ? addClass($backTop, 'show') : removeClass($backTop, 'show');
    }
  });

  if ($toc) {
    bind($backTop, 'click', function () {
      scroll('0', 400);
    });
  }

  ///////////////////
  function scroll(scrollTo, time) {
    var i = 0;
    var step = 5; // run every 5ms
    var times = time / step; //次数

    var id = setInterval(function () {
      i++;

      document.body.scrollTop = (scrollTo - scrollTop) / times * i + scrollTop;

      if (i >= time) {
        clearInterval(id);
      }
    }, step);
  }

  function bind(element, name, listener) {
    element.addEventListener(name, listener, false);
  }

  function addClass(element, className) {
    var classes = element.className ? element.className.split(' ') : [];
    if (classes.indexOf(className) < 0) {
      classes.push(className);
    }

    element.className = classes.join(' ');
    return element;
  }

  function removeClass(element, className) {
    var classes = element.className ? element.className.split(' ') : [];
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }

    element.className = classes.join(' ');
    return element;
  }

}());
