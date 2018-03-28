class Tomagotchi {
	constructor () {
		this.name = "Grimer";
		this.age = 1;
		// hunger, sleepiness, boredom should start at 0,
		// then increase incrementally
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
	}
	play() {
		if (this.boredom > 1 && lightOn === true) {
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
			$("#lights_off").css({"background-color": "black", "z-index": "1000"});
			$("button").css("z-index", "1001");
			$("#stats").css("z-index", "1001");
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
			$("#lights_off").css({"background": "none", "z-index": "-1"});
			$("button").css("z-index", "0");
			$("#stats").css("z-index", "0");
			// change text for light button
			$("#light").text("Lights Off");
			// make pet reappear
			$("#pet").css("visibility", "visible")
		}
		// display lightbulb?
	}
	eat () {
		// hunger can't be below 1	
		// light needs to be on so pet doesn't get fed when they're sleeping.
		if (this.hunger > 1 && lightOn === true) {
			// lower hunger by 1
			this.hunger--;
			$("#hunger").text("Hunger: " + this.hunger);
			displayMessage(this.name + " ate a hearty meal!")
		}
	}
	changeName (input) {
		this.name = input;
		$("#name").text("Name: " + input);
	}
	morph () {
		// set conditions to morph
		if (this.age === 5) {
			// change image of pet to muk
			$("#pet").attr("src", "images/muk.png")
		} else if (this.age === 10) {
			$("#pet").attr("src", "images/alolan_muk.png")
		}
		// set conditions to become parent
	}
	die () {
		$("#pet").attr("src", "images/dead_pet.png")
		$("#reset").css("visibility", "visible")
	}
}

// create instance of tomagotchi
const pet = new Tomagotchi ();

// display default stats in browser
$("#hunger").text("Hunger: " + pet.hunger);
$("#boredom").text("Boredom: " + pet.boredom);
$("#sleepiness").text("Sleepiness: " + pet.sleepiness);
$("#age").text("Age: " + pet.age);
$("#name").text("Name: " + pet.name);

// RAISE STAT FUNCTIONS

const raiseHunger = () => {
	if (pet.hunger < 10) {
		pet.hunger++;
	}
	$("#hunger").text("Hunger: " + pet.hunger);
	if (pet.hunger === 10) {
		pet.die();
	}
}
const raiseBoredom = () => {
	if (pet.boredom < 10) {
		pet.boredom++;
	}
	$("#boredom").text("Boredom: " + pet.boredom);
	if (pet.boredom === 10) {
		pet.die();
	}
}
const raiseSleepiness = () => {
	if (pet.sleepiness < 10) {
		pet.sleepiness++;
	}
	$("#sleepiness").text("Sleepiness: " + pet.sleepiness);
	if (pet.sleepiness === 10) {
		pet.die();
	}
}
const raiseAge = () => {
	pet.age++;
	$("#age").text("Age: " + pet.age);
	if (pet.age === 5) {
		pet.morph();
	} else if (pet.age === 10) {
		pet.morph();
		clearInterval(intID);
	}

}
// raising age every minute
const intID = setInterval(raiseAge, 60000);
// raising hunger every 45 seconds
setInterval(raiseHunger, 45000);
setInterval(raiseSleepiness, 50000);
setInterval(raiseBoredom, 55000);

// BUTTON FUNCTIONS

const displayMessage = (message) => {
	// param is the message to be displayed
	$("#message").text(message);
}

$("#feed").on("click", function(event) {
	pet.eat();
});
// set default value with light being on 
let lightOn = true;
$("#light").on("click", function(event) {
	pet.sleep();
});
$("#play").on("click", function(event) {
	pet.play();
});

// NAME PET MODAL FUNCTIONALITY

const modal = $(".modal");
const openModal = $(".name_pet");
const closeModal = $(".close-button");

closeModal.on("click", function (event) {
	modal.removeClass("show-modal");
});

openModal.on("click", function (event) {
	modal.addClass("show-modal");
});

// add function to rename pet whatever user wants
$("#name_pet").on("click", function(event) {
	newName = $("input").val();
	pet.changeName(newName);
});

// add option to reset to original name
$("#default").on("click", function(event) {
	defaultName = "Grimer";
	pet.changeName(defaultName);
})
$("#reset").on("click", function(event) {
	$("#pet").attr("src", "images/grimer.png");
	pet.name = "Grimer";
	pet.age = 1;
	pet.hunger = 1;
	pet.sleepiness = 1;
	pet.boredom = 1;
	this.css("visibility", "hidden");
})