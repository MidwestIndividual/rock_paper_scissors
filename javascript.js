const FIVE_ROUNDS = 5;

// Returns 0, 1, or 2 corresponding to rock, paper, or scissor
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Returns a string corresponding to rock, paper, or scissor
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    let message = '';
    switch(computerChoice) {
        case 0:
            message = (humanChoice.toUpperCase() === 'ROCK') ? 'Tie! Rock matches rock!' :
                (humanChoice.toUpperCase() === 'PAPER') ? 'You win! Paper beats rock!' :
                'You lose! Rock beats scissors!';
            
            break;
        case 1:
            message = (humanChoice.toUpperCase() === 'ROCK') ? 'You lose! Paper beats rock!' :
                (humanChoice.toUpperCase() === 'PAPER') ? 'Tie! Paper matches paper!' :
                'You win! Scissors beats rock!';
            break;
        case 2:
            message = (humanChoice.toUpperCase() === 'ROCK') ? 'You win! Rock beats scissors!' :
                (humanChoice.toUpperCase() === 'PAPER') ? 'You lose! Scissors beats paper!' :
                'Tie! Scissors matches scissors!';
            break;
    }

    let parsedHumanChoice = (humanChoice.toUpperCase() === 'ROCK') ? 0 :
        (humanChoice.toUpperCase() === 'PAPER') ? 1 :
        2;
    
    let winner = '';

    if (parsedHumanChoice === (computerChoice + 1) % 3) {
        winner = 'Human';
    } else if (parsedHumanChoice === computerChoice) {
        winner = 'Tie';
    } else {
        winner = 'Computer';
    }

    console.log(message);

    return winner;
}

function playGame(numberOfRounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < numberOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let winner = '';
        
        winner = playRound(humanSelection, computerSelection);

        humanScore += (winner === 'Human') ? 1 : 0;
        computerScore += (winner === 'Computer') ? 1 : 0;
    }

    console.log(humanScore);
    console.log(computerScore);
}