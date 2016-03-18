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

  if (location.pathname === '/search/') {
    request('GET', '/search.json', function (data) {
      var $inputSearch = document.getElementById('input-search');
      bind($inputSearch, 'keyup', function () {
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);

        if (this.value.trim().length <= 0) {
          return;
        }

        var results = filterPosts(data, keywords);
        var $listSearch = document.getElementById('list-search');
        $listSearch.innerHTML = createInnerHTML(results);
      });

    });
  }

  ///////////////////
  function filterPosts(data, keywords) {
    var results = [];

    data.forEach(function (item) {
      var isMatch = false;
      var matchKeyWords = [];
      item.content = item.content.replace(/<[^>]*>/g, '');

      keywords.forEach(function (word) {
        var reg = new RegExp(word, 'i');
        var indexTitle = item.title.search(reg);
        var indexContent = item.content.search(reg);

        if (indexTitle > -1 || indexContent > -1) {
          isMatch = true;
          matchKeyWords.push(word);
        }
      });

      if (isMatch) {
        item.matchKeyWords = matchKeyWords;
        results.push(item);
      }
    });

    return results;
  }

  function createInnerHTML(results) {
    var content = '';
    results.forEach(function (item) {
      var postContent;
      postContent = highlightText(item.content, item.matchKeyWords);
      postContent = getPreviewContent(postContent, item.matchKeyWords);

      item.title = highlightText(item.title, item.matchKeyWords);

      item = '<li class="item">' +
        '<a href="' + item.url + '"" target="_blank">' +
        '<h3 class="title">' + item.title + '</h3>' +
        '</a>' +
        '<p class="post-content">' + postContent + '</h3>' +
        '</li>';
      content += item;
    });

    return content;
  }

  function getPreviewContent(content, matchKeyWords) {
    var isMatch = false;
    var index = 0;
    matchKeyWords.forEach(function (word) {
      var reg = new RegExp(word, 'i');
      index = content.search(reg);
      if (index < 0) {
        return;
      }

      isMatch = true;
    });

    if (isMatch) {
      if (index < 120) {
        content = content.substr(0, 140);
      } else {
        content = content.substr(index - 60, 200);
      }
    } else {
      content = content.substr(0, 120);
    }

    return content;
  }

  function highlightText(text, matchKeyWords) {
    text = text.replace(/<[^>]*>/g, '');
    matchKeyWords.forEach(function (word) {
      var reg = new RegExp('(' + word + ')', 'ig');
      text = text.replace(reg, '<span class="color-hightlight">$1</span>');
    });

    return text;
  }

  function request(type, url, opts, callback) {
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

    xhr.onload = function () {
      callback(JSON.parse(xhr.response));
    };

    xhr.send(opts ? fd : null);
  }

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
