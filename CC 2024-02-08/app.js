// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function sumOfArrays(one, two){
    let firstSum = one.reduce((acc, cum) => acc + cum, 0)

    let secondSum = two.reduce((acc, cum) => acc + cum, 0)

    return firstSum + secondSum
}

console.log(sumOfArrays([1, 2, 3], [4, 5, 6]), 21)
console.log(sumOfArrays([-1, -2, -3], [-4, -5, -6]), -21)
console.log(sumOfArrays([0, 0, 0], [4, 5, 6]), 15)
console.log(sumOfArrays([100, 200, 300], [400, 500, 600]), 2100)
