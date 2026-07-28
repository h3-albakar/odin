const available_choices = ["Rock", "Paper", "Scissors"];
const human_wins = [["Rock", "Scissors"], ["Paper","Rock"], ["Scissors", "Paper"]];

let humanScore = 0;
let computerScore = 0;
let humanSelection = '';
let computerSelection = '';

function getComputerChoice() {
    let index = Math.floor(Math.random() * available_choices.length);
    return available_choices[index];
} 

function playRound(humanChoice, computerChoice) {
  // If both human choice and computer are the same return early
  if (humanChoice === computerChoice) return "its a tie!";
       // otherwise move through every item and check if they are the same as what you have
       for (let item of human_wins){
           if (humanChoice === item[0] && computerChoice === item[1]) {
               humanScore += 1;
                console.log(`human wins round`);
                return;
           }
       }
    computerScore += 1;
    console.log(`computer wins round`);
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener("click", (e) => {
    humanSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

paper.addEventListener("click", (e) => {
    humanSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

scissors.addEventListener("click", (e) => {
    humanSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})