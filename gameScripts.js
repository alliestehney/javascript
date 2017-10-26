var startBtn = document.getElementById("start");
var content = document.getElementById("everything");

startBtn.onclick = function() {
	content.style.display = "block";
	startBtn.style.display = "none";
	startGame();
}

function startGame() {
	// create user object & methods
	var user = {
		name: "",
		health: 40,
		wins: 0,
		healCount: 2
	}
	user.attack = function() {
		this.health -= Math.floor(Math.random() * 5) +1;
	}

	user.heal = function() {
		this.health += Math.floor(Math.random() * 10)+1;
		this.healCount--;
	}

	// create grant object & methods
	var grant = {
		name: "Grant",
		health: 10,
		lives: 5
	}

	grant.attack = function() {
		this.health -= Math.floor(Math.random()*3) +1;
	}

	// what to do when you click each button type
	var attackBtn = document.getElementById("attack");
	attackBtn.onclick = function() {
		attack(user, grant); //call attack function
	}

	var healBtn = document.getElementById("heal");
	healBtn.onclick = function() {
		healControl(user, grant);// call heal function so that user can heal
	}

	var quitBtn = document.getElementById("quit");
	quitBtn.onclick = function() {
		document.getElementById("gameStatusLine").innerHTML = "Sorry, you quit, so you lose! Grant Almighty wins!!";
		end(); // call quit function
	}

	user.name = prompt("What's your name?");
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("grantName").innerHTML = grant.name;

    var statusUpdates = user.name + " has " + user.health + " health left. "
        + grant.name + " has " + grant.health + " health left.";

    document.getElementById("gameStatusLine").innerHTML = statusUpdates;

}

function attack(usrA, compA) {
	usrA.attack(); // user.attack() will go
	compA.attack(); // grant.attack() will go
	updateProgressBar(usrA, compA); // update progress bars for health
	checkingWinOrLose(usrA, compA);
}

function healControl(usrH, compH) {
	usrH.heal();
	updateProgressBar(usrH, compH);
	checkingWinOrLose(usrH, compH);
	if (usrH.healCount === 0) {
		var healBtn = document.getElementById("heal");
		healBtn.setAttribute("disabled", "true");
	}
}

// function that updates the progress bars 
function updateProgressBar(userProg, compProg) {
	var userHealthBar = document.getElementById("userHealthProgress"); // update user health bar
	userHealthBar.value = userProg.health;
	var grantHealthBar = document.getElementById("enemyHealthProgress"); // update grant health bar
	grantHealthBar.value = compProg.health;
	var healCount = document.getElementById("userHealthCount");
	healCount.value = userProg.healCount;
	var usrWins = document.getElementById("userWinsBar");
	usrWins.value = userProg.wins;
	var statusUpdates = userProg.name + " has " + userProg.health + " health left. " + compProg.name + " has " + compProg.health + " health left.";
	document.getElementById("gameStatusLine").innerHTML = statusUpdates;
}

function checkingWinOrLose(userWL, compWL) {
	if (compWL.health <= 0 && compWL.lives > 0) {
		userWL.wins++;
		compWL.health = 10;
		compWL.lives--;
	}
	if (compWL.lives === 0) {
		document.getElementById("gameStatusLine").innerHTML = compWL.name + " is out of lives!" + userWL.name + " wins!";
		end();
	} else if (userWL.health < 0) {
		document.getElementById("gameStatusLine").innerHTML = userWL.name + " is out of health! " + compWL.name + " wins!";
        end();
	}
}

function end() {
	document.getElementById("attack").setAttribute("disabled", true);
    document.getElementById("heal").setAttribute("disabled", true);
    document.getElementById("quit").setAttribute("disabled", true);
}