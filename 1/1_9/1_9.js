function filterHttpStrings(array) {
    return array.filter(str => str.startsWith("http://"));
    }
    
let str = [
"http://example.com",
"https://website.com",
"http://anotherexample.org",
"ftp://server.com"
];
    
let filterStrings = filterHttpStrings(str);
console.log(filterStrings);

function filterHtmlStrings(arr){
    return arr.filter(str_1 => str_1.endsWith(".html"));
}
let str_1 = [
    "index.html",
    "style.css",
    "script.js",
    "about.html",
    "contact.php"
];

let filteredStrings = filterHtmlStrings(str_1)

console.log(filteredStrings);


function increaseNumbers(numbers) {
    return numbers.map(num => num * 1.1);
}
    
let numbers = [10, 20, 30, 40, 50];
let increasedNumbers = increaseNumbers(numbers);
    
console.log(increasedNumbers);