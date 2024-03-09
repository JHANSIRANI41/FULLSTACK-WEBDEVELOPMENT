function sum(num1, num2, fnToCall1, fnToCall2) {
    let result1 = num1 + num2;
    fnToCall1(result1);
    return fnToCall2(result1);
}

function displayResult(data) {
    console.log("result of the sum is :" + data);
}

function diaplayResultPassive(data) {
    console.log("sums result is :" + data);
}
//question
//your only allowed to call one function after this how will you displayresult of a sum
//first approach
// let ans = sum(3, 2)
// console.log(displayResult(ans));

//2nd approach
// let ans = sum(3, 2);


//we need to change here but not in functions
let ans = sum(4, 5, displayResult, diaplayResultPassive);


///understanding it properly
// function Arithmetic(a, b, type) {
//     //here we shouldnt use this if statements instead we use call backs
//     if (type == "sum") {

//         let sumval = sum(a, b);
//         return sumval;
//     }
//     if (type == "minus") {
//         let subval = sub(a, b);
//         return subval;
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// // function sub(a, b) {
// //     return a - b;
// // }

// const val = Arithmetic(4, 5, "minus");
// console.log(val);


// function arithmetic(a, b, fnTocall) {
//     let val = fnTocall(a, b);
//     return val;
// }

// function sum(a, b) {
//     return a + b;

// }


// const finalans = arithmetic(4, 6, sum);
// console.log(finalans);

// function greet() {
//     console.log("hello people");
// }

// setTimeout(greet, 3 * 1000) //it prints after 1 sec
//     //here we are calling a function from another function
// setInterval(greet, 1 * 100)
function sum(num1, num2, fnToCall1) {
    let result1 = num1 + num2;
    return fnToCall1(result1)
}

function displayResult(data) {
    console.log("result of the sum is :" + data);
    return data;
}

function diaplayResultPassive(data) {
    console.log("sums result is :" + data);
}
// console.log(sum(3, 4, displayResult));

// let ans1 = sum(3, 4, displayResult);
console.log(sum(3, 4, displayResult));