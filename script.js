let humanScore = 0;
let computerScore = 0;
/* create function  named getComputerChoice to generate a number between 1 - 3 and return a string value of either rock paper or scissors */
let computerChoice;
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
computerChoice = "rock";
    } else if (computerChoice === 2) {
computerChoice = "paper";
    } else {
computerChoice = "scissors";
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
            humanChoice = "rock";
            break;
            case "pape":
                humanChoice = "paper";
            break;
            case "scissor":
                humanChoice = "scissors";
            break;
}
}
/* create function to compare humanChoice and computerChoice and declare a round winner*/
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
function playRound(computerChoice, humanChoice) {
    switch (computerChoice) {
        case "rock":
            switch (humanChoice) {
                case "rock":
                alert("The round is a draw.");
                break;
                case "paper":
                alert("You win! Paper beats rock.");
                ++humanScore;
                break;
                case "scissors":
                alert("You lose! Rock beats scissors.");
                ++computerScore;
                break;
                default:
                    alert("Input invalid.");
            }
        case "paper":
            switch (humanChoice) {
                case "rock":
                alert("You lose! Paper beats rock.");
                ++computerScore;
                break;
                case "paper":
                alert("The round is a draw.");
                break;
                case "scissors":
                alert("You win! Scissors beat paper.");
                ++humanScore;
                break;
                default:
                    alert("Input invalid.");
            }
        case "scissors":
            switch (humanChoice) {
                case "rock":
                alert("You win! Rock beats scissors.");
                ++humanScore;
                break;
                case "paper":
                alert("You lose! Scissors beat paper");
                ++computerScore;
                break;
                case "scissors":
                alert("The round is a draw.");
                break;
                default:
                    alert("Input invalid.");
            }
    }
}
