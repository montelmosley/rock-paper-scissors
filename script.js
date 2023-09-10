const options = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
} 

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection = computerSelection) {
        return 'Tie!';
    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') 
    ) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    const result = checkwinner(playerSelection, computerSelection);
    if (result == 'Tie!') {
        return "It's a Tie!";
    }
    else if (result == 'Player') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
getComputerChoice()


