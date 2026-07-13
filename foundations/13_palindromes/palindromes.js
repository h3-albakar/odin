
function cleanUp(str){
    new_str = "";
    for (let i = 0; i <= str.length -1; i++) {
        if (/[a-z0-9]/i.test(str[i])){
            new_str += str[i]
        }
    }
   return new_str; 
}
console.log(cleanUp('Bob lee'));
const palindromes = function (str) {
    // a string[4] => str[0] == str[3] || str[1] == str [2]
    // n = first index (n) || string[4] ==> str[n (0)] == str[(str.length -1)- n) (4-1 = 3)]
    //                                  ==> str[n+1 (1)] == str[str.length - n = 4-1]
    // a string[6] => str[0] == str[5] || str[1] == str [4] || str[2] == str[3]
    // n = first index (n) || string[5] ==> str[n (0)] == str[(str.length -1)- n) (5-1 = 4)]
    //                                  ==> str[n+1 (1)] == str[str.length - n = 4-1]
    // we have to pre process the string before we add it onto the test, this should contain the following cases: 
    // 1. whitespace both in the beginning and the middle of words (trim?) 
    // 2. punctuation which I am not sure how to cancel  
    // for (let i = 0; i < str.length - 1; i++) {
    //     otherside_count = str.length - 1;
    //     if (str[i] == str[otherside_count - i]) return console.log(`the string "${str}" is a palindrome`);
    //     else console.log("ERROR");

    // /[a-z0-9]/i.test(letter);
    // str.map((letter, index) => {
    //     if (letter == " " || letter == "." || letter == "," || letter == "!" || letter == "?"){
    //         str[index] = "";
    //         // continue}})
    for (let i = 0; i < str.length - 1; i++) {
        let element = str[i];
        otherside_count = str.length - 1;
        if (str[i] != str[otherside_count - i]) { 
            return false
    return true;
}}};

palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
