// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

const playing = name => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`

console.log(playing('Adam'), 'Adam does not play banjo')
console.log(playing('Paul'), 'Paul does not play banjo')
console.log(playing('Ringo'), 'Ringo does play banjo')
console.log(playing('bravo'), 'bravo does not play banjo')
console.log(playing('rolf'), 'rolf does not play banjo')
