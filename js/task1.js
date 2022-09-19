//ПЕРША ЗАДАЧА Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку.

let screenWidth = parseInt(prompt('Введіть ширину вашого екрану'));
let elementsQuantity = parseInt(prompt('Введіть кількість елементів'));
let elementsInScreen = Math.floor(screenWidth / elementsQuantity);
document.write(
  `Повна кількість елементів яка поміститься в екран ${elementsInScreen}`
);
