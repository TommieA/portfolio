alert("You'll notice that I'm wearing diapers")

function clickListener(event) {
	event preventDefault();
	console.log("Button Clicked");
};
submit.addEventListener("click", clickListener);

