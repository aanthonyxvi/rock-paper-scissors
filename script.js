let options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options [Math.floor(Math.random() * options.length)];
    return choice
    
} 
function getPlayerChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }

}
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

function playRound(playerSelection, computerSelection){
    console.log("Player:", playerSelection);       // 👈 add this
    console.log("Computer:", computerSelection);
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
         computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}` 
    }
}
 for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();   
        const computerSelection = getComputerChoice(); 
        console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
        console.log(`Score - You: ${playerScore} | Computer: ${computerScore}`);
 }
 if (playerScore > computerScore) {
        console.log(`You win the game ${playerScore}-${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins the game ${computerScore}-${playerScore}!`);
    } else {
        console.log(`The game is a tie ${playerScore}-${computerScore}!`);
    }
}
