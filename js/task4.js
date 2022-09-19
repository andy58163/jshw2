//ЧЕТВЕРТА ЗАДАЧА Визначити скільки повних тижнів є у вказаній кількості днів.
let days = parseInt(prompt('Введіть кількість днів'));
let week = Math.floor(days / 7) % 7;
document.write(`Повна кількість тижнів ${week}`);
