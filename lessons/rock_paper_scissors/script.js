function getComputerChoice() {
    const num = Math.random() * 3;
    if (num <= 1) return "Rock";
    else if (num <= 2) return "Paper";
    else if (num <= 3) return "scissors";
} 

const btn = document.querySelector('#bob');

btn.addEventListener("click", (e) => {
    console.log(getComputerChoice())
})