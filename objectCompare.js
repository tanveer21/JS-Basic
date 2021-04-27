const user1 = {
    name: 'Jordan',
    age: 28,
};

const user2 = {
    name: 'Jordan',
    age: 28,
};

console.log(user1 == user2); // false
console.log(user1 === user2); // false


// if we need to compare two objects , convert them to string as objects cannot be compared 

console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true

// strings are passed by value as they are primitive data types
// objects are refrence data types as they are passed by refrence