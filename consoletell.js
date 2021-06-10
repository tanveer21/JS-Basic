console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

console.log('===========================================')

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
console.log(false == '0')
console.log(false === '0')

// 122
// 32
// 02
// 112
// NAN2
// NAN
// 1
// 1
// 0
// 2









console.log('============================================================')

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

/*
The first statement returns true which is as expected.
The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.
*/