/* create function  named getComputerChoice to generate a number between 1 - 3 and return a string value of either rock paper or scissors */
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
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
function getHumanChoice() {
let humanChoice = prompt().toLowerCase();

}