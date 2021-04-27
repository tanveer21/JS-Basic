function logNumbers() {
    console.log(5);
    setTimeout(function () { console.log(6) }, 1000);
    setTimeout(function () { console.log(9) }, 0);
    console.log(7);
}


// tell the sequence in which numbers will get console
logNumbers();