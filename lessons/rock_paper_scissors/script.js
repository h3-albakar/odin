let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random() * choice.length);
    return choice[index];
} 

function getHumanChoice() {
    let choice = prompt("what are you choosing mate ?!");
    return choice;
}
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    // "rock" beats scissors loses paper
    // "paper" beats rock loses scissors 
    // scissors beats paper loses rock 
    // 
    human_wins = [["Rock", "Paper"], ["Paper","Scissors"], ["Scissors", "Paper"]]
        if (humanChoice === computerChoice) return "its a tie!";
        for (let i = 0; i < human_wins.length - 1; i++){
            if (humanChoice === human_wins[i][0] && computerChoice === human_wins[i][1]) {
        return `human chose ${humanChoice} and computer chose ${computerChoice} human wins`;}
    else return `human chose ${humanChoice} and computer chose ${computerChoice} computer wins`}};
    



const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(playRound());
})