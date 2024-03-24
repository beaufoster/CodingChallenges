// Description:
// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


const countingSheep = sheep => {
  let total = ''
  for(let i = 1; i <= sheep; i++){
    total +=`${i} sheep...`
  }
  return total
}

console.log(countingSheep(3))
console.log(countingSheep(5))
console.log(countingSheep(1))
