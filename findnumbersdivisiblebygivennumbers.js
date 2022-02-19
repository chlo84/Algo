// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
    let output = [];
    for(let i = 0; i < numbers.length; i++){
      console.log(numbers);
      if(output[i] % divisor === 2){
        console.log(numbers);
        if(output[i] % numbers === 2){
          output[i] /= divisor; 
        }
      }
    }
    return output;
  }