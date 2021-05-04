let testPromise = new Promise(function (resolve, reject) {
    let sucessFlag = true; 
    if (sucessFlag) {
      //invoke resolve function passed
      resolve("success promise completed");
    } else {
      reject("ERROR , work could not be completed");
    }
})


// Create a function that returns a Promise and resolve when calling the function.
const treasure = () => {
 return new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    success ? resolve("Hii this is resolved promise") : reject("Hii this is Rejected promise")
   }, 1000)
}) 
}

treasure().then(res => {
  console.log('Response ==', res)
}).catch(err => {
  console.log('Error ==', err)
}).finally(() => {
  console.log('final block')
}).then(res => {
  console.log('Response ==', res)
}).catch(err => {
  console.log('errrr bllock last')
})