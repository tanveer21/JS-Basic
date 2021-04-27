// what are the three ways to declare object in javascript



// 1. Object Literal Syntax
const ObjFirst = {
    "name": "Max",
    "age": 25,
    "course": "B.com"
}
console.log('First Method ==>', ObjFirst);


// 2. Using New keyword and Object Constructor
const objSecond = new Object();
objSecond.name = "Martha";
objSecond.age = 34;
objSecond.course = "B-Tech";
console.log('Second Method ==>', objSecond);



// 3. Using function constructor ( complex but makes reuseable objects )
function student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

student.prototype.getCourse = function () {
    return this.course;
}

const objThirdMikkel = new student("mikkel", 23, 'Bsc');
const objThirdEliz = new student("eliz", 32, 'Mcom');

console.log('Third Method', objThirdMikkel);
console.log(objThirdEliz.getCourse());