// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


const multiply = array => array.reduce((acc, cur) => acc * cur, 1)

console.log(multiply([1,2,3]), 6)
console.log(multiply([4,1,1,1,4]), 16)
console.log(multiply([2,2,2,2,2,2]), 64)
