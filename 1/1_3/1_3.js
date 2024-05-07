let str = prompt("Введите строку:");

if (str.length > 1) {
console.log(str.charAt(str.length - 2));
} else {
console.log(null);
}


let a = prompt("Введите число a");
let b = prompt("Введите число b");

if ((a % b) == 0) {

    console.log('Делится без остатка');
}else {
    console.log(a % b);
}