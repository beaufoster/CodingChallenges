// Description:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"


function divisors(integer) {
  let arr =[]

  if(integer% 2 !== 0 && integer % 3 !== 0 && integer > 1 ){
    return `${integer} is prime`

  }else{
    for(let i = 2; i < integer; i++){
      if(integer % i === 0){
       arr.push(i)
      }
  }
  return arr
  }

}

// function divisors(integer) {
//   var res = []
//   for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + ' is prime'
// };

// above solution finds the prime numbers


console.log(divisors(15), [3, 5])
console.log(divisors(12), [2, 3, 4, 6])
console.log(divisors(13), "13 is prime")
