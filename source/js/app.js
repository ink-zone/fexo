(function() {
  'use strict';

  var body = document.body;

  // toc
  $(document).on('scroll', function () {
    body.scrollTop > 200 ? $('#toc').addClass('fixed'): $('#toc').removeClass('fixed')
  })

}());
