let arr = [34, 35, 36, 37]
console.log(arr);
arr.push(38);
console.log(arr);
arr.pop();
console.log(arr);
//removes from start
arr.shift();
console.log(arr);
//add at the start
arr.unshift(234);
console.log(arr);


//concatination of arrays
let arr1 = [1, 2, 3, 4, 4]
let arr2 = [44, 5, 6, 7, 8]
let ans = arr1.concat(arr2);
console.log(ans);

///for each loop
//it follows callbacks 
//it takes  function as a input and prints all the characters
let brr1 = [1, 2, 3, 4, 5]

function foreachloop(str) {
    console.log(str);
}
brr1.forEach(foreachloop);

// function print1() {
//     console.log("hi hello github");
// }

// function print2() {
//     console.log("hi hello leetcode");
// }

// function callany(fun) {
//     fun();
// }
// callany(print2);