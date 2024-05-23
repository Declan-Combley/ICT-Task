let userChoice; 
let computerChoice

const rpsVariables = ["rock", "paper", "scissors"];

// getting user selection from rock paper scissors elements
document.getElementById("rock").addEventListener('click', userSelectedRock)
document.getElementById("paper").addEventListener('click', userSelectedPaper)
document.getElementById("scissors").addEventListener('click', userSelectedScissors)

// creates random selection from rock paper or scissors for the computer generated oppopnent
function computerRoll() {
  computerChoice = rpsVariables[Math.floor(Math.random() * 3)]; // Selects a computer choice from the rps Array 

  document.getElementById("compPick").innerHTML = "Computer selected " + computerChoice;
  compareChoice(userChoice, computerChoice);
}

//compare user's selection with the computer's to determine result
function compareChoice(userChoice, computerChase) {
    if (userChoice === computerChoice) {
      document.getElementById("overallResult").innerHTML = "Its a Tie!"; 
    } else if (userChoice === "rock" && computerChoice == "scissors") {
          document.getElementById("overallResult").innerHTML = "Rock Beats Scissors - You Win!"; 
    } else if (userChoice === "rock" && computerChoice == "paper") {
          document.getElementById("overallResult").innerHTML = "Paper Beats Rock - You Lose!"; 
    } else if (userChoice === "paper" && computerChoice == "rock") {
          document.getElementById("overallResult").innerHTML = "Paper Beats Rock - You Win!"; 
    } else if (userChoice === "scissors" && computerChoice == "paper") {
          document.getElementById("overallResult").innerHTML = "Scissors Beats Paper - You Win!"; 
    } else if (userChoice === "rock" && computerChoice == "scissors") {
          document.getElementById("overallResult").innerHTML = "Rock Beats Scissors - You Lose!"; 
    }  
}

// functions called to update pick, sets userChoice and computer Roll
function userSelectedRock() {
  document.getElementById("userPick").innerHTML = "You selected rock";
  userChoice = "rock";
  computerRoll();
}

function userSelectedPaper() {
  document.getElementById("userPick").innerHTML = "You selected paper";
  userChoice = "paper";
  computerRoll();
}

function userSelectedScissors() {
  document.getElementById("userPick").innerHTML = "You selected scissors";
  userChoice = "scissors";
  computerRoll();
}
