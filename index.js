let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        return 'rock';
    }
    else if(choice == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}