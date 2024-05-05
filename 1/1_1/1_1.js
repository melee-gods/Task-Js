function task1_1(n) {

    if (n > 0) {
        console.log("Положительное число");
    } else if (n < 0) {
        console.log("Отрицательное число");
    } else {
        console.log("Ноль");
    }
}
task1_1(10)
// Вывел сразу длинну и последний символ
let str = "Hello world";

console.log(str.length);
console.log(str[str.length - 1]);


let num = 5;

if (num % 2 == 0) {
	console.log('четное');
} else {
	console.log('нечетное');
}

let word = prompt("Напишите слово 1");
let word_1 = prompt("Напишите слово 2");

if (word[0] == word_1[0]){
    console.log("Первые буквы совпадают.");
    } else {
        console.log("Первые буквы не совпадают.");
    }


let word_2 = prompt("напишите слово");
if(word_2.slice(-1) === "ь")  {
    console.log(word_2.slice(-2, -1));
} else if(word_2.slice(-1) != "ь") {
    console.log(word_2.slice(-1));
}