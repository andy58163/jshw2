//ШОСТА ЗАДАЧА Скласти програму для розв’язування задачі: йде N-а секунда суток, визначити скільки повних годин і повних хвилин пройшло до цього моменту.
let currentSeconds = parseInt(prompt('Введіть кількість секунд'));
let currentHours = Math.floor(currentSeconds / 60 / 60);
let currentMinutes = Math.round(currentSeconds / 60) % 60;
document.write(`Точна кількість годин та хвилин = ${currentHours}`);
document.write(`:${currentMinutes}`);
