// Description:
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// My solution below does not work
// function dontGiveMeFive(start, end)
// {
//   let arr = []
//   for(let i = start; i <= end; i++){
//     arr.push(i)
//   }
//   for(let i = 0; i < arr.length; i ++){
//     if((arr[i] + '').includes(5)){
//       arr.splice(arr[i-1],1)
//     }
//   }
//   console.log(arr)
//   return arr.length

// }

function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}


console.log(dontGiveMeFive(1,9), 8)
console.log(dontGiveMeFive(4,17), 12)
