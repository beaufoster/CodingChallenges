// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(num){
    if(num === 0){
        console.log('Number is 0')
    }else if(num % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}

evenOdd(0)
