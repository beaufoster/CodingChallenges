// Description:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"


function combine (one, two){
    if(one.length > two.length){
        return two + one + two
    }else if(one.length < two.length){
        return one + two + one
    }else{
        return 'Error'
    }
}


console.log(combine('1', '22'), '1221')
console.log(combine('22', '1'), '1221')
