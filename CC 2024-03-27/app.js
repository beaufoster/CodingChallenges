// Description:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(length){
  let price = length * 40
  if(length >= 7){
    return price - 50
  }else if(length>= 3){
    return price - 20
  }else{
    return price
  }
}

console.log(rentalCarCost(1), 40)
console.log(rentalCarCost(2), 80)
console.log(rentalCarCost(3), 100)
console.log(rentalCarCost(4), 140)
console.log(rentalCarCost(5), 180)
console.log(rentalCarCost(6), 220)
console.log(rentalCarCost(7), 230)
console.log(rentalCarCost(8), 270)
console.log(rentalCarCost(9), 310)
console.log(rentalCarCost(10), 350)
