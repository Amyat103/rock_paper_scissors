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
        let computerSelection = getComputerChoice();
        let playerSelection = window.prompt("Rock, Paper or Scissors?")
        let roundResult = playRound(playerSelection, computerSelection);
        /* if statement to incriment */
        if (roundResult.includes("You Win")) {
            playerScore++;
        }
        else if (roundResult.includes("You Lose")) {
            computerScore++;
        }
    }
    finalScore = "RESULT: You scored: " + playerScore + ". Computer scored: " + computerScore;
    alert(finalScore);
}

