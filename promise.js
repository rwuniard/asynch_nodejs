var Promise = require('promise');
var msg = '';

promise1 = new Promise((resolve, reject) => {
    msg += 'function a';
    console.log('promise1');
    resolve(msg);
});

promise2 = new Promise((resolve, reject) => {
    msg += ' function b';
    console.log('promise2');
    resolve(msg);
});

var printOutcome = (results) => {console.log("Results = ", results, "message = ", msg);}


function myFunc() {
    var myMsg = 'This is my Function returning promise';
    console.log('myFunc');
    return new Promise( (resolve, reject) => {
        var err = 0;
        if (err) {
            reject ('something wrong happened');
        }
        else {
            resolve(myMsg);
        }
    });
}


function main() {

    // Basic Promise.
    var myPromise = myFunc();
    myPromise.then((result) => {
        myResult = result;
        console.log('result: ' + result);
    })

    //This is an example of using Promise.all
    Promise.all([promise1, promise2]).then(printOutcome);
    Promise.all([promise2, promise1]).then(printOutcome);
}

main();




