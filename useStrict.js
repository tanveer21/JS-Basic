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