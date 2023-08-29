/* global $ */
/* global location */

// ハンバーガーメニュー
$(function() {
  $('.nav-list li a').on('click', function(event) {
    $('#drawer_input').prop('checked', false);
  });
});

// スクロール量が1000pxを超えた際にページ上部へのボタンを表示
$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    if(scroll >= 1000){
        $('.fixed_btn').toggleClass('show').removeClass('hide');
    }else{
        $('.fixed_btn').addClass('hide').removeClass('show');
    }
});

// 入力ボックス入力中に背景色変更
$(function() {
    
    $('#name').attr('style', "background-color: #FFF");
    $('#email').attr('style', "background-color: #FFF");
    $('#content').attr('style', "background-color: #FFF");
    
    $('#name').on('input', function(){
        console.log('input');
        $('#name').attr('style', "background-color: #3160e014;border: solid 1px #888");
    });
    $('#email').on('input', function(){
        console.log('input');
        $('#email').attr('style', "background-color: #3160e014;border: solid 1px #888");
    });
    $('#content').on('input', function(){
        console.log('input');
        $('#content').attr('style', "background-color: #3160e014;border: solid 1px #888");
    });
    $('.modal_overlay').on('click', function(){
        $('#name').attr('style', "background-color: #FFF");
        $('#email').attr('style', "background-color: #FFF");
        $('#content').attr('style', "background-color: #FFF");
    });
});
   

// お問い合わせフォームの入力チェック
$(function() {
    $('button').on('click', function(){
        $('.error').remove();
        
        let name = $('#name').val();
        let email = $('#email').val();
        let content = $('#content').val();
;
        let flag = true;
        
        if(name == ''){
            $('label[for="name"]').append($('<span>').text('入力エラー').addClass('error'));
            flag = false;
        }
        if(email == ''){
            $('label[for="email"]').append($('<span>').text('入力エラー').addClass('error'));
            flag = false;
        }
        if(content == ''){
            $('label[for="content"]').append($('<span>').text('入力エラー').addClass('error'));
            flag = false;
        }
        
        if(flag){
            location.href = '../index.html';
        }
    });
});

