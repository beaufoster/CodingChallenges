// Description:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


var capitals = function (word) {
  let uppers = []
  for(let i = 0; i < word.length; i++){
    if(word[i].toUpperCase() === word[i]){
      uppers.push(i)
    }
  };
  return uppers
};

console.log(capitals('CodEWaRs'), [0,3,4,6])
console.log(capitals('aAbB'), [1,3])
console.log(capitals('AAA'), [0,1,2])
console.log(capitals(''), [])
