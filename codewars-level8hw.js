function removeExclamationMarks(s) {
  
  return s.replace ("!",'');
}

function isDivideBy(number, a, b) {
  if(number % a !== 0){
    return false
  }
  if(number % b !== 0){
    return false
  }
  return true
}

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length -1] ===
    dish[dish.length -1] ? true : false;

}

const rps = (p1, p2) => {
   if (p1 === p2) {
    return `Draw!`;
  }
  if (p1 === 'rock' && p2 === 'scissors') {
    return `Player 1 won!`;
  } else if (p1 === 'paper' && p2 === 'rock') {
    return `Player 1 won!`;
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }

};

