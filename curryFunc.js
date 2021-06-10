function getProduct(num1, num2) {
    return num1 * num2;
}

// curry the above function ???

// ************** curried version
function getProductCurry(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

console.log(getProduct(3, 2));
console.log(getProductCurry(3)(2));


// what benefit we get from currying a function 
function getPercentage(maxMarks) {
    return function (minMarks) {
        return minMarks / maxMarks * 100;
    }
}
const ncertPercentage = getPercentage(100);
const icsePercentage = getPercentage(150);

console.log('student ncert prcnt is===>', ncertPercentage(85));
console.log('student icse prcnt is===>', icsePercentage(85));