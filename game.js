startGame();

function startGame() {
	var play = prompt("Would you like to play a game with two characters? (yes or no)");

	if (play === "yes") {
		var name = prompt("Please enter your name.");
		startCombat(name);
		//return name;
	}
}

function getDamage() {
	return Math.floor(Math.random() *5) + 1;
}

function startCombat(name) {

	var usrpoints = 40;
	var grantpoints = 10;
	var grantWins = 0;
	var usrWins = 0;
	var grantLosses = 0;

	while (usrpoints > 0 && grantpoints > 0 ) {
		if (prompt("Would you like to attack or quit?") === "attack") {
			usrpoints -= getDamage();
			grantpoints -= getDamage();
			console.log(name + " has " + usrpoints + " health points left.");
			console.log("Grant Almighty has " + grantpoints + " health points left.");
			if (grantpoints <= 0) {
				grantLosses ++;
			}
			if (0 >= grantpoints && grantLosses < 3) {
				grantpoints = 10;
			}
		} else {
			console.log("GAME OVER.");
			if (grantpoints < usrpoints) {
				grantpoints = 0;
			} else {
				usrpoints = 0;
			}
			break;
		}
	}

	if (grantpoints <= 0) {
		usrWins ++;
		console.log(name + " has won the game.");
	} else {
		grantWins ++;
		console.log("Grant Almighty has won the game.");
	}


	console.log("TOTAL WINS FOR GRANT: " + grantWins);
	console.log("TOTAL WINS FOR " + name.toUpperCase() +": " + usrWins);
}




