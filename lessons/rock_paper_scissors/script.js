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
    // "rock" beats scissors loses paper
    // "paper" beats rock loses scissors 
    // scissors beats paper loses rock 
    // 
        if (humanChoice === computerChoice) return "its a tie!";
        for (let item of human_wins){
            if (humanChoice === item[0] && computerChoice === item[1]) {
        return `human chose ${humanChoice} and computer chose ${computerChoice} human wins`;}}
    return `human chose ${humanChoice} and computer chose ${computerChoice} computer wins`};
    



const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
})