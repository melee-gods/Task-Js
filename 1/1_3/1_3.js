let str = prompt('Введите слово');

console.log(str.slice(-1));


let a = prompt("Введите число a");
let b = prompt("Введите число b");

if ((a % b) == 0) {

    console.log('Делится без остатка');
}else {
    console.log(a % b);
}