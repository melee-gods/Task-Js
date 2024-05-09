'use strict';

let string = '023m0df0dfg0';
// Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.
function task_2_5_1(str) {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        positions.push(i);
      }
    }
    return positions;
}
console.log( task_2_5_1(string));


let origStr = 'abcdefg';
// Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:'abdeg'
function task_2_5_2(str_1) {
    let result = '';
    for (let a = 0; a < str_1.length; a++) {
      if ((a + 1) % 3 !== 0) {
        result += str_1[a];
      }
    }
    return result;
}
console.log(task_2_5_2(origStr));


let array = [1, 2, 3, 4, 5, 6];
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных
function task_2_5_3(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        even += arr[i]; // Сумма элементов на четных позициях
      } else {
        odd += arr[i];  // Сумма элементов на нечетных позициях
      }
    }
    return even / odd; // Делю сумму четных на сумму нечетных
}
console.log(task_2_5_3(array));