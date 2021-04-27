// How do you clone an object?
var obj = {
    name: "Peter",
    age:34,
    marks: {
        english: 45,
        maths: 55
    }
 };
var obj2 = Object.assign({}, obj);
obj2.name= "Max";
obj2.marks.english = 99;

console.log(obj2)
console.log(obj)



/* Explanation:
Now the value of obj2 is same but points to a different object than obj.
Note the potential pitfall, though: Object.assign() will just do a shallow copy, not a deep copy. This means that nested objects aren’t copied. They still refer to the same nested objects as the original
*/