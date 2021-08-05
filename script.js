function computerPlay() {
    // Randomly choose either Rock, Paper or Scissors
    let computerChoice = "";
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    switch (choiceNumber) {
      case 1:
        computerChoice = "Rock";
        break;
      case 2:
        computerChoice = "Paper";
        break;
      case 3: 
        computerChoice = "Scissors"; 
    }
    document.getElementById("compChoice").innerText = computerChoice;
    // Return the chosen value
}

computerPlay();

function playRound(computerChoice, humanChoice) {
    // humanChoice is obtained from human input
    // computerChoice is obtained from computerPlay function    
    // Check if humanChoice equals to Rock, Paper or Scissors (case insensitive)
    // Compare humanChoice to computerChoice
    // Display result
}

function game() {
  // Declare humanScore & computerScore variables and initialize them with 0 value.
  // Make 5 iteration loop
    // Call playRound function
    // If human won increment humanScore by 1
    // If computer won increment computerScore by 1
    // Display round scores
  // Display game winner

function readHumanChoice() {
  // Returns value of the radio button selected by player

}
}