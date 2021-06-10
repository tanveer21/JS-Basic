'use strict'

function add(a, a, b) {
    console.log(a, a, b);
}


console.log(add(2, 3, 4));



// console value with and without use strict
// fail fast and fail loudly

/*
Benefits of using Use strict 
- Makes Debugging Easier
- Prevents accidental globals
- Eliminates this coercion
- Dissallows duplicate parameters value
- makes eval() safer
- throws error on invalid usage of delete
         The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

*/