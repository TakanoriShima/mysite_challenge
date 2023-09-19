/* global $ */
/* global location */

// ハンバーガーメニュー
$(function() {
  $('.nav-list li a').on('click', function(event) {
    $('#drawer_input').prop('checked', false);
  });
});

// 同一ページ内のスムーズスクロール
$(function(){
  
  $('a[href^="#"]').click(function(){
    let adjust = 0;
    let speed = 700;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// 別ページの場合のスムーズスクロール
$(function () {

  let urlHash = location.hash;
  if (urlHash) {
    $('body, html').stop().scrollTop(0);
    setTimeout(function(){
      let headerHight = 70;
      let target = $(urlHash);
      let position = target.offset().top - headerHight;
      $('body, html').stop().animate({scrollTop:position}, 800);
    }, 200);
  }
});

