const promiseObj = new Promise(function(resolve, reject) {
    reject(5);
})

promiseObj
.then(function(res) {
return 6;
})
.catch(function(err) {
console.log(err);
})
.then(function(res) {
console.log(res);
return 6;
})
.catch(function(err) {
console.log(err);
})



