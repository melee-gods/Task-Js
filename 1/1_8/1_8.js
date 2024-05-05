let a = [];
for (let i = 1; i <= 10; i++) {
a.push(i);
}
console.log(a);

const arr = [];
for (let i = 2; i <= 100; i += 2) {
    arr.push(i);
}

console.log(arr);


let mass = [1.456, 2.125, 3.32, 4.1, 5.34];
let d = mass.map(num => parseFloat(num.toFixed(1)));

console.log(d);