// Description:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// function odd(number){
//   let oddNumbers = []
//   for(let i = 1; i < number; i++){
//     if(i % 2 !== 0){
//       oddNumbers.push(i)
//     }
//   }
//   return oddNumbers.length
// }

const odd = number => Math.floor(number/2)

console.log(odd(7), 3)
console.log(odd(15), 7)
console.log(odd(15023), 7511)
