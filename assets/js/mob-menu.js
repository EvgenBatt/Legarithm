const mobileMenuButton = document.querySelector(".mob-menu-btn");
const mobileMenu = document.querySelector(".nav-menu");
const body = document.body;

mobileMenuButton.addEventListener("click", (event) => {
  if (window.innerWidth <= 1023) {
    event.stopPropagation();
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      body.style.overflowY = "auto";
    } else {
      mobileMenu.classList.add("active");
      mobileMenuButton.classList.add("active");
      body.style.overflowY = "hidden";
    }
  }
});

body.addEventListener("click", (event) => {
  if (window.innerWidth <= 1023) {
    if (!mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      body.style.overflowY = "auto";
    }
  }
});