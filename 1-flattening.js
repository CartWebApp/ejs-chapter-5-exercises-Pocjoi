let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function reduce(arrays, combine, start) {
    let current = start;
    for (let element of arrays) {
        current=combine(current,element);
    }
    return current;
}
console.log(reduce([1, 2, 3], [4, 5], [6]))
// → [1, 2, 3, 4, 5, 6]