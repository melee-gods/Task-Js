// 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
let array = new Array(10);
for (let i = 0; i < array.length; i++) {
    array[i] = getRandomInt(1, 100);
}
console.log(array);


// 2
function reverseString(str) {
    return str.split("").reverse().join("");
}
  
console.log(reverseString("12345"));

// 3
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i += 2) {
  console.log(arr.slice(i, i + 2));
}


// 4
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2);
}
    
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
    
let newArr = mergeArr(arr1, arr2);
    
console.log(newArr);