'use strict';

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
function task_2_6_1(str) {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
        positions.push(i);
      }
    }
    return positions;
  }
let inStr = 'a1b2c3d4';
console.log( task_2_6_1(inStr));


// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
function task_2_6_2(arr) {
    return arr.map(num => parseInt(num.toString().split('').reverse().join(''), 10));
  }
  let numArr = [123, 456, 789];
  console.log(task_2_6_2(numArr));


//   Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'
function task_2_6_3_1(str_1) {
    str_1 = str_1.replace(/\s/g, '');
    return str_1.split('').reverse().join('').replace(/(\d{3})/g, '\$1 ').trim().split('').reverse().join('');
  }
let numberStr_1 = '1234567';
  console.log(task_2_6_3_1(numberStr_1));

  // 2 решение(но как убрать пробелы без регуляки?)
  function task_2_6_3_2(str_1) {
    str_1 = str_1.replace(/\s/g, '');
  
    let r = '';
    let c = 0;
  
    for (let i = str_1.length - 1; i >= 0; i--) {
      r = str_1[i] + r;

      if (c % 3 === 2 && i !== 0) { 
        r = ' ' + r; 
      }
      c++;
    }
  
    return r;
  }
  console.log(task_2_6_3_2(numberStr_1));

// Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'
function task_2_6_4(str_2) {
    return str_2.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }
  let inStr_2 = 'AbCdE';
  console.log(task_2_6_4(inStr_2));


// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56]
function task_2_6_5(array) {
    return array.reduce((acc, val, index, arr) => {
      if (index % 2 === 0) {
        acc.push(Number(`${val}${arr[index + 1]}`));
      }
      return acc;
    }, []);
  }
  const numArray = [1, 2, 3, 4, 5, 6];
  console.log(task_2_6_5(numArray));


// Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:'aaa Bbb ccc Eee fff'
function task_2_6_6(str_3) {
    return str_3.split(' ').map((word, indexs) => {
        if (indexs % 2 !== 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      }).join(' ');
  }
  let inputString = 'aaa bbb ccc eee fff';
  console.log(task_2_6_6(inputString)); // Выведет 'aaa Bbb ccc Eee fff'