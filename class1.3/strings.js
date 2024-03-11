//string length
//it is not a function str.length


function findlength(str) {
    console.log(str);
    console.log(str.length);
}
findlength("    jhansi_41")

//indexOf()
//it is a function

function findIndex(str1, str2) {
    console.log(str1);
    console.log("index is " + str1.indexOf(str2));
    console.log("index is " + str1.lastIndexOf(str2));

}
findIndex("Jhansi Rani Rani Jhani Rani", "Rani");

//SLICE
//slice(start, end);
//end is not included
let name = "cellobottle"
console.log(name.slice(0, 4));
console.log(name);

//using a function

function sliceing(str, start, end) {
    console.log(str.slice(start, end));
}
sliceing("cellobottle", 0, 4);

//slice and substring are both same if it start at 0 ,if not they are not same

let location = "hyderabad"
console.log(location.slice(0, 3)); //hyd
console.log(location.substr(0, 3)); //hyd
console.log(location.slice(2, 3)); //d
console.log(location.substr(2, 3)); //der(from starting index it moves it the given length)
//substr(start, length);


//function
function userfun(str, start, end) {
    console.log(str.length);
    let newStr = "";
    let i = start;
    while (i >= start && i < end) {
        newStr = newStr + str[i];
        i++;
    }
    return newStr;
}
let ans = userfun("hyderabad", 1, 5);
console.log(ans);
//if end is out of bound then it willprint until the string exsits


//str.replace()
function strReplace(str, str1, str2) {
    console.log(str.replace(str1, str2));
}
strReplace("grand finale", "finale", "tests")

//simpler way
let strname = "grand finale"
console.log(strname.replace("finale", "testsai"));


//split string function
const bio = "hello guys, this is Jhansi_41"
console.log(bio.split("_"));
console.log(bio.split(" "));


//trim==>it removes the spaces at the biginning and end,but not in the middle

const email = "            helloworld  @gmail.com    "
console.log(email.trim());


//toUpperCase
const brand = "pUmA"
console.log(brand.toUpperCase());
console.log(brand.toLowerCase());


//important are :slice and split

//question:differnee between global and local functions
//global functions means directly we can access them,rather than str.trim
//ex:parseInt()