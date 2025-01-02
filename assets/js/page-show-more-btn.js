document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".page-offer-item");
    const mobileButton = document.querySelector(".mobile-btn");
    let itemsToShow = 6;
  
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        items.forEach((item) => item.classList.add("visible"));
        if (mobileButton) mobileButton.style.display = "none";
      } else {
        items.forEach((item, index) => {
          if (index < itemsToShow) {
            item.classList.add("visible");
          } else {
            item.classList.remove("visible");
          }
        });
      }
    };
  
    const hideButtonIfAllVisible = () => {
      const totalItems = items.length;
      if (itemsToShow >= totalItems || window.innerWidth >= 1024) {
        if (mobileButton) mobileButton.style.display = "none";
      } else {
        if (mobileButton) mobileButton.style.display = "block";
      }
    };
  
    updateVisibleItems();
    hideButtonIfAllVisible();
  
    const showMoreHandler = () => {
      itemsToShow = items.length;
      updateVisibleItems();
      hideButtonIfAllVisible();
    };
  
    if (mobileButton) {
      mobileButton.addEventListener("click", showMoreHandler);
    }
  
    window.addEventListener("resize", () => {
      updateVisibleItems();
      hideButtonIfAllVisible();
    });
  });