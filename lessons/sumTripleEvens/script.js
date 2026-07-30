arr = [1,2,3,4];

function sumTripleEvens(arr) {
    return arr.map((item) => item * 3)
       .filter((item) => item % 2) 
       .reduce((item, acc) => acc + item)
}

console.log(sumTripleEvens(arr));