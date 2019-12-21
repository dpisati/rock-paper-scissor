let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const userStart_id = document.getElementById("user-start");
  const compStart_id = document.getElementById("comp-start");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You win!`;
  userChoice_div.classList.add("green-glow");
  userStart_id.classList.add("green-glow");
  compStart_id.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 700);
  setTimeout(() => userStart_id.classList.remove("green-glow"), 700);
  setTimeout(() => compStart_id.classList.remove("red-glow"), 700);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const userStart_id = document.getElementById("user-start");
  const compStart_id = document.getElementById("comp-start");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `You Lost!`;
  userChoice_div.classList.add("red-glow");
  userStart_id.classList.add("red-glow");
  compStart_id.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 700);
  setTimeout(() => userStart_id.classList.remove("red-glow"), 700);
  setTimeout(() => compStart_id.classList.remove("green-glow"), 700);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const userStart_id = document.getElementById("user-start");
  const compStart_id = document.getElementById("comp-start");
  result_p.innerHTML = `Its a draw!`;
  userChoice_div.classList.add("grey-glow");
  userStart_id.classList.add("grey-glow");
  compStart_id.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 700);
  setTimeout(() => userStart_id.classList.remove("grey-glow"), 700);
  setTimeout(() => compStart_id.classList.remove("grey-glow"), 700);
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  getImage(userChoice);
  getCompImage(computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissor_div.addEventListener("click", () => game("s"));
}
main();

function getImage(userChoice) {
  var z = document.getElementById("user-start").getElementsByTagName("img")[0];
  if (userChoice === "r") {
    z.src = "images/rock.png";
    z.className = "imgOn";
    // z.setAttribute("width", "180");
    // z.setAttribute("height", "180");
  }
  if (userChoice === "p") {
    z.src = "images/paper.png";
    z.className = "imgOn";
    // z.setAttribute("width", "180");
    // z.setAttribute("height", "180");
  }
  if (userChoice === "s") {
    z.src = "images/scissor.png";
    z.className = "imgOn";
    // z.setAttribute("width", "180");
    // z.setAttribute("height", "180");
  }
}

function getCompImage(computerChoice) {
  var x = document.getElementById("comp-start").getElementsByTagName("img")[0];
  if (computerChoice === "r") {
    x.src = "images/rock.png";
    x.className = "imgOn";
    // x.setAttribute("width", "180");
    // x.setAttribute("height", "180");
  }
  if (computerChoice === "p") {
    x.src = "images/paper.png";
    x.className = "imgOn";
    // x.setAttribute("width", "180");
    // x.setAttribute("height", "180");
  }
  if (computerChoice === "s") {
    x.src = "images/scissor.png";
    x.className = "imgOn";
    // x.setAttribute("width", "180");
    // x.setAttribute("height", "180");
  }
}
