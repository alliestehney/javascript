var play = prompt("Would you like to play a game with two characters? (yes or no)");

if (play === "yes") {
	var name = prompt("Please enter your name.");
	console.log(name);
}

var usrpoints = 40;
var grantpoints = 10;
var random = (Math.floor(Math.random() *2) + 1);
var grantWins = 0;
var usrWins = 0;
var grantLosses = 0;


while (usrpoints !== 0 && grantpoints !==0 ) {
	usrpoints -= random;
	grantpoints -= random;
	console.log(name + " has " + usrpoints + " health points left.");
	console.log("Grant Almighty has " + grantpoints + " health points left.");
	if (grantpoints === 0) {
		grantLosses ++;
	}
	if (grantpoints === 0 && grantLosses < 3) {
		grantpoints = 10;
		// console.log("WORKED!!!!")
	}
}

if (urspoints = 0) {
	grantWins ++;
	console.log(name + " has lost the game.")
} else {
	usrWins ++;
	console.log("Grant Almighty has lost the game.")
}


console.log("TOTAL WINS FOR GRANT: " + grantWins);
console.log("TOTAL WINS FOR " + name +": " + usrWins);