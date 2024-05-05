let numbers = [1, 2, 3], sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
}
console.log(sum);


let numbers_1 = ['0','1', '2', '3', '4', '5'];
let sums = 0;
for (let a = 0; a < numbers.length; a++) {
    sums += Math.sqrt(numbers[a]);
}
console.log(sums);

// сумма массива, а так же больше нуля и меньше десяти
let arr = [2, 5, 9, 15, 0, 4, -9];
let sums_1 = 0;
for (let b = 0; b < arr.length; b++) {
    if (arr[b] > 0, arr[b] < 10){
        sums_1 += arr[b];
    }
}
console.log(sums_1);