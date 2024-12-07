window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 75) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const slider = document.getElementById("slider");
let isMoving = false;
function moveLeft() {
  if (isMoving) return;
  isMoving = true;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = "translateX(275px)";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    slider.style.transform = "translateX(0)";
    isMoving = false;
  }, 1000);
}
function moveRight() {
  if (isMoving) return;
  isMoving = true;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = "translateX(-275px)";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.appendChild(slider.firstElementChild);
    slider.style.transform = "translateX(0)";
    isMoving = false;
  }, 1000);
}

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const faqItem = header.parentElement;
    const faqSection = document.querySelector(".faq-section");

    // Закрываем все активные элементы
    document.querySelectorAll(".faq-item.active").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // Переключаем состояние текущего элемента
    faqItem.classList.toggle("active");

    // Добавляем небольшую задержку для синхронизации с анимацией контента
    setTimeout(() => {
      if (document.querySelector(".faq-item.active")) {
        faqSection.style.setProperty("--faq-height", "192vh");
      } else {
        faqSection.style.setProperty("--faq-height", "125vh");
      }
    }, 50);
  });
});
