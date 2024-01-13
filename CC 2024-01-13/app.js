// Description:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function thirdAngle(ang1, ang2){
  if(ang1 > 0 && ang2 > 0){
    return 180 - (ang1 + ang2)
  }else{
    return 0
  }
}

console.log(thirdAngle(30, 60),[90])
console.log(thirdAngle(60,60),[60])
console.log(thirdAngle(43, 78),[59])
console.log(thirdAngle(10, 20),[150])
