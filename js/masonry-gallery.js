$(document).ready(function() {
		
		var $container = $(".masonry-container");
		$container.imagesLoaded(function () {
	 	$container.masonry({
	  	columnWidth: ".item",
	  	itemSelector: ".item"
		});
	});

$('#myModal').modal();
});

$('.gallery-carousel').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
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
        centerMode: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
  ]
});


