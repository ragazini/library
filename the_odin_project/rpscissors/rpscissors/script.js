function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  let myResult = Math.floor(Math.random() * 3 + 1);

  if (myResult === 1) {
    myResult = rock;
    console.log(myResult);
    return rock;
  } else if (myResult === 2) {
    myResult = paper;
    console.log(myResult);
    return paper;
  } else {
    myResult = scissors;
    console.log(myResult);
    return scissors;
  }
}

// getComputerChoice();

function getHumanChoice() {
  let userChoice = prompt("Choose a tool (rock, paper or scissors)");
  //   if (
  //     userChoice === "rock" ||
  //     userChoice === "paper" ||
  //     userChoice === "scissors"
  //   ) {
  console.log(userChoice);
  return userChoice;
  //   } else {
  //     console.log("error. try again");
}

// getHumanChoice();

function playGame() {
  humanScore = 0;
  computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("you lose. Paper beats rock.");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("you win. rock beats scissors");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("it's a draw");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("you win. paper beats rock");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("you lose. scissors beat paper");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("draw");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("you win. scissors beat paper");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("you lose. rock beats scissors");
      computerScore++;
    } else {
      console.log("draw. ");
    }
    //   console.log(humanChoice);
    console.log(`Computer score: ${computerScore}
     Human score: ${humanScore} `);
  }

  totalScore = computerScore + humanScore;
  for (let totalScore = 0; totalScore < 5; totalScore++) {
    const computerChoice1 = getComputerChoice();
    const humanChoice1 = getHumanChoice().toLowerCase();
    playRound(humanChoice1, computerChoice1);
  }
}

playGame();
