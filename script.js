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
      
      
      // $('label[for="name"]').before($('<span>').text('送信されました').addClass('send'));
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