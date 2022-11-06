$(function(){
  $('.gnb .gnb-item').mouseenter(function(e){
    $('.lnb-list').stop().fadeIn(300);
  });
  $('.gnb .gnb-item').mouseleave(function(e){
    $('.lnb-list').stop().fadeOut(300);
  });

  const visualSwiper = new Swiper('.sc-visual .swiper', {
    // autoplay: true,
    loop: true,
    pagination: {
      el: '.sc-visual .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-visual .swiper-button-prev',
      nextEl: '.sc-visual .swiper-button-next',
    },
  });
});