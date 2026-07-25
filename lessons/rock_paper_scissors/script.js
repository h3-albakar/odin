let humanScore = 0;
let computerScore = 0;

const available_choices = ["Rock", "Paper", "Scissors"];
const human_wins = [["Rock", "Scissors"], ["Paper","Rock"], ["Scissors", "Paper"]];
function getComputerChoice() {
    let index = Math.floor(Math.random() * available_choices.length);
    return available_choices[index];
} 

function getHumanChoice() {
    let choice = prompt("what are you choosing mate ?!");
    return choice;
}
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) return "its a tie!";
        for (let item of human_wins){
            if (humanChoice === item[0] && computerChoice === item[1]) {
                humanScore += 1;
                return `human wins`;}}
    computerScore += 1;
    return `computer wins`};
    
const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
})