// Description:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


const difference = (arr1, arr2) => {
  let first = arr1.reduce((acc, cum) => acc * cum, 1)
  let second = arr2.reduce((acc, cum) => acc * cum, 1)

  if(first > second){
    return first - second
  }else if(second > first){
    return second - first
  }else{
    return 0
  }
}

console.log(difference([3, 2, 5], [1, 4, 4]), 14)
console.log(difference([9, 7, 2], [5, 2, 2]), 106)
console.log(difference([11, 2, 5], [1, 10, 8]), 30)
console.log(difference([15, 20, 25], [10, 30, 25]), 0)
