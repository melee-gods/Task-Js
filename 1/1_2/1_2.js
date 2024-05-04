let num = prompt("Введите длинное число");

let first = String(num)[0];
console.log(first)

let num_1 = prompt("Введите длинное число");

let first_1 = String(num_1).slice(-1);
console.log(first_1);


console.log(Number(first) + Number(first_1));


console.log(num.length);

if (num[0] == num_1[0]){
console.log("Первые числа совпадают.");
} else {
    console.log("Первые числа не совпадают.");
}