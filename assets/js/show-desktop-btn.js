document.addEventListener("DOMContentLoaded", () => {
  const desktopBtn = document.querySelector(".desktop-btn");
  const offerSection = document.querySelector(".offer-text-wrap");
  let isButtonClicked = false;
  let isVisible = false;
  let lastScrollY = 0; // Для отслеживания изменений скролла

  function handleResize() {
    if (window.innerWidth < 1024) {
      desktopBtn.style.display = "none";
      isVisible = false;
    } else if (offerSection.getBoundingClientRect().top <= window.innerHeight && !isButtonClicked) {
      desktopBtn.style.display = "block";
      isVisible = true;
    }
  }

  function handleScroll() {
    if (window.innerWidth < 1024 || isButtonClicked) {
      desktopBtn.style.display = "none";
      isVisible = false;
      return;
    }

    const currentScrollY = window.scrollY;

    // Проверяем, изменилось ли положение скролла
    if (currentScrollY === lastScrollY) {
      return; // Ничего не делаем, если скролл не изменился
    }

    lastScrollY = currentScrollY; // Обновляем последнее положение скролла

    const sectionRect = offerSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionRect.top <= viewportHeight && sectionRect.bottom >= 0) {
      if (!isVisible) {
        desktopBtn.style.position = "fixed";
        desktopBtn.style.display = "block";
        isVisible = true;
      }
      let offset = Math.max(
        0,
        Math.min(viewportHeight - desktopBtn.offsetHeight, sectionRect.bottom - desktopBtn.offsetHeight)
      );
      desktopBtn.style.bottom = `${viewportHeight - offset}px`;
    } else if (isVisible) {
      desktopBtn.style.display = "none";
      isVisible = false;
    }
  }

  desktopBtn.addEventListener("click", () => {
    isButtonClicked = true;
    desktopBtn.style.display = "none";
    isVisible = false;
  });

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  handleResize();
  handleScroll();
});
