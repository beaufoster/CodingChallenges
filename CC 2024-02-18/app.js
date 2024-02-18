// Description:
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34


const inverse = number => number >0 || number <0 ? -1 * number : 0

console.log(inverse(34), -34)
console.log(inverse(1), -1)
console.log(inverse(0), 0)
console.log(inverse(4.25), -4.25)
console.log(inverse(3.3333333), -3.3333333)
