console.log("javascript is working");

class Tomagotchi {
	constructor (name, age) {
		this.name = name;
		this.age = age;
		// hunger, sleepiness, boredom should start at 0,
		// then increase incrementally
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
	}
}

const displayPet = () =>{
	// image to display tomagotchi
}
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
}