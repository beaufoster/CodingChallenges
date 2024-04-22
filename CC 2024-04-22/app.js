// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



const endsWith = (a, b) => a.endsWith(b) ? true : false



console.log(endsWith('abcde', 'cde'))
console.log(endsWith('abcde', 'abc'))
