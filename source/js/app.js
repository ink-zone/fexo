(function() {
  'use strict';

  var $body = document.body;
  var $toc = $('#toc');
  var $backTop = $('#backTop');

  // toc and backTop
  $(document).on('scroll', function() {
    var scrollTop = $body.scrollTop;
    scrollTop > 200 ? $toc.addClass('fixed') : $toc.removeClass('fixed');

    scrollTop > 10 ? $backTop.addClass('show') : $backTop.removeClass('show');
  })


  // back top
  $backTop.on('click', function() {

    console.log(11);
    $('body').animate({scrollTop: 0}, 'slow');
  })

}());
