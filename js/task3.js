//ТРЕТЯ ЗАДАЧА З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити скільки гривень і копійок є у даній сумі . Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.
let pennyNumber = parseInt(prompt('Введіть кількість копійок'));
let finalDollarsNumber = Math.floor(pennyNumber / 100);
let finalPennysNumber = pennyNumber % 100;
document.write(`${finalDollarsNumber} грн:`);
document.write(`${finalPennysNumber} копійок`);
