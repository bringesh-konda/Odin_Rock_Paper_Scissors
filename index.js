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