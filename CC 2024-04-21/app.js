// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


function getMiddle(s)
{
  let middle = s.length/2

  if(s.length % 2){
    return s.charAt(middle)
  }else{
    return s.slice(middle - 1, middle + 1)
  }
  //Code goes here!
}


console.log(getMiddle("test"), "es")
console.log(getMiddle("testing"), "t")
console.log(getMiddle("middle"), "dd")
console.log(getMiddle("A"), "A")
