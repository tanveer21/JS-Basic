var x = 10;

function y() {
    x = 100;
    return;
    function x() { } // hoisted at top
}

y();

console.log(x);