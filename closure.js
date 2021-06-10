
function track() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

// write a function that keeps track of how many times it is called

const instance1 = track(); // making an instance doesnot reset the value of count 
const instance2 = track();


console.log('instance1', instance1());
console.log('instance1', instance1());
console.log('instance1', instance1());
console.log('instance2', instance2());