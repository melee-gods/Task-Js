
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
function task_3_1(n: number): string {
  let digits = n.toString().split('').map(Number);
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] >= digits[i + 1]) {
      return 'Цифры не по возрастанию';
    }
  }
  return 'Цифры по возрастанию';
}

let number = 123456;
console.log(`Результат для числа ${number}: ${task_3_1(number)}`);


// Дан массив:[1, '', 2, 3, '', 5] Удалите из массива все пустые строки.
function task_3_2(arr: (number | string)[]): number[] {
  return arr.filter(item => item !== '') as number[];
}

const array = [1, '', 2, 3, '', 5];
console.log(`Исходный массив: ${array}`);
console.log(`Массив после удаления пустых строк: ${task_3_2(array)}`);