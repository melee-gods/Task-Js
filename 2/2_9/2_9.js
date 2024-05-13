'use strict';

// Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:12 + 34 + 56
function task_2_9_1(number) {
    let sum = 0;
    let numberStr = number.toString();
  
    for (let i = 0; i < numberStr.length; i += 2) {
      sum += parseInt(numberStr[i] + numberStr[i + 1]);
    }
  
    return sum;
  }
  
  console.log(task_2_9_1(123456));


//   Дан массив с числами:[1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.
  function task_2_9_2(arr) {
    let a = arr.reverse(); 
    console.log(a);
  }
task_2_9_2([1, 2, 3, 4, 5]);