// Description:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function math(str, num1, num2){
  switch (str) {
    case '+':
      return num1 + num2
      break;
    case '-':
      return num1-num2
      break;
    case '*':
      return num1 * num2
      break;
    case '/':
      return num1 / num2
    default:
      return '0'
  }
}

console.log(math('+', 4, 7), [11])
console.log(math ('-', 15, 18), [-3])
console.log(math ('*', 5, 5), [25])
console.log(math ('/', 49, 7), [7])
