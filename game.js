var startBtn = document.getElementById("start");
var content = document.getElementById("everything");

startBtn.onclick = function() {
	content.style.display = "block";
	startBtn.style.display = "none";
	startGame();
}

function startGame() {
	var user = { 
		username: name, 
		health: 40, 
		wins: 0, 
		healCount: 0, 
		heal: function() {
			this.health += (Math.floor(Math.random()*10) + 1);
			this.healCount++;
		}, 
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
}



// var user = { 
// 	username: name, 
// 	health: 40, 
// 	wins: 0, 
// 	healCount: 0, 
// 	heal: function() {
// 		this.health += (Math.floor(Math.random()*10) + 1);
// 		this.healCount++;
// 	}	, 
// 	generateAttackDamage: function() {
// 		return Math.floor(Math.random() *3) +1;
// 	}
// }

// var userName = user.username;
// console.log(userName);

// var grant = {
// 	name: grant,
// 	health: 10,
// 	wins: 0, 
// 	losses: 0,
// 	generateAttackDamage: function() {
// 	return Math.floor(Math.random() *5)+1;
// 	}
// }

// var space = document.getElementById("healthLeft");
// var update = document.createElement('p');
// update.textContent = name + " has " + user.health + " health points left. Grant Almighty has " + grant.health + " points left.";
// space.appendChild(update);


var attackBtn = document.getElementById("attack");
var healBtn = document.getElementById("heal");
var quitBtn = document.getElementById("quit");

attackBtn.onclick = function(){
	startCombat("attack");
	return "attack";
}

healBtn.onclick = function() {
	startCombat("heal");
	return "heal";
}

quitBtn.onclick = function() {
	startCombat("quit");
	return "quit";
}
		

function startCombat(actionStr) {

	var space2 = document.getElementById("healthLeft");
	var update = document.createElement('p');
	space2.appendChild(update);


	function updateHealth(userpoints, grantpoints) {
		//var space2 = document.getElementById("healthLeft");
		//var update = document.createElement('p');
		update.innerHTML = name + " has " + userpoints + " health points left. Grant Almighty has " + grantpoints + " points left.";
		// space2.appendChild(update);
		return update.innerHTML;
	}


	if (actionStr === "attack" && user.health >=0) {
		user.health -= grant.generateAttackDamage();
		grant.health -= user.generateAttackDamage();
		//console.log(name + " has " + user.health + " health points left.");
		//console.log("Grant Almighty has " + grant.health + " health points left.");

		var userHealthBar = document.getElementById("userHealthProgress");
		userHealthBar.value = user.health;

		var enemyHealthBar = document.getElementById("enemyHealthProgress");
		enemyHealthBar.value = grant.health;
		
		updateHealth(user.health, grant.health);

		if (grant.health <= 0) {
			user.wins++;
			var winsBar = document.getElementById("userWinsBar");
			winsBar.value = user.wins;
		}

		if (0 >= grant.health && user.wins <= 5) {
			grant.health = 10;
			
			var resetStr = document.getElementById("resetStr")
			var newReset = document.createElement('p');
			newReset.innerHTML = "Resetting Grant's points to 10.";
			resetStr.appendChild(newReset);

			console.log("***RESET GRANT POINTS TO 10***");

			var winsUpdate = document.getElementById("winsUpdate");
			var newWins = document.createElement('p');
			newWins.innerHTML = name + " has " + user.wins + " wins so far!!!";
			winsUpdate.appendChild(newWins);

			console.log(name + " has " + user.wins + " wins so far!!!");
		}

		if (user.health <= 0 && user.wins < 5) {
			if (actionStr === "attack") {
				user.health = user.health;
				grant.health = grant.health;
				var winnerContent = document.getElementById("winner");
				var newWinner = document.createElement('p');
				newWinner.innerHTML = "GRANT WINS."
				winnerContent.appendChild(newWinner);
			}
		}
	} else if (actionStr === "heal") {
		if (user.healCount < 2) {
			user.heal();
			var healStr = document.getElementById("healStr");
			var newHeal = document.createElement('p');
			newHeal.innerHTML = "USER IS USING A HEAL";
			healStr.appendChild(newHeal);

			var healthBar = document.getElementById("userHealthCount");
			healthBar.value -= 1;

			updateHealth(user.health, grant.health);

			console.log(name + " has " + user.health + " health points left.");
			console.log("Grant Almight has " + grant.health + " health points left.");
		} else {
			// var gameOverStr = document.getElementById("gameOver");
			// var newGameOver = document.createElement('p');
			// newGameOver.innerHTML = "GAME OVER!!!!!!";
			// gameOverStr.appendChild(newGameOver);

			console.log("***SORRY, YOU'VE USED ALL OF YOUR HEALS.***");
			//prompt("Would you like to attack or quit?");
		}
	} else {
		var gameOverStr = document.getElementById("gameOver");
		var newGameOver = document.createElement('p');
		newGameOver.innerHTML = "GAME OVER!!!!!!";
		gameOverStr.appendChild(newGameOver);
		console.log("**GAME OVER**");
	}
}

//function startCombat(name) {


	// while (user.health > 0 && grant.health > 0 ) {
	// 	var gamePrompt = prompt("Would you like to attack, heal, or quit?");
	// 	// if (gamePrompt === "attack") {
	// 	// 	user.health -= grant.generateAttackDamage();
	// 	// 	grant.health -= user.generateAttackDamage();
	// 	// 	console.log(name + " has " + user.health + " health points left.");
	// 	// 	console.log("Grant Almighty has " + grant.health + " health points left.");
	// 	// 	if (grant.health <= 0) {
	// 	// 		user.wins++;
	// 	// 	}
	// 	// 	if (0 >= grant.health && user.wins <= 5) {
	// 	// 		grant.health = 10;
	// 	// 		console.log("***RESET GRANT POINTS TO 10***");
	// 	// 		console.log(name + " has " + user.wins + " wins so far!!!");
	// 	// 	}
	// 	} else if (gamePrompt === "heal") {
	// 		if (user.healCount < 2) {
	// 			user.heal();
	// 			console.log(name + " has " + user.health + " health points left.");
	// 			// grant.health -= user.generateAttackDamage();
	// 			console.log("Grant Almight has " + grant.health + " health points left.");
	// 		} else {
	// 			console.log("***SORRY, YOU'VE USED ALL OF YOUR HEALS.***");
	// 			prompt("Would you like to attack or quit?");
	// 		}
	// 	} else {
	// 		console.log("GAME OVER.");
	// 		if (grant.health < user.health) {
	// 			grant.health = 0;
	// 		} else {
	// 			user.health = 0;
	// 		}
	// 		break;
	// 	}
	//}

	// if (grant.health <= 0) {
	// 	user.wins ++;
	// 	console.log(name + " has won the game.");
	// } else {
	// 	grant.wins ++;
	// 	console.log("Grant Almighty has won the game.");
	// }

	// if (user.wins === 5) {
	// 	console.log(name + " has won the game.");
	// } else {
	// 	grant.wins++;
	// 	console.log("Grant Almighty has won the game.");
	// }

	// console.log("TOTAL WINS FOR GRANT: " + grant.wins);
	// console.log("TOTAL WINS FOR " + name.toUpperCase() +": " + user.wins);
//}

// var playAgain = prompt("Would you like to play again? (yes or no)");
// if (playAgain === "yes") {
// 	startGame();
// } else {
// 	console.log("Thanks for playing!");
// }





