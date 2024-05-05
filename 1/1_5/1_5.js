let res = 0;

for (let i = 1; i <= 100; i++) {
	res = res + i;
}

console.log(res);


let res_1 = 0;

for (let a = 1; a <= 100; a+=2) {
	res_1 = res_1 + a;
}

console.log(res_1);


let res_2 = 0;

for (let b = 1; b <= 100; b+=3) {
	res_2 = res_2 + b;
}

console.log(res_2);


let c = prompt("Введите число");
let d = prompt("Введите число");

console.log(c % d);

let str = prompt("Введите текст");

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    }