/* Testimonials Slider */
$(".testimonials-slider").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});

$(".testimonials-slider-prev").on("click", function () {
  $(".testimonials-slider").slick("slickPrev");
});

$(".testimonials-slider-next").on("click", function () {
  $(".testimonials-slider").slick("slickNext");
});
