// Description:

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
// If you liked this Kata there is another related one here

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0
    let dogYears = 0

    if(humanYears === 1){
      catYears = 15
      dogYears = 15
    }else if(humanYears === 2){
      catYears = 24
      dogYears = 24
    }else{
      catYears = 24 + ((humanYears - 2) * 4)
      dogYears = 24 + ((humanYears - 2) * 5)
    }

    const age = [humanYears, catYears, dogYears]
    return age
  }

console.log(humanYearsCatYearsDogYears(1), [1,15,15])
console.log(humanYearsCatYearsDogYears(2), [2,24,24])
console.log(humanYearsCatYearsDogYears(10), [10,56,64])
