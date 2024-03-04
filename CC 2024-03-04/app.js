// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

const average = array => {
    let sum =array.reduce((acc, cum) => acc + cum, 0)
    sum = sum/array.length
    return sum
}
console.log(average([1,1,1]), 1)
console.log(average([1,2,3]), 2)
console.log(average([1,2,3,4]), 2.5)
