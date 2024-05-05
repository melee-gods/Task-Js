let s = 'abcde', arr = s.split('');
console.log(arr);


let n = 12345;
let a = String(n).split('').map(Number);

console.log(a);


function reverseInt(int){
    let num ="";
    for(let i= 0; i<int.length; i++){
    num = int[i]+num ;
}
    return num ;
}
console.log(reverseInt("12345"));


let sum = 0
    for (let i = 0; i<=5; i++){
        sum += i;
    }
console.log(sum);