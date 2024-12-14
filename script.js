let humanScore = 0;
let computerScore = 0;
/* create function  named getComputerChoice to generate a number between 1 - 3 and return a string value of either rock paper or scissors */
let computerChoice;
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
computerChoice = "Rock";
    } else if (computerChoice === 2) {
computerChoice = "Paper";
    } else {
computerChoice = "Scissors";
    }
    return computerChoice;
}
/* create function named getUserChoice to prompt the user to input an option of rock paper or scissors and return a number value between 1 - 3 */
let humanChoice;
function getHumanChoice() {
humanChoice = prompt().toLowerCase();
switch (humanChoice) {
    case "rock":
    case "paper":
    case "scissors":
        case "roc":
            case "pape":
            case "scissor":
                return;
                break;
                default:
                    alert("Input invalid")

}
}
/* create function to compare humanChoice and computerChoice and declare a round winner*/
