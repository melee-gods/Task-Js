'use strict';

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
function task_2_4_1(str){
    let index = str.search(/\d/);
    return index;
}
console.log(task_2_4_1("abcd123dsf21"));

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
function task_2_4_2(obj){
    let keys = Object.keys(obj); //  массив ключей
    let values = Object.values(obj); //  массив значений
  
    return { keys, values };
}
let myObj = { a: 1, b: 2, c: 3 };
let { keys, values } = task_2_4_2(myObj);

console.log(keys); 
console.log(values);


let number = 123456;
// Дано число. Выведите в консоль количество четных цифр в этом числе.
function task_2_4_3(number) {
    let digits = number.toString().split(''); // число в массив цифр
    let count = 0;
    for (let digit of digits) {
      if (digit % 2 === 0) {
        count++;
      }
    }
    return count;
}
console.log(task_2_4_3(number));


let origStr = 'abcde';
// Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
function task_2_4_4(string) {
    return string.split('').map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char;
    }).join('');
}
console.log(task_2_4_4(origStr));


let originalString = 'aaa bbb ccc';
// Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
function task_2_4_5(strin) {
    return strin.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
console.log(task_2_4_5(originalString));