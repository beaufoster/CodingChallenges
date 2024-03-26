// Description:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function average(one, two, three){
  let grade = (one+two+three) / 3
  if(grade >= 90){
    return 'A'
  }else if(grade >= 80 ){
    return 'B'
  }else if(grade >= 70 ){
    return 'C'
  }else if(grade >= 60 ){
    return 'D'
  }else{
    return 'F'
  }
}

console.log(average(95,90,93), 'A')
console.log(average(100,85,96), 'A')
console.log(average(92,93,94), 'A')
console.log(average(70,70,100), 'B')
console.log(average(89,89,90), 'B')
console.log(average(70,70,70), 'C')
console.log(average(75,70,79), 'C')
console.log(average(65,70,59), 'D')
console.log(average(66,62,68), 'D')
console.log(average(44,55,52), 'F')
console.log(average(48,55,52), 'F')
