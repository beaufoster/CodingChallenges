// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function reverse(number){
    return String(number).split('').reverse().map(Number)
}

console.log(reverse(35231))


// git method to update github and backdate
// git add.
// git commit -m 'Add coding challenge from month-day-year'
// git commit --amend --date='year-month-day'
// escape, :wq
// git push
