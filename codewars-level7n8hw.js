// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    let output = string.split(' ');
    for(let i = 0; i < string.length; i++){
      let output2 = string[i].toLowerCase();
      if (output == "a" || output == "e" || output == "i" || output == "o" || output == "u"){
       return output[i] = '';
      }
    }
    return output.join('');
  }
