'use strict';
// 1
function FirstZero() {
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
let result = FirstZero();
console.log(result);


// 2
function SumFive() {
    for (let i = 1; i <= 1000; i++) {
      let num = i.toString();
      if (num.length > 1) {
        let first = parseInt(num[0], 10);
        let last = parseInt(num[1], 10);
        if (first + last === 5) {
            console.log(i);
        }
      }
    }
}
  
  SumFive();

// 3
function removeElements(array, value) {
    return array.filter(element => element !== value);
}

  let origArray = [1, 2, 3, 2, 4];
  let valueRemove = 2;
  let updatArray = removeElements(origArray, valueRemove);
  console.log(updatArray);

// 4
function sumFirstHalf(array) {
    let half = Math.ceil(array.length / 2);
    let sum = 0;
    for (let i = 0; i < half; i++) {
      sum += array[i];
    }
    return sum;
  }

  let array = [1, 2, 3, 4, 5, 6];
  let sum = sumFirstHalf(array);
  console.log(sum);