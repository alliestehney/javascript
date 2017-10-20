function startGame() {
	var play = prompt("Would you like to play a game with two characters? (yes or no)");

	if (play === "yes") {
		var name = prompt("Please enter your name.");
		console.log(name);
		startCombat();
	}
}
startGame();

function getDamage() {
	return Math.floor(Math.random() *5) + 1;
}

function startCombat() {

	var usrpoints = 40;
	var grantpoints = 10;
	var grantWins = 0;
	var usrWins = 0;
	var grantLosses = 0;

	while (usrpoints > 0 && grantpoints > 0 ) {
		usrpoints -= getDamage();
		grantpoints -= getDamage();
		console.log(name + " has " + usrpoints + " health points left.");
		console.log("Grant Almighty has " + grantpoints + " health points left.");
		if (grantpoints <= 0) {
			grantLosses ++;
		}
		if (0 >= grantpoints && grantLosses < 3) {
			grantpoints = 10;
			console.log("WORKED!!!!")
		}
	}

	if (0 <= usrpoints) {
		grantWins ++;
		console.log(name + " has lost the game.")
	} else {
		usrWins ++;
		console.log("Grant Almighty has lost the game.")
	}


	console.log("TOTAL WINS FOR GRANT: " + grantWins);
	console.log("TOTAL WINS FOR " + name +": " + usrWins);
}



