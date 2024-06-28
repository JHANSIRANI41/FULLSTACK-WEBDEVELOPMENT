//call backs
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}
//DONT REPEAT YOURSELF
// function calculateSquare(a, b) {
//     let s1 = square(a);
//     let s2 = square(b);
//     return s1 + s2;

// }

// function calculateCube(a, b) {
//     let s1 = cube(a);
//     let s2 = cube(b);
//     return s1 + s2;

// }
//generic function 
function sumOfSomething(a, b, fun) {
    let s1 = fun(a);
    let s2 = fun(b);
    return s1 + s2;
}


let ans = sumOfSomething(2, 4, square);
let ans1 = sumOfSomething(2, 4, cube);

console.log(ans);
console.log(ans1);