'use strict';
// Заполните массив целыми числами от 1 до 10.
function task_1_8_1() {
    let a = [];
    for (let i = 1; i <= 10; i++) {
      a.push(i);
    }
    return a;
}
console.log(task_1_8_1());


// Заполните массив четными числами из промежутка от 1 до 100.
function task_1_8_2() {
    const arr = [];
    for (let i = 2; i <= 100; i += 2) {
      arr.push(i);
    }
    return arr;
  }
console.log(task_1_8_2());


let mass = [1.456, 2.125, 3.32, 4.1, 5.34];
// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.
function task_1_8_3(arr) {
    return arr.map(num => parseFloat(num.toFixed(1)));
}
let d = task_1_8_3(mass);  
console.log(d);