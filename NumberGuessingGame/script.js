let random_number = Math.floor(Math.random() * 100);
console.log(random_number);
for (let index = 1; index <= 100; index++) {
	const span = document.createElement("span");
	const id = document.createAttribute("id");
	const func = document.createAttribute("onclick");
	id.value = index;
	func.value = "check(this.id)";
	span.innerText = " " + index + " ";
	span.setAttributeNode(id);
	span.setAttributeNode(func);
	document.body.appendChild(span);
}

function check(id) {
	console.log("hello" + id);
	if (random_number > id) {
		console.log("Too Low");
		setTimeout(() => {
			document.getElementById("result").innerHTML = "Make a Guess";
		}, 2000);
		document.getElementById("result").innerHTML = "Guess Too Low..";

		document.getElementById(id).style.backgroundColor = "red";
		document.getElementById(id).style.color = "white";
		document.getElementById(id).removeAttribute("onclick");
		document.getElementById(id).style.cursor = "default";
	} else if (random_number < id) {
		console.log("Too high");
		setTimeout(() => {
			document.getElementById("result").innerHTML = "Make a Guess";
		}, 2000);
		document.getElementById("result").innerHTML = "Guess Too High..";

		document.getElementById(id).style.backgroundColor = "red";
		document.getElementById(id).style.color = "white";
		document.getElementById(id).removeAttribute("onclick");
		document.getElementById(id).style.cursor = "default";
	} else {
		console.log("Correct");
		document.getElementById(id).style.backgroundColor = "green";
		document.getElementById(id).style.color = "white";
		document.getElementById("result").innerHTML = "Correct..";
	}
}
function reset() {
	location.reload();
}
