function backToTop() {
  var button = $('.back-to-top');
  $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 200) {
          button.fadeIn();
      } else {
          button.fadeOut();
      }
  });
  button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({
          scrollTop: 0
      }, '100');
  })
}
backToTop();

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

  $(document).ready(function () {
    $('#phone').mask('+38(000)000-00-00');

});
var button = document.querySelector("#btn");
var input = document.querySelector('input[type=text]');
var input2 = document.querySelector('input[type=tel]');
button.addEventListener("click", function () {
    input.value = "";
    input2.value = "";
    alert('Данні успішно відправлені');
});


