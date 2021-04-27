function getTotal(a, b = 0) {
    var args = Array.prototype.slice.call(arguments);
    if (args.length > 1) {
        console.log(args[0] + args[1]);
    } else {
        return function (b) {
            console.log(args[0] + b);
        }
    }
}


// write function to run when called in both ways
getTotal(10, 20);
getTotal(10)(90);