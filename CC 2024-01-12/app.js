// Description:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function stopLight(color){
  switch (color){
    case 'green':
      return 'yellow'
      break;
    case 'yellow':
      return 'red'
      break;
    case 'red':
      return 'green'
      break;
    default:
      return 'red'
  }
}

console.log(stopLight('red'), ['green'])
console.log(stopLight('yellow'), ['red'])
console.log(stopLight('green'), ['yellow'])
