'use strict';

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
function task_2_8_1() {
    let str = prompt('Введите строку:');
    if (str === null) {
      console.log('Ввод отменён!');
      return;
    }
  
    let a = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      a++;
    }
  }
  
  if (a <= 2) {
    console.log('В строке не более двух заглавных букв');
  } else {
    console.log('В строке более двух заглавных букв');
  }
  }
  console.log(task_2_8_1()); 


let string = '1 22 333 4444 22 5555 1';
// Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'
function task_2_8_2(input) {
    return input.split(' ').filter(word => word.length <= 3).join(' ');
  }
  console.log(task_2_8_2(string));


let arr_1 = [1, 2, 3]
let arr_2 = ['a', 'b', 'c']
// Даны два массива:let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
function task_2_8_3(arr_1, arr_2) {
    let arr = arr_1.slice();//копия первого массива, чтобы не изменять исходный
  
    let lastElement = arr.pop();// убрал последний элемент из копии и сохранил его
  
    arr = arr.concat(arr_2);// объединил копию с вторым массивом
  
    arr.push(lastElement);// добавил  обратно в конец нового массива
  
    return arr;
  }
  console.log(task_2_8_3(arr_1, arr_2));