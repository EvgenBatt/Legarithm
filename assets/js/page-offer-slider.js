document.addEventListener("DOMContentLoaded", () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick", // Убираем слайдер на меньших экранах
      },
    ],
  };

  const initializeSlick = () => {
    if (window.innerWidth > 1024) {
      if (!$(".page-offer-list").hasClass("slick-initialized")) {
        $(".page-offer-list").slick(slickSettings);
      }
    } else {
      if ($(".page-offer-list").hasClass("slick-initialized")) {
        $(".page-offer-list").slick("unslick"); // Убираем слайдер
      }
    }
  };

  $(".page-offer-slider-prev").on("click", function () {
    $(".page-offer-list").slick("slickPrev");
  });

  $(".page-offer-slider-next").on("click", function () {
    $(".page-offer-list").slick("slickNext");
  });

  initializeSlick(); // Инициализация при загрузке

  window.addEventListener("resize", initializeSlick); // Перепроверяем при изменении размера окна
});
