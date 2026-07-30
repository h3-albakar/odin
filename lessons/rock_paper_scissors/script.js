const available_choices = ["Rock", "Paper", "Scissors"];
const human_wins = [["Rock", "Scissors"], ["Paper","Rock"], ["Scissors", "Paper"]];

let humanScore = 0;
let computerScore = 0;
let humanSelection = '';
let computerSelection = '';

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')

function getComputerChoice() {
    let index = Math.floor(Math.random() * available_choices.length);
    return available_choices[index];
} 

function playRound(humanChoice, computerChoice) {
  // If both human choice and computer are the same return early
  if (humanChoice === computerChoice) return;
       // otherwise move through every item and check if they are the same as what you have
       for (let item of human_wins){
           if (humanChoice === item[0] && computerChoice === item[1]) {
                humanScore += 1;
                return;
           }
       }
    computerScore += 1;
    return;
};
function playGame(){
    buttons.forEach((button) => {
        console.log('installing listeners');
        button.addEventListener("click", (e) => {
                console.log('click happened');
                if (computerScore + humanScore === 5) {
                    return console.log('Cant do more gotta refresh mate');}
                humanSelection = e.target.textContent;
                computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                let round_result = document.createElement('li');
                round_result.textContent = `Human score is ${humanScore} and Computer score is ${computerScore}`;
                result.appendChild(round_result);
                if (computerScore + humanScore === 5) {
                    console.log('game ending condition reached')
                    let game_winner = ''
                    if (humanScore === computerScore) game_winner = 'Its a tie... damn';
                    else if (humanScore > computerScore) game_winner = 'YOU WIN CONGRATS!!';
                    else game_winner = 'Computer wins WUSSS';
                    let game_result = document.createElement('li');
                    game_result.textContent = game_winner;
                    result.appendChild(game_result);
                    }
                })
        });
    return;
    }
playGame();
console.log('checking outside of game');
if (typeof game_winner !== 'undefined' && game_winner !== null) {
    humanScore = 0;
    computerScore = 0;
    humanSelection = '';
    computerSelection = '';
    playGame();
}