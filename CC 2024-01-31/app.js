// Description:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function positiveOrNegative(array) {
  let count = 0;
  let negative = 0;
  if (array.length === 0 || array === null) {
    return [];
  } else {
    array.forEach((element) => {
      if (element > 0) {
        count++;
      } else {
        negative += element;
      }
    });
    return [count, negative];
  }
}

console.log(
  positiveOrNegative(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
    [10, -65]
  )
);
