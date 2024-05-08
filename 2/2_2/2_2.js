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
function task_2_2_3() {
    let str = prompt("Введите строку:");
    if (str === null) {
      console.log("Отменено");
    } else {
      let newStr = str.slice(0, -2) + str.slice(-1);
      console.log(newStr);
    }
}
console.log(task_2_2_3());


let array = [1, 2, 3, 4, 5, 6];
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
function task_2_2_4(array) {
    let half = Math.floor(array.length / 2);
    let first = array.slice(0, half).reduce((acc, val) => acc + val, 0);
    let second = array.slice(half).reduce((acc, val) => acc + val, 0);
  
    if (second === 0) {
      throw new Error('Сумма второй половины равна нулю, деление невозможно.');
    }
    return first / second;
}
console.log(task_2_2_4(array));