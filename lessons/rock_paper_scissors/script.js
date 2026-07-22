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

    if ((humanChoice === "Rock") && (computerChoice === "Paper")) {
        return "human wins";}
    else return "undefinded" 
    }



const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(playRound());
})