// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Are you ever given an empty array or undefined? What then? Are you always given digits

//Whatever number was given, it is now split up into an array and the order of the numbers is reversed

// If we were given 9128=> [8,3,2,9]

// Make a function that takes in a number

function reverseArray(num){
    // make number a string and split, reverse, put in array
    return String(num).split('').reverse().map(Number)
}


console.log(reverseArray(9238))
