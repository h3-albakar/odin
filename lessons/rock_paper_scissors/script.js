function getComputerChoice() {
    choice = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random() * choice.length);
    return choice[index];
} 

function getHumanChoice() {
    let choice = prompt("what are you choosing mate ?!");
    return choice;
}

const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(getComputerChoice())
    console.log(getHumanChoice())
})