//ARROW Function
const sum = (a, b) => {
    return a + b;
}

// console.log(sum)
// const ans = sum(1, 3);
// console.log(ans);

//MAP AND FILTERS
///give an array,give me back a new array in which every value is multiplied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]


//solution 1
let arr = [1, 2, 3, 4, 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
}
console.log(newArr);

///soltion 2 using map
//1.create tranformation function
//2.iterate over arr using map

// function tranformation(i) {
//     return i * 2;
// }

// const ans = arr.map(tranformation);
const ans = arr.map(function(i) {
    return i * 2;
});
console.log(ans);


//FILTERING
//what if I tell u,given an input array,give me back all the even values from it

//solution 1:
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArray.push(arr[i]);
    }
}
console.log(newArray);



//using map,the cleaner way
function filterLogic(n) {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

const val = arr.filter(filterLogic);
console.log(val);



//map is very important
/////ASSIGNMNET
//create a map fn that takes an array and a tranform fn as input and returnsthe transformed arrays as output
function tranform(i) {
    return i * 2;
}

function map(arr, transform) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans[i] = transform(arr[i]);
    }

    console.log(ans);

}
map(arr, tranform);