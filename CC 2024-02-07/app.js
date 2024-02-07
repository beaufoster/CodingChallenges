// Description:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divide(array, div){
    let arr = []
    array.forEach(element => {
        if(element % div === 0){
            arr.push(element)
        }

    });
    return arr
}

console.log(divide([1,2,3,4,5,6], 2), 2, 4, 6)
console.log(divide([1,2,3,4,5,6], 3), 3, 6)
console.log(divide([0,1,2,3,4,5,6], 4), 0, 4)
console.log(divide([1, 3, 5], 2), [])
console.log(divide([0], 4), 0)
