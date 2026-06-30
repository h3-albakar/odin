const removeFromArray = function(arr, ...valuesToRemove) {
    for (let value of valuesToRemove) {
        while (arr.indexOf(value) !== -1) {
        let ind = arr.indexOf(value);
        arr.splice(ind, 1);
    }}
    return arr };
console.log(removeFromArray([1,2,3,4], 3));
// Do not edit below this line
module.exports = removeFromArray;
