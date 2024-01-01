// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function double(array){
    if(array.length === 0){
        console.log('Invalid Error')
    }else{
        return array.map(num => num * 2)
    }
}

console.log(double([1,2,3]))
