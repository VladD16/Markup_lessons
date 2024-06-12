"use strict";

//Задача №1
//Отримати в константу елемент <body>

const bodyElement = document.body;
console.log(bodyElement);

/////////////////////////////////////////////////

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як
// параметр функції, також мати значення за замовченням)

const addUL = (a = 1) => {
  let newElement = document.createElement("ul");
  for (let i = 0; i < a; i++) {
    newElement.innerHTML += `<li></li>`;
    bodyElement.prepend(newElement);
  }
};

addUL(5);
console.log(bodyElement);
addUL();
console.log(bodyElement);

/////////////////////////////////////////////////

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

bodyElement.classList.add("loaded");

if (bodyElement.classList.contains("loaded")) {
  bodyElement.style.color = `green`;
}

/////////////////////////////////////////////////

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному
// додати клас active, та перезаписати контент всередені
// кожного елемента на "Елемент №(тут порядковий
// номер елементу починаючи з 1)".

const itemElements = document.querySelectorAll(".item");

if (itemElements.length) {
  itemElements.forEach((item, index) => {
    item.classList.add("active");
    item.innerHTML = `Елемент №${++index}`;
    console.log(item);
  });
}

/////////////////////////////////////////////////

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(".button");

function scrollToBlock(element) {
  const block = element.dataset.scroll;
  element.scrollIntoView({
    //"start", "center", "end". За замовчуванням "center".
    block: block,
    //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
    inline: "nearest",
    behavior: "smooth",
  });
}
scrollToBlock(button);

/////////////////////////////////////////////////

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector(".link");
link.setAttribute("data-width", "100");
const width = parseFloat(link.dataset.width);

if (width < 200) {
  link.style.color = "red";
}

/////////////////////////////////////////////////
