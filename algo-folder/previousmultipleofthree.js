// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Reworded: Given a positive number, remove the last digit until I am left with a number that is multiple of three.
// return n if the number is already a multiple of three, if non return null or neg 1.

const prevMultOfThree = n => {
// create a variable that sets n as a string and splits the string
// create a nested for loop through the new variable's ('') length to check if the number is multiple of three. Nested because we need to check the front and the end of n. THE SECOND FOR LOOP SHOULD BE I-1 TO GET THE LAST DIGIT OF THE ARRAY.
// create a variable that turns the string back into a digit(number) and join the string
// write an if statement that states if num divided by 3 is strickly equal to 0 then return that number
// used .pop method to remove the last digit from the string and return that last digit if there is no number that is divisable by 3 then return null.

let output = n.toString().split('');
for(let i = 0; i < output.length; i++){
  for(let x = 0; i < output.length; i-1){
   let num = +output.join('')
    if(num % 3 === 0) return num
    output.pop()
  }
  return null;
}
}


