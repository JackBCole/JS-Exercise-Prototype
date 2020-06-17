/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
this.stomach = [];
this.age = age;
this.name = name;
}
//create an eat method that gives the person the ability to eat some edible - it has a param of something that we can pass food to 
// if the stomach length is < 10 the person can eat
//we want to push the argument of something edible to the array (stomach)
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
Person.prototype.poop = function(){
  this.stomach = [];
}

//method called to soString - needs to return a string with name and age

 Person.prototype.toString = function(){
   return `${this.name}, ${this.age}`;

 }

// create my object

const personOne = new Person ('Ashton', 34);
const personTwo = new Person ('Devin', 26);
const personThree = new Person('Cora', 21);

console.log(personOne.toString());
personOne.eat('tacos');
personOne.eat('fried chicken');
personOne.eat('sashimi');

console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
console.log("task two!")

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = [];
  this.odometer=[]; 

}

Car.prototype.toString = function(){
  return `${this.model}, ${this.milesPerGallon}`;

}

Car.prototype.fill = function(gallons){
  if(this.tank.length < 1){
  this.tank.push(gallons)
  }

}
const full = 12;
//const fuelLoss = tank  
const aCar = new Car ('Model T', 2)

console.log(aCar.toString());

console.log(aCar.tank);

aCar.fill(full)

console.log(aCar.tank);

  // - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
  //       + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.

Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  this.tank = this.tank -  this.milesPerGallon * distance;
    if(this.tank >= 0){
      return `I ran out of fuel at ${this.odometer} miles!`  

    }else(console.log("I can still drive!"))

}
console.log(aCar.drive(10))


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/


function Baby(name, age, favoriteToy) {
  Person.call(this, name, age )
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

const aBaby = new Baby ("bill", 1, "Teddy Bear")
console.log(aBaby.play())

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Global binding is the use of "this" outside of a function, meaning "this" will call the window or global object and that is a lot of stuff

  2. Implicit binding - basically instead of function_name.key       its       this.key

  3. New binding is when we use this on a new object

  4. explicit binding is using the .call or .apply 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
