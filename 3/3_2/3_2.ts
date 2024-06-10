// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
function task_3_2_1(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      const numString = i.toString();
      if (numString.length >= 2 && (Number(numString[numString.length - 2]) % 2 === 0)) {
        console.log(i);
      }
    }
  }
  
  task_3_2_1(10, 1000);

//   Дан массив. Удалите из него каждый пятый элемент.