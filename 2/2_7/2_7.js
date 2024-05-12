'use strict';
// Дана некоторая строка:'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. 
// В нашем случае должно получится следующее:'A BC DEF ghij'
function task_2_7_1(str) {
    return str.split(' ').map(word => word.length <= 3 ? word.toUpperCase() : word).join(' ');
  }
  let one = 'a bc def ghij';
  console.log(task_2_7_1(one));


// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
function task_2_7_2(char) {
    if (char === null) {
        return null;
      } else if (char === char.toUpperCase()) {
        return 'Верхний регистр';
      } else if (char === char.toLowerCase()) {
        return 'Нижний регистр';
      }
  }
  let char = prompt('Введите символ:');
  console.log(task_2_7_2(char));


// Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
  function task_2_7_3(num) {
    return num.toString().split('').filter(a => a % 2 === 0).join('');
  }
  console.log(task_2_7_3(123789));
