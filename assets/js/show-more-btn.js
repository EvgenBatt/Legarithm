document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".offer-item");
  const showMoreButton = document.querySelector(".show-more");
  let itemsToShow = 6; // Изначально показываем 6 элементов

  // Показываем первые 6 элементов
  items.forEach((item, index) => {
    if (index < itemsToShow) {
      item.classList.add("visible");
    }
  });

  // Обработчик клика на кнопку "Show more"
  showMoreButton.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.add("visible"); // Добавляем класс для показа элементов
    });

    // Скрываем кнопку после показа всех элементов
    setTimeout(() => {
      showMoreButton.style.display = "none";
    }, 300); // Ждем окончания анимации
  });
});