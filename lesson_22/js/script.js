"use strict";

// // let result = 5 == "5";
// // let result = 5 === "5";
// // let result = 5 !== "5";
// // let result = 5 != "5";

// // let result = !true;
// // let result = !0;
// // let result = !25;
// // let result = !"";
// // let result = !" ";

// // let result = "" || "Vlad";
// // let result = "Vlad" && "";

// // console.log(typeof result);
// // console.log(result);

// ///////////////////////////////////////

// let userAge = 17;

// // if (userAge >= 18) {
// //   console.log("Adult");
// // } else if (userAge < 18 && userAge >= 12) {
// //   console.log("Teenager");
// // } else {
// //   console.log("Child");
// // }

// let result =
//   userAge >= 18
//     ? console.log("Adult")
//     : userAge < 18 && userAge >= 12
//     ? console.log("Teenager")
//     : console.log("Child");

// ///////////////////////////////////////

// let someString = "Hi, world!";

// for (let i = 0; i < someString.length; i++) {
//   console.log(someString[i]);
// }

// //////////////////////////////////////

// let someArray = ["BMW", "Mercedez", "Audi"];

// console.log(Array.isArray(someArray));
// console.log(someArray);

// someArray.forEach((index, item) => {
//   console.log(index);
//   console.log(item);
// });

// someArray.push("VW");
// console.log(someArray);

// if (!someArray.includes("VW")) {
//   someArray.push("VW");
// }

// console.log(someArray);

// if (!someArray.includes("Infinity")) {
//   someArray.push("Infinity");
// }

// console.log(someArray);

// !someArray.includes("Ford") ? someArray.push("Ford") : null;
// console.log(someArray);

/////////////////////////////////////

// const someObject = {
//   userName: "Vlad",
//   userAge: 25,
// };
// console.log(someObject);
// console.log(someObject.userName);
// console.log(someObject.userAge);

/////////////////////////////////////
// Задача 1

let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}

/////
// Задача 2

for (let i = 1; i < 11; i++) {
  console.log(`Пункт №${i}`);
}

/////
// Задача 3

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}

/////
// Задача 4

const division = (a, b) => {
  let result = a / b;
  if (result == "Infinity") {
    console.log("На 0 ділити не можна!");
  } else if (!result) {
    console.log(`Аргумент або аргументи введені не правильно!`);
  } else if (!Number.isInteger(result)) {
    console.log(`Результат ділення: ${result.toFixed(3)}`);
  } else {
    console.log(`Результат ділення: ${result}`);
  }
};

division();
division("");
division("someString");
division(0);
division(14, 2);
division(7, 6);
division(10, 0);

/////
// Задача 5

let someArray = ["Vlad", "Olga", 25, 10, 24];

someArray.forEach((element) => {
  if (element === 10) {
    console.log(element);
  }
});
