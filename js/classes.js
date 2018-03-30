// initialize tomagotchi class
class Tomagotchi {
	constructor() {
		this.name = "Grimer";
		this.age = 1;
		// hunger, sleepiness, boredom should start at 0,
		// then increase incrementally
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.isClean = true;
		this.isDead = false;
		this.isPlaying = false;
		this.isEating = false;
	}
	play() {
		if (this.boredom > 1) {
			// lower boredom by 1
			this.boredom--;
			$("#boredom").text("Boredom: " + this.boredom);
			// display message that pet has been played with
			displayMessage(this.name + " is having fun!")
			// maybe incorporate an image for this?
		}
	}
	sleep() {
		lightOn = !lightOn;
		if (!lightOn) {
			// when lights are "off", background is black and everything but buttons
			// and stats are invisible
			$("#lightbulb").css({"visibility": "hidden", "animation": ""});
			$("body").css({"background-color": "black", "z-index": "1000"});
			$("#title").css("z-index", "1001");
			$("button").css("z-index", "1001");
			$("#stats h1").css({"z-index": "1001", "color": "white"});
			// change text for light button
			$("#light").text("Lights On");
			// make pet disappear
			$("#pet").css("visibility", "hidden");
			if (this.sleepiness > 1) {
				// can't be greater than one
				this.sleepiness--;
				// display message
				$("#sleepiness").text("Sleepiness: " + this.sleepiness);
				displayMessage(this.name + " took a relaxing nap.");
			}
		} else {
			// change body and button to default values
			$("#lightbulb").css({"visibility": "visible", "animation": "slideIn 1s forwards ease-in"});
			$("body").css({"background": "#FFCDF0", "z-index": "0"});
			$("button").css("z-index", "0");
			$("#stats h1").css({"z-index": "0", "color": "black"});
			// change text for light button
			$("#light").text("Lights Off");
			// make pet reappear
			$("#pet").css("visibility", "visible")
		}
		// display lightbulb?
	}
	eat() {
		// hunger can't be below 1	
		// light needs to be on so pet doesn't get fed when they're sleeping.
		if (this.hunger > 1 && lightOn === true) {
			// lower hunger by 1
			this.hunger--;
			$("#hunger").text("Hunger: " + this.hunger);
			displayMessage(this.name + " ate a hearty meal!")
		}
	}
	changeName(input) {
		this.name = input;
		$("#name").text("Name: " + input);
	}
	morph() {
		// set conditions to morph
		if (this.age === 5) {
			// change image of pet to muk
			$("#pet").attr("src", "images/muk.png")
		} else if (this.age === 10) {
			$("#pet").attr("src", "images/alolan_muk.png")
		}
	}
	die() {
		$("#pet").attr("src", "images/dead_pet.png")
		$("#reset").css("visibility", "visible")
		displayMessage(pet.name + " passed away at the age of " + pet.age);
		this.isDead = true;
	}
	exercise() {
		displayMessage(pet.name + " starts jogging.");
		this.isClean = false;
		$("#pet").css("animation", "slideIn 3s infinite alternate ease-in-out");
		$("#exercise").text("Shower");
		// when exercising, the rate of hunger and sleepiness increases faster
		// will need to shower after exercising before doing anything else
	}
	shower() {
		displayMessage(pet.name + " takes a hot shower.");
		setTimeout(removeMessage, 1000);
		this.isClean = true;
		$("#pet").css("animation", "");
		$("#exercise").text("Exercise");
	}
	giveBirth() {
		// display message notifying user of baby tomagotchi
		// create instance of baby tomagotchi from class
		// babyFactory.generateBaby();
	}
}

// initalize baby tomagotchi class inherited from original tomagotchi class
class Baby extends Tomagotchi {
	constructor() {
		super (age, hunger, sleepiness, boredom, isClean, isDead)
		this.name = "Lil Slimey";
	}
	powers() {
		// add some special power here (slime attack?)
		// add additional button for user to call it
	}
	// will need to update global code so it works for baby too
}