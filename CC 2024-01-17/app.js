// Description:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

const returnInteger = (num, str) => {
     let string = ''
    for(let i =1; i <= num; i++){
        string += str
    }
    return string
}

console.log(returnInteger(6, 'I'), ['IIIIII'])
console.log(returnInteger(5, 'Hello'), ['HelloHelloHelloHelloHello'])
