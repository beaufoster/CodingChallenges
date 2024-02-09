// Description:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function remove(array){

    return array.filter((value, index) => array.indexOf(value) == index)

  }

console.log(remove([1]), [1])
console.log(remove([1,2]), [1,2])
console.log(remove([1,1,2]), [1,2])
