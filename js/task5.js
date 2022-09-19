//П'ЯТА ЗАДАЧА З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців.
let currentMonth = parseInt(prompt('Введіть номер місяця'));
let monthPlusMore = parseInt(prompt('Введіть скільки місяців хочете додати'));
let endMonth = ((currentMonth - 1 + monthPlusMore) % 12) + 1;
document.write(`Остаточній місяць = ${endMonth}`);
