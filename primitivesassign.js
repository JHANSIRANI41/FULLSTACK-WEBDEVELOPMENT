// //1. Write the program to greet a person given their first and last name
// let person = {
//     firstname: "shiva",
//     lastname: "ram"
// }
// console.log("hello ");
// console.log(person["firstname"] + person["lastname"])


// //2. Write a program that greets a person based on their gender.(Ifelse)

// let person1 = {
//     firstname: "shiva",
//     lastname: "ram",
//     gender: "male"
// }

// if (person1["gender"] == "male") {
//     console.log("hello mr");
//     console.log(person1["firstname"] + person1["lastname"]);

// } else {
//     console.log("hello ms");
//     console.log(person1["firstname"] + person1["lastname"]);
// }

// //3. Write a program that counts from 0 - 1000 and prints(for loop)
// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
// }
// //complex primitives
// //1. Write a program prints all the even numbers in an array

// let arr = [2, 5, 12, 56, 4]
// console.log("Even numbers are: ");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// //2. Write a program to print the biggest number in an array
// console.log("maximum number in the array is: ");
// let maxi = -1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxi) {
//         maxi = arr[i];
//     }
// }
// console.log(maxi);


//3. Write a program that prints all the male people’ s first name given a complex object

// let usernames = [{
//         firstname: "ram",
//         lastname: "yav",
//         gender: "male"

//     },
//     {
//         firstname: "sonu",
//         lastname: "cutie",
//         gender: "female"

//     },
//     {
//         firstname: "modi",
//         lastname: "prime minister",
//         gender: "male"

//     }
// ]
// console.log("the names are:");
// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i]["gender"] == "male") {
//         console.log(usernames[i]["firstname"]);
//     }
// }


//4. Write a program that reverses all the elements of an array

// let brr = [1, 2, 3, 4, 5]

// for (let i = brr.length - 1; i >= 0; i--) {
//     console.log(brr[i]);
// }


//Functions
//1. Write a function that nds the sum of two numbers

//2. Write another function that displays this result in a pretty format

//3. Write another function that takes this sum and prints it in passive tense

function sum(a, b, funToCall) {
    let result = a + b;
    return funToCall(result)
}

function displayResult(val) {
    console.log("the value of sum is :" + val);
}

function printinpassivetense(data) {
    console.log("sum is :" + data);
}

sum(7, 6, displayResult);
sum(7, 6, printinpassivetense);
//console.log(sum(7, 6));