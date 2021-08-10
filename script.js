function getComputerMove() {
    let computerMove= "";
    let moveNumber = Math.floor(Math.random() * 3) + 1;
    switch (moveNumber) {
    case 1:
        computerMove = "rock";
        break;
    case 2:
        computerMove = "paper";
        break;
    case 3: 
        computerMove = "scissors"; 
    }
    return computerMove;               
}
 
function getHumanMove() {
    let humanMove = "";
    let moveCheck = true;
    do {
        humanMove = window.prompt("Your move: (Rock, Paper or Scissors)");
        humanMove = humanMove.toLowerCase();
        if (humanMove === "rock" || humanMove === "paper" || humanMove === "scissors") {
            moveCheck = false;
        } else moveCheck = true;
    } while (moveCheck);               
    return humanMove;
}

function playRound(computerChoice, humanChoice) {
    let result = "";
    if (computerChoice === humanChoice) {
        result = "It's a tie!"
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        result = "Computer wins!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        result = "Computer wins!";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        result = "Computer wins!";
    } else {
        result = "You win!";
    }
    console.log("Computer chose", computerChoice, "and you chose", humanChoice, "=>", result);
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;                
    for (i = 0; i < 5; i++) {
        console.log("Round:", i+1)
        result = playRound(getComputerMove(), getHumanMove());
        if (result === "Computer wins!") {
            computerScore++
        } else if (result === "You win!") {
            humanScore++
        } 
        console.log("Computer:", computerScore, "You:", humanScore);
    }
    if (humanScore > computerScore) {
        return "You won this game!"
    } else if (computerScore > humanScore) {
        return "Computer won this game!"
    } else return "It's a tie!"
}

const buttons = document.querySelector('#rpsButtons');

function buttonsGlow() {
    document.addEventListener
}