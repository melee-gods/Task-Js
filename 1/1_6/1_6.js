'use srict'
let numbers = [1, 2, 3];
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function task_1_6_1(numbers) {
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
    }
    
    return sum;
}    
console.log(task_1_6_1(numbers));


let numbers_1 = [0, 1, 2, 3, 4, 5, -9]; 
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function task_1_6_2(numbers_1) {
    let sum = 0;
    for (let a = 0; a < numbers.length; a++) {
        if (numbers_1[a] >= 0) {
            sum += Math.sqrt(numbers_1[a]);
        }
    }
    return sum;
}

console.log(task_1_6_2(numbers_1));

let arr = [2, 5, 9, 15, 0, 4, -9];
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function task_1_6_3_4(arr) {
    let sums_1 = 0;
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] > 0 && arr[b] < 10) {
        sums_1 += arr[b];
      }
    }
    return sums_1;
}
console.log(task_1_6_3_4(arr));