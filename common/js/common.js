// navi -------------------------------------------

(function($) {
	$(function() {
		var $header = $('.header');
		// Nav Fixed
		$(window).scroll(function() {
			if ($(window).scrollTop() > 350) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		});
		// Nav Toggle Button
		$('#navToggle').click(function(){
			$header.toggleClass('open');
		});
	});
})(jQuery);

// slick: keyVisual -------------------------------------------

$(document).ready(function(){
	$('.keyVisual__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 1, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		//variableWidth: true, // スライドの横幅をバラバラにする
		//centerMode: true, // 要素を中央寄せ
		//centerPadding: '20px', // centerMode:trueの時、左右のスライドを見せる幅
		responsive: [
			{
				breakpoint: 768,
				settings: {
				autoplay: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// slick: photo__slider -------------------------------------------
/*
$(document).ready(function(){
	$('.photo__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 1, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		arrows: false,
		adaptiveHeight: true,
	});
});*/

// slick: links__slider1 -------------------------------------------
/*
$(document).ready(function(){
	$('.links__slider1').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 3, // 表示するスライドの数
		slidesToScroll: 2, // 一度にスクロールするスライドの数
		//dots: true,
		responsive: [
			{
				breakpoint: 750,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});*/

// スムーススクロール -------------------------------------------

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// 移動先を取得
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// ページトップリンク -------------------------------------------

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// フッターメニュー Toggle -------------------------------------------
/*
$(function(){
	$(".footer__tgl--title").click(function(){
		$(this).next().slideToggle();
	});
});*/

// よくある質問 Toggle -------------------------------------------
/*
$(function(){
	$('.qanda__define dt').click(function(event) {
		$(this).next().slideToggle();
	});
});*/

