'use strict';
// Дана некоторая строка. Найдите позицию первого нуля в строке.
function firstZero() {
let str = prompt("Введите строку:");
if (str === null) {
    return null; // нажал отмену
  }
let position = str.indexOf('0');
if (position === -1) {
  console.log("Ноль в строке не найден.");
} else {
  console.log("Позиция первого нуля: " + position);
}
}
let result = firstZero();
console.log(result);


// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
function SumFive() {
    for (let i = 1; i <= 1000; i++) {
      let num = i.toString();
      if (num.length > 1) {
        let first = parseInt(num[0], 10);
        let second = parseInt(num[1], 10);
        if (first + second === 5) {
            console.log(i);
        }
      }
    }
}
  
SumFive();


// Дан массив. Удалите из него элементы с заданным значением.
function task_2_1_3(array, value) {
    return array.filter(element => element !== value);
}

let origArray = [1, 2, 3, 2, 4];
let valueRemove = 2;
let updatArray = task_2_1_3(origArray, valueRemove);
console.log(updatArray);


let arr = [1, 2, 3, 4, 5, 6];
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.
function task_2_1_4(arr) {
    let half = Math.ceil(arr.length / 2);
    let sum = 0;
    for (let i = 0; i < half; i++) {
      sum += arr[i];
    }
    return sum;
  }

let sum = task_2_1_4(arr);
console.log(sum);