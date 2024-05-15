'use strict';
let c = prompt('Введите строку:');
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
function task_2_10_1(string) {
    if (string === null) {
        console.log('Ввод Отменён!');
      return;
    }
  
    let a = 0;
    for (let b = 0; b < string.length; b++) {
      if (string[b].toLowerCase() !== string[b].toUpperCase()) {
        a++;
      }
      if (a > 3) {
        console.log('В строке более трех букв');
        return;
      }
    }
    console.log('В строке не более трех букв');
    return;
  }
  console.log(task_2_10_1(c)); 

let number = 1234567;
//   Дано число. Получите первую четную цифру с конца этого числа.
function task_2_10_2(number) {
  let strNumber = number.toString();

  for (let d = strNumber.length - 1; d >= 0; d--) {
    let di = parseInt(strNumber[d]);
    
    if (di % 2 === 0) {
      return di;
    }
  }
  return null;// Если ни одна цифра не была четной null
} 
console.log(task_2_10_2(number));


let s ='abcde abcde abcde'
// Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
function task_2_10_3(str) {
    let word = str.split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i] = '!' + word[i].substring(1);
    }
    return word.join(' ');
}
console.log(task_2_10_3(s));


let numbers = [1, 2, 3, 3, 4, 5];
// Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.
function task_2_10_4(arr) {
  for (let t = 1; t < arr.length; t++) {
    if (arr[t] === arr[t - 1]) {
      console.log('Одинаковые');
      return;
    }
  }
  console.log('Разные');
  return;
}
console.log(task_2_10_4(numbers)); 