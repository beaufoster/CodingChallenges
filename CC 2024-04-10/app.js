// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
    let count = 0
    // str = str.lowerCase()
    str.split('').map((letter) => {
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            count ++
        }
    })
    return count

  }



  console.log(getCount("abracadabra"), 5)
