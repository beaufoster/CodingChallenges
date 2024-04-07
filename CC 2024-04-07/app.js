// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


// function doubleChar(str) {
//   // Your code here
//   let arr = str.split('')
//   let repeat =[]
//   arr.forEach(element => {
//     repeat.push(element.repeat(2))

//   });
//   return repeat.join('')

// }

const doubleChar = str => str.split('').map(c => c + c).join('')


console.log(doubleChar("abcd"), "aabbccdd")
console.log(doubleChar("Adidas"), "AAddiiddaass")
console.log(doubleChar("1337"), "11333377")
console.log(doubleChar("illuminati"), "iilllluummiinnaattii")
console.log(doubleChar("123456"), "112233445566")
console.log(doubleChar("%^&*("), "%%^^&&**((")
