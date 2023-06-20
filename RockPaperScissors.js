const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('');
      break;
  }
}
//console.log(getComputerChoice());

function determineWinner(getUserChoice, getComputerChoice) {
  if (getUserChoice === getComputerChoice) {
    return 'The game is a tie!';
  } else if (getUserChoice === 'rock' && getComputerChoice === 'scissors' || getUserChoice === 'scissors' && getComputerChoice === 'paper' || getUserChoice === 'paper' && getComputerChoice === 'rock' || getUserChoice === 'bomb') {
    return 'You won!';
  } else {
    return 'The computer won!';
  }
}

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
/* Input:
You threw: bomb
The computer threw:rock
You won!
*/