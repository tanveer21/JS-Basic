

this.name = "smaeyata";
const student = {
    "name": "Martha",
    "getName": function () {
        return this.name;
    }
}

const getName = student.getName;


// tell the value of console
console.log(getName());
console.log(student.getName());

//fix by using bind
const getName = student.getName.bind(student);