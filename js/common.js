$('.multiple-items').slick({
  dots: true,
  nextArrow: '<i class="fas fa-angle-right"></i>',
  prevArrow: '<i class="fas fa-angle-left"></i>',
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
  ]
});

$('.single-item').slick({
    speed: 1500,
    nextArrow: '<i class="fas fa-angle-right"></i>',
    prevArrow: '<i class="fas fa-angle-left"></i>',
    dots: true,
    responsive: [
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        dots: false
      }
    },
  ]
});

// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,
//     nav:true,
//     slideBy: 3,
//      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
//     dots: true,
//     smartSpeed: 500,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:3
//         }
//     }
//  });
// });

// $('.owl-carousel-one-item').owlCarousel({
//     loop:true,
//     items: 1,
//     nav:true,
//      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
//     dots: true,
//     smartSpeed: 1000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });


// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   dots: true,
//   arrows: true,
//   nextArrow: '<i class="fa fa-arrow-right"></i>',
//   prevArrow: '<i class="fa fa-arrow-left"></i>',
// });