// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    let output = '';
    let vowels = 'aeiou';
    for(let i = 0; i < string.length; i++){
      let output2 = string[i]
      if(!vowels.includes(output2)) output += output2;
      }
    return output;
    }
  