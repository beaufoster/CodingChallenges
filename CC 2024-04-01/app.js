// Description:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr =[]
  for(let i = 1; i <= n; i++){
    console.log(i)
    arr.push(i)

}
return arr.reverse()
}

console.log(reverseSeq(5))
