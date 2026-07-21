function getComputerChoice() {
    choice = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random() * choice.length);
    return choice[index];
} 

const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(getComputerChoice())
})