// Description:
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function double(father, son){
    // check if father is older or younger than twice his sons age
    if(father/son >= 2){
        // return at what age father was double sons age
        return father - 2*son
    }else if(son >= father){
        return 'Error, son can"t be the same age or older than the father'
    }else{
        // return at what age father will be double sons age
        return (2 * son) - father

    }
}

console.log(double(20,30), 'Error')
console.log(double(38,20), '2')
console.log(double(50,30), '10')
console.log(double(30,10), '10')
