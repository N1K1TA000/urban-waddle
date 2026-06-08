"use strict";

console.log("Hello from external file!");

console.log("--- ЗМІННІ ТА ОБЛАСТІ ВИДИМОСТІ ---");

let age = 25;
const PI = 3.14;
var userNameGlobal = "John";

{ 
    let blockVar = "Я існую тільки у цьому блоці"; 
    console.log(blockVar);
} 

let counter = 10; 
counter++; 
console.log("Лічильник:", counter);


console.log("\n--- ТИПИ ДАНИХ ТА typeof ---");

console.log("typeof 42:", typeof 42);
console.log("typeof 'Hello':", typeof "Hello");
console.log("typeof true:", typeof true);
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof Symbol('id'):", typeof Symbol("id"));
console.log("typeof 9007199254740991n:", typeof 9007199254740991n);

// Перетворення типів
console.log("\n--- ПЕРЕТВОРЕННЯ ТИПІВ ---");
console.log("Number('123'):", Number("123"), "| Тип:", typeof Number("123")); 
console.log("String(123):", String(123), "| Тип:", typeof String(123)); 
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(1):", Boolean(1));


function runSurvey() {
    console.log("\n--- ЗАПУСК АНКЕТИ ---");

    alert("Вітаємо! Зараз розпочнеться коротка анкета.");

    let userName = prompt("Введіть ваше ім'я:", "Олексій"); 
    let ageInput = prompt("Введіть ваш вік:", "20"); 
    let city = prompt("З якого ви міста?", "Київ"); 
    let favColor = prompt("Ваш улюблений колір?", "Синій"); 
    let isWorking = confirm("Ви зараз працюєте?"); 

    let userAge = Number(ageInput); 

    let isAdult = userAge >= 18; 

    console.log("Користувач ввів:", userName, "| Тип:", typeof userName);
    console.log("Вік після Number():", userAge, "| Тип:", typeof userAge);
    console.log("Користувач працює?:", isWorking, "| Тип:", typeof isWorking);

    let resultMessage = `Дякуємо за відповіді, ${userName}! \n` +
                        `Вік: ${userAge} (Повнолітній: ${isAdult}) \n` +
                        `Місто: ${city} \n` +
                        `Улюблений колір: ${favColor} \n` +
                        `Працює: ${isWorking ? "Так" : "Ні"}`;

    alert(resultMessage);
}