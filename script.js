/* global $ */

// モーダル
$(function(){
    const modal = $('.modal_content');
    const overlay = $('.modal_overlay');
    // 「閉じる」をクリックしたらモーダルを非表示
    $('.modal_delete').on('click', function(){
        modal.removeClass("open");
        overlay.removeClass("open");
    });
    // オーバーレイをクリックしたら非表示
    overlay.on('click', function(){
        modal.removeClass("open");
        overlay.removeClass("open");
    });
});


// 入力ボックス入力中
$(function() {
    
    $('#name').attr('style', "background-color: #FFF");
    $('#email').attr('style', "background-color: #FFF");
    $('content').attr('style', "background-color: #FFF");
    
    
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
});
   
// IE 9+
// $(function() {
// //   var $input = $('#input');
// //   var $output = $('#output');
//   $input.on('input', function(event) {

//   });
  
  
//   var $output2 = $('#output2');
//   $input.on('change', function(event) {
//   	$output2.text($input.val());
//   });
// });   
// お問い合わせフォームの入力チェック
$(function() {
    $('button').on('click', function(){
        $('.error').remove();
        // $('input[id="name"]').attr('placeholder', 'お名前を入力してください。').addClass('align-right');
        // $('.send').remove();
        
        let name = $('#name').val();
        console.log(name);
        let email = $('#email').val();
        console.log(email);
        let content = $('#content').val();
        console.log(content);
        
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
            $('#name').val('');
            $('#email').val('');
            $('#content').val('');
            console.log('送信');
            
            const modal = $('.modal_content');
            const overlay = $('.modal_overlay');
            
            modal.addClass("open");
            overlay.addClass("open");
        }
    });
});

// スクロール量が1000pxを超えた際にボタンを表示
$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll >= 1000){
        $('.fixed_btn').toggleClass('show').removeClass('hide');
    }else{
        $('.fixed_btn').addClass('hide').removeClass('show');
    }
});

// ハンバーガーメニュー用
$(function() {
  // console.log('OK');
  $('.nav-list li a').on('click', function(event) {
    // console.log('clicked');
    $('#drawer_input').prop('checked', false);
  });
});


// アコーディオン
$(function() {
  // console.log('OK');
  $('#more').on('click', function(event) {
    console.log('clicked');
    // $('#drawer_input').prop('checked', false);
    $('.blog-cart:nth-child(n + 4) ').toggleClass('none');
    $('#more').addClass('none');
    $('.blog-cart:nth-child(3)').attr('style', 'margin-bottom: 48px;')
  });
});
