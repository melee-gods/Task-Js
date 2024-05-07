'use strict';
// Заполните массив случайными числами из промежутка от 1 до 100
function task_1_10_1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
let array = new Array(10);
for (let i = 0; i < array.length; i++) {
    array[i] = task_1_10_1(1, 100);
}
console.log(array);


// Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
function task_1_10_2(str) {
    return str.split("").reverse().join("");
}
  
console.log(task_1_10_2("12345"));


let arr = [1, 2, 3, 4, 5, 6];
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите в консоль подмассивы из двух элементов нашего массива: [1, 2] [3, 4] [5, 6]
function task_1_10_3(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      console.log(arr.slice(i, i + 2));
    }
}
task_1_10_3(arr);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
function task_1_10_4(arr1, arr2) {
    return arr1.concat(arr2);
}
  
let newArr = task_1_10_4(arr1, arr2);
    
console.log(newArr);