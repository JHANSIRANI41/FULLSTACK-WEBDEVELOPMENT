const { callExpression } = require("@babel/types");
const { time } = require("console");

//async functions
function asyncFunction(callback, duration) {
    // setTimeout(callback, duration);
    setTimeout(function() {
        callback(); //here callback is given by end user
    }, duration);

}
//here we will call it as general call with a callback
asyncFunction(function() {
    console.log("hello from non-promisified function")
}, 2000);




//PROMISES
//it doesnt have any callbacks
//it returns a promise as output

//syntax
//DEFINING A PROMISE
function promisifiedFunction(duration) {
    //instantiate an object of promise
    //it has an input is a callback function with first argument as resolve
    const p = new Promise(function(resolve) {

        //after duration secs call the resolve,which is a callback
        // setTimeout(resolve, duration);
        setTimeout(function() {
            resolve(); //this is given by the promise object,not by the end user
        }, duration);

    });
    return p;
}

//CALLING A PROMISE
const ans = promisifiedFunction(2000);
//print the ans ->it is an instance of promise class
//we do .then->that is the function you need to call after your done with the thing
ans.then(function() {
    console.log("from promisified function");
});


//if there is a in this it calls .catch


//these are used in
//1.do a network call
// 2. sleep / wait for some time
// 3. read a File
// 4. database callExpression