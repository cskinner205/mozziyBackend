const numbers = [1, 2, 3, 4, 5];

// Using reduce to find the sum
const sum = numbers.reduce(function (accumulator, currentNumber) {
  // The accumulator is the running total, and currentNumber is the current element in the array.
  console.log("currentNumber",currentNumber)
  console.log("accumulator",accumulator)
  return accumulator + currentNumber;

}); // 0 is the initial value of the accumulator

console.log(sum); // Outputs: 15