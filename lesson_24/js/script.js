"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", documentActions);

function documentActions(e) {
  const elementTarget = e.target;

  if (elementTarget.closest(".item") && e.type === "click") {
    const currentElement = elementTarget.closest(".item");
    currentElement.classList.toggle("active");
    if (currentElement.classList.contains("active")) {
      currentElement.textContent = "Click me one more!";
    } else {
      currentElement.textContent = "Click me!";
    }
  }
}

/////////////////////////////////////////////

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  document.body.classList.add("loaded");
}

/////////////////////////////////////////////

// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

if (header && footer) {
  header.addEventListener("mouseenter", headerMouseenter);
  header.addEventListener("mouseleave", headerMouseleave);
  function headerMouseenter() {
    footer.style.backgroundColor = "#019901";
  }
  function headerMouseleave() {
    footer.style.backgroundColor = "#0097b2";
  }
}

/////////////////////////////////////////////

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка
// збільшується на одиницю: 1 2 3 ... і т.д. Затримка між зміною числа, та до якого числа має працювати
// інтервал має задаватись в дата атрибутах елемента item. Функція має запускатить коли ми доскролюємо
// до елементу item (його видно), і не запускатись повторно.

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // item.setAttribute("data-number", "5");
    const number = parseInt(item.dataset.number);
    // item.setAttribute("data-delay", "1000");
    const delay = parseInt(item.dataset.delay);
    const currentElement = entry.target;
    if (entry.isIntersecting) {
      let i = 1;
      let timer = setInterval(() => {
        currentElement.textContent = `${i}`;
        i === number ? clearInterval(timer) : null;
        ++i;
      }, delay);
      observer.unobserve(currentElement);
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const item = document.querySelector(".test-item");
if (item) {
  observer.observe(item);
}

/////////////////////////////////////////////
// Практика матеріалу
/////////////////////////////////////////////
// Подія "click" на перший знайдений елемент з класом ".button"

// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   button.style.backgroundColor = "yellow";
// });

// button.addEventListener("click", buttonStyle);
// function buttonStyle() {
//   button.style.backgroundColor = "yellow";
// }

/////////////////////////////////////////////
// Подія "click" на всі елементи з класом ".button"

// const buttons = document.querySelectorAll(".button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = "yellow";
//   });
// });

/////////////////////////////////////////////
// Основний спосіб навісити подію!

// document.addEventListener("click", documentActions);
// document.addEventListener("mousemove", documentActions);

// function documentActions(e) {
//   const elementTarget = e.target;

//   if (elementTarget.closest(".button") && e.type === "click") {
//     const currentElement = elementTarget.closest(".button");
//     currentElement.classList.toggle("active");
//   }
//   if (elementTarget.closest(".link") && e.type === "click") {
//     const currentElement = elementTarget.closest(".link");
//     currentElement.classList.toggle("active");
//   }
//   if (elementTarget.closest(".circle") && e.type === "mousemove") {
//     const currentElement = elementTarget.closest(".circle");
//     currentElement.style.backgroundColor = "yellow";
//   }

//   e.preventDefault();
// }

/////////////////////////////////////////////
// Подія при скролі

// const circle = document.querySelector(".circle");
// window.addEventListener("scroll", windowScroll);

// function windowScroll(e) {
//   if (circle.getBoundingClientRect().top - window.innerHeight <= 0) {
//     console.log("Видно!");
//   }
// }

/////////////////////////////////////////////
//Intersection Observer API

// const options = {
//   root: null,
//   rootMargin: "0px 0px 0px 0px",
//   // Відсоток від розміру об'єкту.
//   // При появі якого спрацьовує подія
//   // Де 0 це будь яка поява
//   // 100 це повна поява об'кта в в'юпорті
//   threshold: 0.2,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const currentElement = entry.target;
//     if (entry.isIntersecting) {
//       currentElement.classList.add("animate");
//       // console.log("я тебе бачу");
//     } else {
//       currentElement.classList.remove("animate");
//       // console.log("я тебе не бачу");
//     }
//   });
// };

// Стежить за елементами з потрібний класом
// const observer = new IntersectionObserver(callback, options);
// const animElements = document.querySelectorAll('[class*="--anim"]');
// animElements.forEach((animElement) => {
//   observer.observe(animElement);
// });

/////////////////////////////////////////////
// Виклик функції з інтервалом через затримку

// function clock() {
//   let i = 1;
//   let timer = setInterval(() => {
//     console.log(i);
//     i === 5 ? clearInterval(timer) : null;
//     ++i;
//   }, 1000);
// }

// setTimeout(() => {
//   clock();
// }, 4000);

/////////////////////////////////////////////
