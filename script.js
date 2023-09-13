/* global $ */

// ハンバーガーメニュー
$(function() {
  $('.nav-list li a').on('click', function(event) {
    $('#drawer_input').prop('checked', false);
  });
});

