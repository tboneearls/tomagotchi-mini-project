class Tomagotchi {
	constructor (name, age) {
		this.name = name;
		this.age = age;
		// hunger, sleepiness, boredom should start at 0,
		// then increase incrementally
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
	}
}

// create instance of tomagotchi
const pet = new Tomagotchi ("Grimer", 1);

// display stats in browser
$("#hunger").text("Hunger: " + pet.hunger);
$("#boredom").text("Boredom: " + pet.boredom);
$("#sleepiness").text("Sleepiness: " + pet.sleepiness);
$("#age").text("Age: " + pet.age);
$("#name").text("Name: " + pet.name);
// RAISE STAT FUNCTIONS

const raiseHunger = () => {
	// raise hunger by set interval
}
const raiseBoredom = () => {
	// raise boredom by set interval
}
const raiseSleepiness = () => {
	// raise sleepiness by set interval
}
const raiseAge = ()=> {
	// raise age in increments of x minutes
	// morph pet with certain age intervals
}

// BUTTON FUNCTIONS

const displayMessage = (message) => {
	// param is the message to be displayed
	// update message h1 id
	$("#message").text(message);
}

// set time function for display message function
// const messageTime = (message) => {
// 	setInterval(displayMessage(message), 1000);
// 	clearInterval();
// }

$("#feed").on("click", function(event) {
	// hunger can't be below 1	
	// light needs to be on so pet doesn't get fed when they're sleeping.
	if (pet.hunger >= 1 && lightOn === true) {
		// lower hunger by 1
		pet.hunger--;
		displayMessage(pet.name + " ate a hearty meal!")
	}
});
// set default value with light being on 
let lightOn = true;
$("#light").on("click", function(event) {
	lightOn = !lightOn;
	if (!lightOn) {
		// when lights are "off", background is black and everything but buttons
		// and stats are invisible
		$("#lights_off").css({"background-color": "black", "z-index": "1000"});
		$("button").css("z-index", "1001");
		$("#stats").css("z-index", "1001");
		// change text for light button
		$("#light").text("Lights On");
		// make pet disappear
		$("#pet").css("visibility", "hidden");
	} else {
		// change body and button to default values
		$("#lights_off").css({"background": "none", "z-index": "-1"});
		$("button").css("z-index", "0");
		$("#stats").css("z-index", "0");
		// change text for light button
		$("#light").text("Lights Off");
		// make pet reappear
		$("#pet").css("visibility", "visible")
	}
	// display lightbulb?
	if (pet.sleepiness >= 1) {
		// can't be greater than one
		pet.sleepiness--;
		// display message
		displayMessage(pet.name + " took a relaxing nap.");
	}
});
$("#play").on("click", function(event) {
	if (pet.boredom >= 1 && lightOn === true) {
		// lower boredom by 1
		pet.boredom--;
		// display message that pet has been played with
		displayMessage(pet.name + " is having fun!")
		// maybe incorporate an image for this?
	}
});