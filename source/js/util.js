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
  }

};
