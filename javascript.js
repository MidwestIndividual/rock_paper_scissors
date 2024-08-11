

// Returns 0, 1, or 2 corresponding to rock, paper, or scissor
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Returns a string corresponding to rock, paper, or scissor
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}