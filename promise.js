let testPromise = new Promise(function (resolve, reject) {
    let sucessFlag = true; 
    if (sucessFlag) {
      //invoke resolve function passed

      resolve("success promise completed");
    } else {
      reject("ERROR , work could not be completed");
    }
})