

// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = window.prompt("Rock, Paper or Scissors?")
//         let roundResult = playRound(playerSelection, computerSelection);
//         /* if statement to incriment */
//         if (roundResult.includes("You Win")) {
//             playerScore++;
//         }
//         else if (roundResult.includes("You Lose")) {
//             computerScore++;
//         }
//     }
//     finalScore = "RESULT: You scored: " + playerScore + ". Computer scored: " + computerScore;
//     alert(finalScore);
// }

// TODO:
// add listener for all 3 choices
// put listener to listen to div's value
// call function to play
// 

let playerScore = 0;
let computerScore = 0;

const allButton = document.getElementById("choiceDiv")

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    
    if (num == 1) {
        return "Paper";
    }
    else if (num == 2) {
        return "Rock";
    }
    else {
        return "Scissors";
    }
}

// set refrence of result div to append result, and counter
const showResult = document.querySelector(".result");
const countDiv = document.querySelector(".counter");
// creating h3 for result
const eachResult = document.createElement("h3");
// creating h2 for count
const scoreCount = document.createElement("h2");

// play everytime its clicked, and add result
allButton.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        const userChoice = e.target.getAttribute("value");
        let computerSelection = getComputerChoice();
        let roundRes = playRound(userChoice, computerSelection);

        // add result text into h3
        eachResult.textContent = roundRes;
        // append h3 div so it shows on website
        showResult.appendChild(eachResult);

        // update counters
        scoreCount.textContent = "Player Score: " + playerScore + "| Computer Score: " + computerScore;
        // append to div
        countDiv.appendChild(scoreCount);

        // alert if com or player reach 5
        if (playerScore >= 5) {
            alert("YOU WIN!");
        } else if (computerScore >= 5) {
            alert("YOU LOSE!")
        }
    } 
})



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    if (playerSelection == computerSelection) {
        return "Tie!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You Lose! Scissors beats Rock";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
}

