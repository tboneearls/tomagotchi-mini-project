console.log("javascript is working");

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

$("#feed").on("click", function(event) {
	// lower hunger stat by x amount
	// display message that pet has been fed
});
$("#light").on("click", function(event) {
	// lower sleepiness by x amount over an interval
	// switch will be boolean
	// when lights are "off", background is black and everything but buttons
	// and stats are invisible
});
$("#play").on("click", function(event) {
	// lower boredom stat by x amount
	// display message that pet has been played with
	// maybe incorporate an image for this?
});