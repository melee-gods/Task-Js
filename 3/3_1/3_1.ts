
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
function task_3_1_1(n: number): string {
  let digits = n.toString().split('').map(Number);
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] >= digits[i + 1]) {
      return 'Цифры не по возрастанию';
    }
  }
  return 'Цифры по возрастанию';
}

let number = 123456;
console.log(`Результат для числа ${number}: ${task_3_1_1(number)}`);


// Дан массив:[1, '', 2, 3, '', 5] Удалите из массива все пустые строки.
function task_3_1_2(arr: (number | string)[]): number[] {
  return arr.filter(item => item !== '') as number[];
}

const array = [1, '', 2, 3, '', 5];
console.log(`Исходный массив: ${array}`);
console.log(`Массив после удаления пустых строк: ${task_3_1_2(array)}`);


// Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],]Отсортируйте элементы в каждом подмассиве. Функция ts
function task_3_1_3(array: number[][]): number[][] {
  return array.map(subArray => subArray.sort((a, b) => a - b));
}

const inArray = [
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
];

console.log("Исходный массив:", inArray);
console.log("Отсортированный массив:", task_3_1_3(inArray));


// Даны два массива:let arr1 = [1, 2, 3];let arr2 = [1, 2, 3, 4, 5];Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми. 
function task_3_1_4(arr1: number[], arr2: number[]): [number[], number[]] {
  const longerArray = arr1.length > arr2.length ? arr1 : arr2;
  const shorterArray = arr1.length > arr2.length ? arr2 : arr1;
  
  return [
    shorterArray,
    longerArray.slice(0, shorterArray.length)
  ];
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

[arr1, arr2] = task_3_1_4(arr1, arr2); 

console.log("arr1:", arr1);
console.log("arr2:", arr2);