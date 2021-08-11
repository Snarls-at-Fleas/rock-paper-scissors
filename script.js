function getComputerMove() {
    // This function stays and works as written
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
    // This function should be rewritten to get value of the pressed button when called from Event listener
    // and return it as humanMove variable.
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
    // This function mostly stays the same, but results should be displayed through UI not console
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
    // This part need to be rewritten
    // console.log("Computer chose", computerChoice, "and you chose", humanChoice, "=>", result);
    return result;
}

// This function should be rewritten to keep scores, declare winner when someone reaches 5 points
// and offer to play another game 
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;                
//     for (i = 0; i < 5; i++) {
//         console.log("Round:", i+1)
//         result = playRound(getComputerMove(), getHumanMove());
//         if (result === "Computer wins!") {
//             computerScore++
//         } else if (result === "You win!") {
//             humanScore++
//         } 
//         console.log("Computer:", computerScore, "You:", humanScore);
//     }
//     if (humanScore > computerScore) {
//         return "You won this game!"
//     } else if (computerScore > humanScore) {
//         return "Computer won this game!"
//     } else return "It's a tie!"
// };

// Event listener listens to any of the three buttons pressed & calls getHumanMove() func

// Need function that is called from playGame() when the user decides to play again
// that resets all scores and calls playGame() again
// Called from playGame() & calls playGame() again? Can it be a problem?