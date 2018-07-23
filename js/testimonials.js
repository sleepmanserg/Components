// Testimonials carousel //

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });



 $('.sl').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.sl-2'
});
$('.sl-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl',
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});

 $('.sl3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.sl-4'
});
$('.sl-4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl3',
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});