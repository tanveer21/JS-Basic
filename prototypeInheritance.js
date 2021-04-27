 // Every Function has the prototype property even if we dont supply it
 // The default prototype is an object with the only property "contructor" that points back to the function itself
 // Arrow functions donot have prototype property. Its undefined by default.
 // Arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword. As such, a prototype property does not exist for an arrow function.


class student {}
function marks() {}
const books = () => {} 

function college() {
    this.name = "IIT";
    this.address= "India";
}
const clg = new college();
console.log(clg.__proto__);

console.log(student.prototype.constructor === student );
console.log(marks.prototype.constructor === marks );
// console.log(books.prototype.constructor === books );



