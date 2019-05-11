let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function convert(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You Lost!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convert(userChoice)} and ${convert(computerChoice)}. It's a draw!`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
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
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissor_div.addEventListener('click', () =>	game("s"));
}

main();


