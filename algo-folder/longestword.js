// Complete the function that takes one argument, a list of words(words),  
// and returns the length of the longest word in the list.

// create a variable that will keep the length of the string
// loop over the list (words)
// condition if the first index of words is greater than output(0)
// set output = to the length of words
// return output

function longest(words) {
    let output = 0; 
    for(let i = 0; i < words.length; i++){
  //      console.log(words)
        if(words[i].length > output)
          output = words[i].length 
    }
    
    return output; 
  }