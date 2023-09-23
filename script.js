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

// スクロール量が1000pxを超えた際にページ上部へのボタンを表示
$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    if(scroll >= 1000){
        $('.fixed_btn').toggleClass('show').removeClass('hide');
    }else{
        $('.fixed_btn').addClass('hide').removeClass('show');
    }
});


// アコーディオン開閉
$(function() {
    $('#more').on('click', function() {
        $('.blog-cart:nth-child(n + 4)').toggleClass('show').toggleClass('hide');
        $('#more').toggleClass('none');
        $('#close').toggleClass('none');
        $('.blog-cart:nth-child(3)').attr('style', 'margin-bottom: 48px;');
    });

    $('#close').on('click', function() {
        $('.blog-cart:nth-child(n + 4) ').toggleClass('hide').toggleClass('show');
        $('#more').toggleClass('none'); 
        $('#close').toggleClass('none');
    });
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

// モーダル表示
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


// スライダー
$(function(){
  $('.slider').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    centerMode: true,
    variableWidth: true,
    dots: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
  


 