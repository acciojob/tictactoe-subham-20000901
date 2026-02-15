let submitBtn = document.getElementById("submit");
let p1Input = document.getElementById("p1");
let p2Input = document.getElementById("p2");
let container = document.querySelector(".container");

let gameSection = document.getElementById("gameSection");
let message = document.querySelector(".message");
let board = document.querySelector(".board");
let cells = document.querySelectorAll(".cell");

let currentPlayer = "x";
let gameover= false;
let player1 ;
let player2 ;


submitBtn.addEventListener("click",function(){
	player1 = p1Input.value;
	player2 = p2Input.value;

	container.style.display="none";
	gameSection.style.display ="block";

	message.innerText = player1 +", you're up";
})

cells.forEach(function(cell){

	cell.addEventListener("click",function(){

		if(cell.innerText !== "" || gameover) return;

		cell.innerText = currentPlayer;
		
		if(checkWinner()) {

          let winnerName = currentPlayer === "x" ? player1 : player2;
		  message.innerText = winnerName + " congratulations you won!";
		  gameover = true;
			
		 return;
}

		currentPlayer = currentPlayer === "x" ? "o" : "x";
		let nextPlayer = currentPlayer === "x" ? player1 : player2;

		 message.innerText = nextPlayer + ", you're up";
	})
})

let winPatterns = [
  ["1","2","3"],
  ["4","5","6"],
  ["7","8","9"],
  ["1","4","7"],
  ["2","5","8"],
  ["3","6","9"],
  ["1","5","9"],
  ["3","5","7"]
];

function checkWinner() {
	for(let x of winPatterns) {

		let a = document.getElementById(x[0]).innerText;
		let b = document.getElementById(x[1]).innerText;
		let c = document.getElementById(x[2]).innerText;

		if(a !== "" && a === b && b === c) {
			
	  document.getElementById(x[0]).classList.add("winner");
      document.getElementById(x[1]).classList.add("winner");
      document.getElementById(x[2]).classList.add("winner");

      return true;
    }
  }

  return false;
	
}

