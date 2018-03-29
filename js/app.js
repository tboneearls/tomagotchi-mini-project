// TO DO LIST: 

// 1. Animate tomagotchi + lightbulb image (CSS keyframe animations// canvas// velocity.js library)
// 2. display message if hunger/boredom/sleepiness are at certain levels
// 3. change buttons to be more visual?
// 4. animate interactions with pet
// 5. STYLIZE PAGE

// EXTRAS (BABY):

// 0. create factory to store each tomagotchi
// 1. have your tomagotchi give birth, to baby tomagotchi (with button?)
// 2. update global code so all funcs will work for both parent and baby
// 3. flesh out unique properties of baby (powers)
// 4. display all info for baby // add buttons for baby. (somehow switch windows between parent/baby?) // wrap entire code in a div then switch
// 5. STYLIZE PAGE

// *****GLOBAL VARIABLES*****

// NAME PET MODAL VARIABLES

const modal = $(".modal");
const openModal = $(".name_pet");
const closeModal = $(".close-button");

// set default value with light being on 
let lightOn = true;

// create and use baby factory to generate all baby tomagotchis

// create instance of original tomagotchi
const pet = new Tomagotchi();

const babyFactory = {
	babies: [],
	generateBaby() {
		const newBaby = new Baby();
		this.babies.push(newBaby);
		return newBaby;
	},
	findBaby(index) {
		return this.babies[index]
	}
}

// ****STATS****

// display starter stats in browser
$("#hunger").text("Hunger: " + pet.hunger);
$("#boredom").text("Boredom: " + pet.boredom);
$("#sleepiness").text("Sleepiness: " + pet.sleepiness);
$("#age").text("Age: " + pet.age);
$("#name").text("Name: " + pet.name);

// RAISE STAT FUNCTIONS

const raiseHunger = () => {
	if (!pet.isDead) {
		if (pet.hunger < 10) {
			pet.hunger++;
		}
		$("#hunger").text("Hunger: " + pet.hunger);
		if (pet.hunger === 10) {
			pet.die();
		}
	}
}
const raiseBoredom = () => {
	if (!pet.isDead) {
		if (pet.boredom < 10) {
			pet.boredom++;
		}
		$("#boredom").text("Boredom: " + pet.boredom);
		if (pet.boredom === 10) {
			pet.die();
		}
	}
}
const raiseSleepiness = () => {
	if (!pet.isDead) {
		if (pet.sleepiness < 10) {
			pet.sleepiness++;
		}
		$("#sleepiness").text("Sleepiness: " + pet.sleepiness);
		if (pet.sleepiness === 10) {
			pet.die();
		}
	}
}
const raiseAge = () => {
	if (!pet.isDead) {
		pet.age++;
		$("#age").text("Age: " + pet.age);
		if (pet.age === 5) {
			pet.morph();
		} else if (pet.age === 10) {
			pet.morph();
		} else if (pet.age === 15) {
			pet.giveBirth();
			// display message
		}
	}
}

// STAT INTERVALS:

// raising age every 40 seconds
const intID = setInterval(raiseAge, 40000);
// raising hunger every 20 seconds
const hungID = setInterval(raiseHunger, 20000);
// raising sleepiness every 30 seconds
const sleepID = setInterval(raiseSleepiness, 30000);
// raising boredom every 25 seconds
const boredID = setInterval(raiseBoredom, 25000);


// ****FUNCTIONS*****

// func to display message, then for it to disappear (used with setTimeout)

const displayMessage = (message) => {
	// param is the message to be displayed
	$("#message").text(message);
}
const removeMessage = () => {
	$("#message").text("");
	$("#message").css("color", "black")
}

// *******BUTTONS*******

// STAT CHANGING BUTTONS

$("#feed").on("click", function(event) {
	if (lightOn && pet.isClean && !pet.isDead) {
		displayMessage(pet.name + " enjoys a hearty meal!");
		setTimeout(removeMessage, 1000);
		pet.eat();
	}
});


$("#light").on("click", function(event) {
	if (lightOn && pet.isClean && !pet.isDead) {
		displayMessage(pet.name + " takes a relaxing nap!");
		$("#message").css("color", "white");
		setTimeout(removeMessage, 500);
		pet.sleep();
	} else if (pet.isClean && !pet.isDead) {
		pet.sleep();
	}
});

$("#play").on("click", function(event) {
	if (lightOn && pet.isClean && !pet.isDead) {
		displayMessage(pet.name + " has some fun!");
		setTimeout(removeMessage, 1000);
		pet.play();
	}
});

$("#exercise").on("click", function(event) {
	if (pet.isClean && !pet.isDead && lightOn) {
		pet.exercise();
	} else if (!pet.isDead && lightOn) {
		pet.shower();
	}
})

// MODAL BUTTONS:

closeModal.on("click", function (event) {
	modal.removeClass("show-modal");
});

openModal.on("click", function (event) {
	if (lightOn && !pet.isDead && pet.isClean) {
		modal.addClass("show-modal");
	}
});

$("#name_pet").on("click", function(event) {
	let newName;
	if ($("input").val() != "") {
		newName = $("input").val();
		pet.changeName(newName);
	}
});

// add option to reset to default name
$("#default").on("click", function(event) {
	defaultName = "Grimer";
	pet.changeName(defaultName);
})

// THIS BUTTON ONLY APPEARS IF PET DIES
// restarts game with default values
$("#reset").on("click", function(event) {
	$("#pet").attr("src", "images/grimer.png");
	// reset death message
	displayMessage("");
	pet.name = "Grimer";
	pet.age = 1;
	pet.hunger = 1;
	pet.sleepiness = 1;
	pet.boredom = 1;
	pet.isDead = false;
	$(this).css("visibility", "hidden");
})