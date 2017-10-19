var play = prompt("Would you like to play a game with two characters? (yes or no)");

if (play === "yes") {
	var name = prompt("Please enter your name.");
	console.log(name);
}

var usrpoints = 40;
var grantpoints = 10;
var random = (Math.floor(Math.random() *2) + 1);

while (usrpoints !== 0 && grantpoints !==0 ) {
	usrpoints -= random;
	grantpoints -= random;
	console.log(name + " has " + usrpoints + " points left.");
	console.log("Grant Almighty has " + grantpoints + " points left.");
}

// if ()

// var total = usrpoints - (Math.floor(Math.random() *2) + 1);
// console.log(total);

// while (total !== 0) {
// 	total = usrpoints - (Math.floor(Math.random() *2) + 1);
// 	console.log(total);
// }

// while (usrpoints > 0) {
// 	// remove random number of health points (1 or 2) from both
// 	var random = Math.floor(Math.random() *2) + 1;
// 	urspoints = usrpoints - random;
// 	grantpoints = grantpoints - random;
// }