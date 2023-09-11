 const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
   const choice = options[Math.floor(Math.random() * 3)];
   return choice;
} 

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
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
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie!') {
        return "It's a Tie!";
    }
    else if (result == 'Player') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let playerInput = false;
    while (playerInput == false) {
       const choice = prompt('Rock Paper Scissors?');
       if (choice == null) {
            continue;
       }
       const choiceInLower = choice.toLowerCase();
       if (options.includes(choiceInLower)) {
            playerInput = true;
            return choiceInLower;
       }
    }
}



function game() {   
        for (let score = 0; score < 5; score++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }   
}
game()
    

