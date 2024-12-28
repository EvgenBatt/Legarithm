$(".team-slider").slick({
  mobileFirst: true,
});

$(".team-slider-prev").on("click", function () {
  $(".team-slider").slick("slickPrev");
});

$(".team-slider-next").on("click", function () {
  $(".team-slider").slick("slickNext");
});
