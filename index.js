var async = require('async');


// Conventional functional call.
var done = function(mymessage) {
    console.log(mymessage);
}

function fastFunction (done) {
    setTimeout(function () {
      done('fast function');
    }, 100)
  }
  
  function slowFunction (done) {
    setTimeout(function () {
      done('slow function');
    }, 300)
  }

  fastFunction(done);
  slowFunction(done);
////////////////////////////////////


// Trying to run sequentially with call back
function runSequentially (callback) {
    fastFunction((msg) => {
        console.log('sequential ' + msg);  
    
        slowFunction((msg) => {
            console.log('sequential ' + msg); 
    
        // here you can continue running more tasks
      });
    });
}

var testCallback = function (err) {
    console.log('this is callback ' + err);
}

runSequentially(testCallback);
/////////////////////////////////////////////////


//Simple example of callback.
var myCallback = function(data) {
  console.log('got data: '+data);
};

var usingItNow = function(callback) {
  callback('get it?');
};

usingItNow(myCallback);
/////////////////////////////////////////////////


// Example of using Async
async.waterfall([
    async.apply(myFirstFunction, 'zero'),
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    console.log('async is done'); // result now equals 'done'
});
function myFirstFunction(arg1, callback) {
    // arg1 now equals 'zero'
    callback(null, 'one', 'two', 'three'); // The parameters are passed to the mySecondFunction, so arg1, arg2, arg3.
    console.log('myfirstfunction');
}
function mySecondFunction(arg1, arg2, arg3, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
    console.log('mysecondfunction');
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
    console.log('mylastfunction');
}
//////////////////////////////////////////////////
