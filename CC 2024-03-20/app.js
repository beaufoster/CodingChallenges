// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!


function arithmetic(one, two, three){
    switch(three){
        case 'add':
            return one + two;
            break;
        case 'subtract':
            return one - two;
            break;
        case 'multiply':
            return one * two;
            break;
        case 'divide':
            return one/two;
            break
    }
}

console.log(arithmetic(1, 2, "add"), 3)
console.log(arithmetic(8, 2, "subtract"), 6)
console.log(arithmetic(5, 2, "multiply"), 10)
console.log(arithmetic(8, 2, "divide"), 4)
