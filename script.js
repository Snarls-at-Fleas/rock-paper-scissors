function getComputerMove() {
    let computerMove= "";
    let moveNumber = Math.floor(Math.random() * 3) + 1;
    switch (moveNumber) {
    case 1:
        computerMove = "Rock";
        break;
    case 2:
        computerMove = "Paper";
        break;
    case 3: 
        computerMove = "Scissors"; 
    }
    return computerMove;               
}

function playGame(computerChoice, humanChoice) {
    let result = "";
    if (computerChoice === humanChoice) {
        result = "This round is a tie!"
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        result = "Computer wins this round!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        result = "Computer wins this round!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        result = "Computer wins this round!";
    } else {
        result = "You win this round!";
    }
    const computerChoiceMessage = document.getElementById('computerChoice');
    computerChoiceMessage.textContent = computerChoice;
    const humanChoiceMessage = document.getElementById('humanChoice');
    humanChoiceMessage.textContent = humanChoice;
    const roundResultMessage = document.getElementById('roundResult');
    roundResultMessage.textContent = result;

    
    if (result === "Computer wins this round!") {
        computerScore++;
    } else if (result === "You win this round!") {
        humanScore++;
    }

    const computerScoreValueMessage = document.getElementById('computerScoreValue');
    computerScoreValueMessage.textContent = computerScore;
    const humanScoreValueMessage = document.getElementById('humanScoreValue');
    humanScoreValueMessage.textContent = humanScore;

    let gameResult = "";
    if (computerScore === 5) {
        result = "";
        gameResult = "Computer won!"
    } else if (humanScore === 5) {
        result = "";
        gameResult = "You won!"
    };

    const finalResultMessage = document.getElementById('gameResult');
    finalResultMessage.textContent = gameResult;
    roundResultMessage.textContent = result;

    if (gameResult !== "") {
        const gameReset = document.getElementById('gameReset');
        gameReset.innerHTML =
        '<button class = "button" id = "buttonReset" type="button" value="Reset">New Game</button>';
        document.getElementById('buttonRock').disabled = true;
        document.getElementById('buttonPaper').disabled = true;
        document.getElementById('buttonScissors').disabled = true;
        resetButton = document.querySelector('#buttonReset');
        resetButton.addEventListener('click', () => {
        if (resetButton.value === "Reset") {
            resetGame();
        };
    });
    };
}

function resetGame() {
    document.getElementById('buttonRock').disabled = false;
    document.getElementById('buttonPaper').disabled = false;
    document.getElementById('buttonScissors').disabled = false;
    computerScore = 0;
    humanScore = 0;
    gameResult = "";
    computerChoice = "";
    humanChoice = "";
    const computerScoreValueMessage = document.getElementById('computerScoreValue');
    computerScoreValueMessage.textContent = computerScore;
    const humanScoreValueMessage = document.getElementById('humanScoreValue');
    humanScoreValueMessage.textContent = humanScore;
    const finalResultMessage = document.getElementById('gameResult');
    finalResultMessage.textContent = gameResult;
    const computerChoiceMessage = document.getElementById('computerChoice');
    computerChoiceMessage.textContent = computerChoice;
    const humanChoiceMessage = document.getElementById('humanChoice');
    humanChoiceMessage.textContent = humanChoice;
    const gameReset = document.getElementById('gameReset');
        gameReset.innerHTML = "";
    
}

const buttons = document.querySelectorAll('button');
let humanMove = "";
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        humanMove = button.value;
        playGame(getComputerMove(), button.value);
    });
});

// Need function that is called from playGame() when the user decides to play again
// that resets all scores and calls playGame() again
// Called from playGame() & calls playGame() again? Can it be a problem?