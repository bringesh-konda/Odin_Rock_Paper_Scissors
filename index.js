let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return 'rock';
    }
    else if(choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice\n 0: Rock\n 1: Paper\n 2: Scissors");
    if(choice === 0) {
        return 'rock';
    }
    else if(choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`humanChoice: ${humanChoice}, computerChoice: ${computerChoice}`);
    if(humanChoice === 'rock') {
        if(computerChoice === 'scissors') {
            humanScore++;
        }
        else if(computerChoice === 'paper') {
            computerScore++;
        }
    }
    else if(humanChoice === 'paper') {
        if(computerChoice === 'rock') {
            humanScore++;
        }
        else if(computerChoice === 'scissors') {
            computerScore++;
        }
    }
    else if(humanChoice === 'scissors') {
        if(computerChoice === 'paper') {
            humanScore++;
        }
        else if(computerChoice === 'rock') {
            computerScore++;
        }
    }
}

function playGame() {
    let noOfRounds = 5;
    for(let i = 0; i < noOfRounds; i++) {
        playRound();
        console.log('humanScore: ', humanScore);
        console.log('computerScore: ', computerScore);
        console.log("");
    }

    if(computerScore > humanScore) {
        console.log('Computer Wins');
    }
    else if(humanScore > computerScore) {
        console.log('Hurray... You Win!!!!');
    }
    else {
        console.log('It is a tie');
    }
}

playGame();