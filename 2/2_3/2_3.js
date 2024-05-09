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
function task_2_3_2(str) {
   let index = -1;
   for (let i = 0, zero = 0; i < str.length; i++) {
     if (str[i] === '0') {
       zero++;
       if (zero === 3) {
         index = i;
         break;
       }
     }
   }
   return index;
}
console.log(task_2_3_2("100111100001010"));


// Даны числа, разделенные запятыми:'12,34,56' Найдите сумму этих чисел.
function task_2_3_3(com) {
   return com.split(',')
     .map(Number)
     .reduce((sum, number) => sum + number, 0);
}
let sum = task_2_3_3('12,34,56');
console.log(sum);


// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект:{year: '2025', month: '12', day: '31',}
function task_2_3_4(string) {
  let [year, month, day] = string.split('-');
  return { year, month, day };
}
let date = task_2_3_4('2025-12-31');
console.log(date);