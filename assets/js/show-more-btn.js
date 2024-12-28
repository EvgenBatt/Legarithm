document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".offer-item");
  const desktopButton = document.querySelector(".desktop-btn");
  const mobileButton = document.querySelector(".mobile-btn");
  let itemsToShow = 6;

  const updateVisibleItems = () => {
    items.forEach((item, index) => {
      if (index < itemsToShow) {
        item.classList.add("visible");
      }
    });
  };

  const hideButtonIfAllVisible = () => {
    const totalItems = items.length;
    if (itemsToShow >= totalItems) {
      if (desktopButton) desktopButton.style.display = "none";
      if (mobileButton) mobileButton.style.display = "none";
    }
  };

  updateVisibleItems();
  hideButtonIfAllVisible();

  const showMoreHandler = () => {
    itemsToShow = items.length;
    updateVisibleItems();
    hideButtonIfAllVisible();
  };

  if (desktopButton) {
    desktopButton.addEventListener("click", showMoreHandler);
  }

  if (mobileButton) {
    mobileButton.addEventListener("click", showMoreHandler);
  }
});