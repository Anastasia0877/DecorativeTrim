$(document).ready(function(){
    $('.technology__slider').slick({
        fade: true,
        cssEase: 'linear',
        appendArrows:".technology__slider-arrow"
    });
  });

  $('.our-works__main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.our-works__second-slider',
    appendArrows:".our-works__slider-arrow"
  });
  $('.our-works__second-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.our-works__main-slider',
    centerMode: true,
    focusOnSelect: true
    
  });