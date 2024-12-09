document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.createElement("div");
  burgerMenu.className = "burger-menu";
  burgerMenu.innerHTML = "<span></span><span></span><span></span>";

  const nav = document.querySelector(".header .nav");
  const container = document.querySelector(".header .container");

  // Вставляем бургер-меню перед nav
  container.insertBefore(burgerMenu, nav);

  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Закрываем меню при клике вне его
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
      burgerMenu.classList.remove("active");
      nav.classList.remove("active");
    }
  });
});

window.addEventListener("resize", function () {
  const nav = document.querySelector(".header .nav");
  const burgerMenu = document.querySelector(".burger-menu");

  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    if (burgerMenu) burgerMenu.classList.remove("active");
  }
});

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
      if (window.innerWidth <= 480) {
        if (document.querySelector(".faq-item.active")) {
          faqSection.style.setProperty("--faq-height", "357dvh");
        } else {
          faqSection.style.setProperty("--faq-height", "167dvh");
        }
      } else {
        if (document.querySelector(".faq-item.active")) {
          faqSection.style.setProperty("--faq-height", "106vh");
        } else {
          faqSection.style.setProperty("--faq-height", "82vh");
        }
      }
    }, 50);
  });
});
