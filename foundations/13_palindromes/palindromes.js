
function cleanUp(str){
    let new_str = "";
    str = str.toLowerCase();
    for (let i = 0; i <= str.length -1; i++) {
        if (/[a-z0-9]/i.test(str[i])){
            new_str += str[i]
        }
    }
   return new_str; 
}
const palindromes = function (str) {
    str = cleanUp(str);
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        let otherside_count = str.length - 1;
        if (str[i] != str[otherside_count - i]) { 
            return false;
        }
    }
    return true;
};

// palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
