function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    
    if (num == 1) {
        return "Paper"
    }
    else if (num == 2) {
        return "Rock"
    }
    else {
        return "Scissors"
    }
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    firstLetter = playerSelection.at(0);
    secondLetter = playerSelection.toLowerCase().slice(1);
    playerSelection = first + secondLetter;
    if (playerSelection == getComputerChoice) {
        return "Tie!"
    }
    else if (playerSelection == "rock" && getComputerChoice == "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && getComputerChoice == "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors" && getComputerChoice == "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "Paper" && getComputerChoice == "Scissors") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Rock" && getComputerChoice == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else {
        return "You Lose! Rock beats Scissors";
    }

}
