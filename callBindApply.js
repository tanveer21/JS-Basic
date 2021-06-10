const student = {
    name: "Tanu",
    desc: function (age, subject, sport) {
        return ` Hii i am ${this.name}. My Age is ${age} and 
    i have total ${subject} subjects
    and interedsted in playing ${sport}`;
    }
}

const student2 = {
    name: 'Ankita'
}


// Give example of call aplly bind
console.log(student.desc.call(student2, 2, 5, 'cricket'));
console.log(student.desc.apply(student2, [2, 5, 'cricket']));
console.log(student.desc.bind(student2, 2, 5, 'cricket')());