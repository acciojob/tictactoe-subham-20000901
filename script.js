//your JS code here. If required.
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",function(e)){
     e.preventDefault();
	let p1 = document.getElementById("p1").value;
	let p2 = document.getElementById("p2").value;

	document.querySelector("form").style.display = "none";
     
	let container = document.querySelector(".container");
	let h1 = document.querySelector("h1");
	h1.textContent = "Tic Tac Toe";
	container.appendChild(h1);
	
	
}

