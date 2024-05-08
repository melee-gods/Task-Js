'use strict';
let s = 'abcde';
// Дана строка: 'abcde' Получите массив букв этой строки.
function task_1_7_1(s) {
    let arr = s.split('');
    console.log(arr);
    return arr;
}
task_1_7_1(s);


let n = 12345;
// Дано некоторое число: 12345 Получите массив цифр этого числа.
function task_1_7_2(n) {
    let a = String(n).split('').map(Number);
    console.log(a);
    return a;
  }
task_1_7_2(n);


// Дано некоторое число: 12345 Переверните его: 54321
function task_1_7_3(int){ //попробовать решить через .reduce
    let num ="";
    for(let i= 0; i<int.length; i++){
    num = int[i]+num ;
}
    return num ;
}
console.log(task_1_7_3("12345"));


let b = 12345;
// Дано некоторое число: 12345 Найдите сумму цифр этого числа.
function task_1_7_4(b) {
    let sum = 0;
    let s = String(b).split('').map(Number);
    for (let h = 0; h < s.length; h++) {
      sum += s[h];
    }
    return sum;
  }
console.log(task_1_7_4(b));