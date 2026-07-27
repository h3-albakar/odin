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
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Logic for playing one round
    function playRound(humanChoice, computerChoice) {
      // If both human choice and computer are the same return early
      if (humanChoice === computerChoice) return "its a tie!";
           // otherwise move through every item and check if they are the same as what you have
           for (let item of human_wins){
               if (humanChoice === item[0] && computerChoice === item[1]) {
                   humanScore += 1;
                    console.log(`human wins round`);}}
        computerScore += 1;
    console.log(`computer wins round`)};

    for (let i = 0; i <= 4; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore < humanScore) return 'Human wins bitch';
    else if (computerScore > humanScore) return 'Computer wins beepbop';
    else return 'its tie...damn';}

const btn = document.querySelector('#bob');
btn.addEventListener("click", (e) => {
    console.log(playGame());
})