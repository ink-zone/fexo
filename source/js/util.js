var Util = {
  bind: function(element, name, listener) {
    element.addEventListener(name, listener, false);
  },

  addClass: function(element, className) {
    var classes = element.className ? element.className.split(' ') : [];
    if (classes.indexOf(className) < 0) {
      classes.push(className);
    }

    element.className = classes.join(' ');
    return element;
  },

  removeClass: function(element, className) {
    var classes = element.className ? element.className.split(' ') : [];
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }

    element.className = classes.join(' ');
    return element;
  },

  request: function(type, url, opts, callback) {
    var xhr = new XMLHttpRequest();
    if (typeof opts === 'function') {
      callback = opts;
      opts = null;
    }

    xhr.open(type, url);
    var fd = new FormData();
    if (type === 'POST' && opts) {
      for (var key in opts) {
        fd.append(key, JSON.stringify(opts[key]));
      }
    }

    xhr.onload = function() {
      callback(JSON.parse(xhr.response));
    };

    xhr.send(opts ? fd : null);
  },

  css: function(element, styleNameOrObject, styleValue) {
    if (typeof styleNameOrObject === 'object') {
      return setMultiCss(element, styleNameOrObject);
    } else {
      if (typeof styleValue === 'undefined') {
        return getCss(element, styleNameOrObject);
      } else {
        return setSingleCss(element, styleNameOrObject, styleValue);
      }
    }
  }

};

function getCss(element, styleName) {
  var styleValue = window.getComputedStyle(element)[styleName];
  if (parseInt(styleValue, 10) || parseInt(styleValue, 10) === 0) {
    styleValue = parseInt(styleValue, 10);
  }

  return styleValue;
}

function setSingleCss(element, styleName, styleValue) {
  if (typeof styleValue === 'number') {
    styleValue = styleValue.toString() + 'px';
  }

  element.style[styleName] = styleValue;
  return element;
}

function setMultiCss(element, obj) {
  for (var key in obj) {
    var styleValue = obj[key];
    if (typeof styleValue === 'number') {
      styleValue = styleValue.toString() + 'px';
    }

    element.style[key] = styleValue;
  }

  return element;
}
