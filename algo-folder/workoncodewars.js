// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):

function persistence(num) {
    //   turn number into a string 
    //   loop through the string while the length is less than 1 
    //   split it then map over the numeric value while multiplying each number by the one next to it
    //   then returned count

    
       let count = 0  
       num += ''
     
      while(num.length > 1){
        count++
        num = num.split('').map(Number).reduce((a,b) => a * b).toString()
      }
     return count;
    }
       

    // We want to create a function that will add numbers together when called in succession.
    // We also want to be able to continue to add numbers to our chain.
    // A single call should be equal to the number passed in.
    // We should be able to store the returned values and reuse them.
    // We can assume any number being passed in will be valid whole number.
    // add(1)(2); // 

    function add(n) {
      //   create a function that returns the recursion
        const addNums = function(next){
          return add(n + next)
          }
        
        addNums.valueOf = function(){
          return n
        }
      //   addNums is constantly adding the numbers together
        return addNums
       }
  