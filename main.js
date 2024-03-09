// // console.log("hello world")
// let a = 9;
// a = 78;
// // let b;
// // console.log(b)
// console.log(a)
// let firstName = "jhansi"
// let age = 19;
// let ismarried = false;
// console.log("my name is " + firstName + ", age is " + age + " and marriage status is " + ismarried);
// // console.log(firstName + " is married " + ismarried);
// if (ismarried) {
//     console.log(firstName + " is married");
// } else {
//     console.log(firstName + " is not married");
// }


// ////////Loops
// let ans = 0;
// for (let i = 1; i <= 100; i++) {
//     ans = ans + i;
// }
// console.log(ans)


// //greeting a person
// let fName = "Jhansi"
// let LName = "Rani"

// console.log("hello " + fName + " " + LName);
// let man = "ramu"
// gender = "male"
// if (gender == "male") {
//     console.log("hello  good mrng " + man + "sir");
// }


// //welcome to arrays

// let person = ["shiva", "krish", "ram"]
// console.log(person[0]);
// console.log(person[1]);
// console.log(person);
// //negative indexing is not allowed in arrays
// console.log(person[-3]);

// //print even numbers from an array
// const ages = [12, 35, 24, 56, 35]
// let peoplecount = ages.length;
// for (let i = 0; i < peoplecount; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
// }


// //write a programme to find the biggest number in the array
// const scores = [23, 15, 24, 56, 25, 97, 7]
// let maxi = -1;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > maxi) {
//         maxi = scores[i];
//     }

// }
// console.log("maxinum number in the array is " + maxi);


// ////printing the gender male persons first name
// const personArray = ["harkirat", "abhi", "ruby"]
// const ageArray = [23, 56, 13];
// const genderArray = ["male", "male", "female"];
// let noOfPersons = personArray.length;
// for (let i = 0; i < noOfPersons; i++) {
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }



// ///////objects

// let person1 = {
//     firstName: "ram",
//     age: 13,
//     gender: "male"
// }

// // console.log(person1["firstName"])
// console.log(person1);
// console.log(person1["firstName"], person1["age"], person1["gender"])


// //array of objects
// //every field of array is a object initself

// // const personArray = ["harkirat", "abhi", "ruby"]
// // const ageArray = [23, 56, 13];
// // const genderArray = ["male", "male", "female"];
// // instead of creating all these we can creaye using array of objects
// const userData = [{
//     FirstName: "sujoy",
//     age: 25,
//     gender: "male"
// }, {
//     FirstName: "sarika",
//     age: 24,
//     gender: "female"
// }, {
//     FirstName: "lamxi narayana",
//     age: 34,
//     gender: "male"
// }, ]

// // console.log(userData);
// // console.log(userData[0]);
// for (let i = 0; i < userData.length; i++) {
//     if (userData[i]["gender"] == "male") {
//         console.log(userData[i]["FirstName"]);
//     }
// }


//functions
let sum1 = sum(2, 4);
console.log(sum1);

function sum(a, b) {
    let sumval = a + b;
    return sumval
}
let sum2 = sum(34, 2)
console.log(sum2);