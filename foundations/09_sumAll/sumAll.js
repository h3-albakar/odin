const sumAll = function(val_1, val_2) {
    if (val_1 === val_2) return val_1
    original_arr = [val_1, val_2]
    for (num of original_arr) {
        if (Number.isInteger(num) == false) return "ERROR";
        else if (num < 0) return "ERROR";
    }
    sorted_arr = original_arr.sort((a,b) => (b-a));
    uncompress_arr = [];
    for (i = sorted_arr[1]; i <= sorted_arr[0]; i++) {
        uncompress_arr.push(i);}
    final_arr = uncompress_arr.reduce((acc, val) => acc + val);
    return final_arr
};

console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
