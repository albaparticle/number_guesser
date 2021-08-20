let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userNum, compNum, targetNum) {
  if (userNum >= 0 && userNum <= 9) {
    let userGuess = Math.abs(userNum - targetNum);
    let compGuess = Math.abs(compNum - targetNum);
    console.log(userGuess);

    if (userGuess < compGuess) {
      return true;
    }
  } else {
    alert('Input is out of range. Accepted numbers are only 0 - 9.');
  }  
}

function updateScore(winner) {
  switch (winner) {
    case 'human':
      humanScore += 1;
    case 'computer':
      computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
