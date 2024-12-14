let humanScore = 0;
let computerScore = 0;
/* create function  named getComputerChoice to generate a number between 1 - 3 and return a string value of either rock paper or scissors */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
computerChoice = "rock";
return computerChoice;
    } else if (computerChoice === 2) {
computerChoice = "paper";
return computerChoice;
    } else {
computerChoice = "scissors";
return computerChoice;
    }
}
/* create function named getUserChoice to prompt the user to input an option of rock paper or scissors and return a number value between 1 - 3 */
function getHumanChoice() {
    while (true) {
let humanChoice = prompt("Enter rock, paper or scissors.").toLowerCase();
if ((humanChoice === "rock") || (humanChoice === "paper") || (humanChoice == "scissors")) {
    return humanChoice;
} else {alert("Invalid entry")}
} 
}

/* create function to compare humanChoice and computerChoice and declare a round winner*/
function playRound(computerChoice, humanChoice) {
   if (computerChoice === humanChoice) {
    alert("The round is a draw.");
   } else if (
    (computerChoice === "rock" && humanChoice === "paper") || 
          (computerChoice === "paper" && humanChoice === "scissors") || 
           (computerChoice === "scissors" && humanChoice === "rock")
        ) {
           alert(`You win! ${humanChoice} beats ${computerChoice}.`)
           humanScore++
    } else {
           alert(`You lose! ${computerChoice} beats ${humanChoice}.`)
           computerScore++
    } 
    console.log(`Computer score ${computerScore}. Your score ${humanScore}.`);
}
function playGame() {
    while ((computerScore < 3) && (humanScore < 3)) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }
    if (humanScore === 3) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}
  
