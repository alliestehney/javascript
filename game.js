startGame();

function startGame() {
	var play = prompt("Would you like to play a game with two characters? (yes or no)");

	if (play === "yes") {
		var name = prompt("Please enter your name.");
		startCombat(name);
		//return name;
	}
}

function startCombat(name) {

	var user = { 
		username: name, 
		health: 40, 
		wins: 0, 
		healCount: 0, 
		heal: function() {
			this.health += (Math.floor(Math.random()*10) + 1);
			this.healCount++;
		}	, 
		generateAttackDamage: function() {
			return Math.floor(Math.random() *3) +1;
		}
	}

	var grant = {
		name: grant,
		health: 10,
		wins: 0, 
		losses: 0,
		generateAttackDamage: function() {
			return Math.floor(Math.random() *5)+1;
		}
	}

	while (user.health > 0 && grant.health > 0 ) {
		var gamePrompt = prompt("Would you like to attack, heal, or quit?");
		if (gamePrompt === "attack") {
			user.health -= grant.generateAttackDamage();
			grant.health -= user.generateAttackDamage();
			console.log(name + " has " + user.health + " health points left.");
			console.log("Grant Almighty has " + grant.health + " health points left.");
			if (grant.health <= 0) {
				grant.losses++;
			}
			if (0 >= grant.health && grant.losses < 3) {
				grant.health = 10;
			}
		} else if (gamePrompt === "heal") {
			if (user.healCount < 2) {
				user.heal();
				console.log(name + " has " + user.health + " health points left.");
				grant.health -= user.generateAttackDamage();
				console.log("Grant Almight has " + grant.health + " health points left.");
			} else {
				console.log("***SORRY, YOU'VE USED ALL OF YOUR HEALS.***");
				prompt("Would you like to attack or quit?");
			}
		} else {
			console.log("GAME OVER.");
			if (grant.health < user.health) {
				grant.health = 0;
			} else {
				user.health = 0;
			}
			break;
		}
	}

	if (grant.health <= 0) {
		user.wins ++;
		console.log(name + " has won the game.");
	} else {
		grant.wins ++;
		console.log("Grant Almighty has won the game.");
	}


	console.log("TOTAL WINS FOR GRANT: " + grant.wins);
	console.log("TOTAL WINS FOR " + name.toUpperCase() +": " + user.wins);
}

var playAgain = prompt("Would you like to play again? (yes or no)");
if (playAgain === "yes") {
	startGame();
} else {
	console.log("Thanks for playing!");
}





