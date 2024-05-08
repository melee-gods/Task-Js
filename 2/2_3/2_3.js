'use strict';
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
function task_2_3_1() {
    let first = prompt('Введите первое слово:');
    if (first === null) return null;
  
    let second = prompt('Введите второе слово:');
    if (second === null) return null;
  
    let a = first[first.length - 1];
    let b = second[0];
  
    return a === b;
  }
let result = task_2_3_1();
if (result === null) {
   console.log('Один из вводов был отменен.');
} else {
   console.log('Совпадение букв:', result);
}


// Дана некоторая строка. Найдите позицию третьего нуля в строке.