const reverseString = function(str) {
    let reversed = "";
    for (let i = str.length -1; i >= 0; i--) {
        console.log(`this is the value of ${str[i]} at index ${i}`);
        reversed += str[i]
    }
    return reversed
};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
