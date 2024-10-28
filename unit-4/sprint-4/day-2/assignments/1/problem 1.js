// Step 1: Define the Animal constructor function
function Animal() {
    this.type = "Animal";
}

// Step 2: Add a sound method to Animal.prototype
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// Step 3: Define the Dog constructor function that inherits from Animal
function Dog() {
    Animal.call(this);  
    this.type = "Dog";  
}

// Step 4: Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  

// Step 5: Override the sound method in Dog.prototype
Dog.prototype.sound = function() {
    console.log("Bark");
};

// Step 6: Create an instance of Dog
const myDog = new Dog();

// Step 7: Call the sound method on myDog
myDog.sound();  
