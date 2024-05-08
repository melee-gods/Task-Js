'use strict';
let numbers = [1, -2, 3, -4, -5, 6];
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
function task_2_2_1(a) {
    let n = a.filter(number => number < 0);
    return n.length;
  }
let b = task_2_2_1(numbers);
console.log(b);


let numbers_1 = [-5, 3, 0, -1, 2];
// Дан массив с числами. Оставьте в нем только положительные числа.
function task_2_2_2(arr) {
    return arr.filter(number_1 => number_1 > 0);
  }
let pos = task_2_2_2(numbers_1);
console.log(pos);



// Дана строка. Удалите предпоследний символ из этой строки.