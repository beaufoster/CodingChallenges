// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese


const bmi = (weight, height) => {
    let total = weight/Math.pow(height, 2)
    console.log(total)

    if(total <= 18.5){
        return 'Underweight';
    }else if(total <= 25.0){
        return 'Normal';
    }else if(total <= 30.0){
        return 'Overweight';
    }else{
        return 'Obese';

    }
}


console.log(bmi(50, 1.80), "Underweight")
console.log(bmi(80, 1.80), "Normal")
console.log(bmi(90, 1.80), "Overweight")
console.log(bmi(100, 1.80), "Obese")
