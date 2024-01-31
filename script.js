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


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    if (playerSelection == computerSelection) {
        return "Tie!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else {
        return "You Lose! Rock beats Scissors";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = "rock"
        console.log(playRound(playerSelection, computerSelection));
    }
}