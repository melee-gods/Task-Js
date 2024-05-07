'use strict';
function task_1_9_1(array) {
    return array.filter(str => str.startsWith("http://"));
    }
    
let str = [
"http://example.com",
"https://website.com",
"http://anotherexample.org",
"ftp://server.com"
];
    
let filterStrings = task_1_9_1s(str);
console.log(task_1_9_1);

function task_1_9_2(arr){
    return arr.filter(str_1 => str_1.endsWith(".html"));
}
let str_1 = [
    "index.html",
    "style.css",
    "script.js",
    "about.html",
    "contact.php"
];

let task_1_9_2 = task_1_9_2(str_1)

console.log(task_1_9_2);


function task_1_9_3(numbers) {
    return numbers.map(num => num * 1.1);
}
    
let numbers = [10, 20, 30, 40, 50];
let task_1_9_3 = task_1_9_3(numbers);
    
console.log(task_1_9_3);