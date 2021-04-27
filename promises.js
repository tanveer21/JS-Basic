const promiseObj = new Promise(function(resolve, reject) {
    reject(5);
})

promiseObj
.then(function(res) {
console.log('=====>', res);
return 6;
})
.catch(function(err) {
console.log('1catch', err);
})
.then(function(res) {
console.log('res', res);
return 6;
})
.catch(function(err) {
console.log('sssssss', err);
})



