function getComputerChoice(num_choices) {
    const num = Math.random() * 3
    if (num <= 1) return "Rock";
    else if (num <= 2) return "Paper";
    else if (num <= 3) return "scissors";
} 