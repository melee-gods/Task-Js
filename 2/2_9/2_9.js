'use strict';

// Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:12 + 34 + 56
function task_2_9_1_1(number) {
    let sum = 0;
    let numberStr = number.toString();
  
    for (let i = 0; i < numberStr.length; i += 2) {
      sum += parseInt(numberStr[i] + numberStr[i + 1]);
    }
  
    return sum;
  }
  
  console.log(task_2_9_1_1(123456));

// Вывожу 12 + 34 + 56 как строку
function task_2_9_1_2(numbers) {
  let sums = 0;
  let numbersStr = numbers.toString();
  let p = [];

  for (let b = 0; b < numbersStr.length; b += 2) {
    if (b + 1 < numbersStr.length) {
      sums += parseInt(numbersStr[b] + numbersStr[b + 1]);
      p.push(numbersStr[b] + numbersStr[b + 1]);
    } else {
      sums += parseInt(numbersStr[b]);
      p.push(numbersStr[b]);
    }
  }
  console.log(p.join(' + ') + ' = ' + sums);
  return sums;
}
task_2_9_1_2(123456);


//   Дан массив с числами:[1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.
  function task_2_9_2(arr) {
    let a = arr.reverse(); 
    console.log(a);
  }
task_2_9_2([1, 2, 3, 4, 5]);