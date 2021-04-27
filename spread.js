const list1 = [1, 2, 3, 4, 5];
//const list2 = [...list1];
const list2 =list1

list1.push(6, 7, 8);


// tell console value and conscept behing
// passing by value and passing value by refrence -- diffrence
console.log(list2);





// Tell the console for these

let list1 = [1, 2, 3, 4, 5];
const list2 = list1;

list1 = [6, 7, 8];

console.log(list2);
console.log(list1);