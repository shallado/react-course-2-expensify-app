class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi, I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} years(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`
		}
		
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		const greeting = super.getGreeting();
		
		if (this.homeLocation) {
			return greeting + ` I'm visiting from ${this.homeLocation}.`;
		} else {
			return greeting;
		}
	}
}

const me = new Traveler('Ryan Higa', 26, 'San Diego');
console.log(me.getGreeting());

const other = new Traveler('Ryan Higa', 26);
console.log(other.getGreeting());