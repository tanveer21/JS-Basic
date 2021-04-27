/*
* Palindrome: a word, phrase, number, or other sequence of symbols or elements,
* whose meaning may be interpreted the same way in either forward or reverse direction.
*/


function palindrome(str) {
    //str = str.replace(/\W/g, '').toLowerCase();
    const tempStr = str.split("").reverse().join('');
    return (str === tempStr)
}
console.log(palindrome("JKJ"))