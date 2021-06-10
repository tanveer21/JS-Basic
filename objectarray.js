var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
// answer==> console.log(10*9*8*7*6*5*4*3*2*1)



(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);



/*** Explanation:
 * The output of this code will be 456 (not 123).
The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

 */