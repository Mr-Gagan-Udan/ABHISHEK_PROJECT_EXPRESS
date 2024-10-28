//
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}


//ans 2
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}


//ans 3
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`The ${car.make} ${car.model} is already rented.`);
    }
};


//ans 4
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);  // Call the Customer constructor
    this.discountRate = discountRate;
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;


//a ns 5
function calculateRentalPrice(car, days, customer) {
    const baseRate = 50;
    let carTypeMultiplier = 1;  // Default for standard cars
    
    // Assume different rates for car types
    if (car.model === "SUV") {
        carTypeMultiplier = 1.5;
    } else if (car.model === "Sedan") {
        carTypeMultiplier = 1.2;
    }

    let totalCost = baseRate * carTypeMultiplier * days;

    if (customer instanceof PremiumCustomer) {
        totalCost *= (1 - customer.discountRate);
    }

    return totalCost;
}


//ans 6

Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
        car.isAvailable = true;
        const index = this.rentedCars.indexOf(car);
        if (index > -1) {
            this.rentedCars.splice(index, 1);
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }
    }, 2000);  // Simulate a 2-second delay
};




//ans7

function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}



//ams 8


// Step 8: Demonstrate the functionality

// Create some cars
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Ford", "Mustang", 2021);
const car3 = new Car("Honda", "SUV", 2019);

// Create customers
const customer1 = new Customer("John Doe");
const premiumCustomer1 = new PremiumCustomer("Jane Doe", 0.1);

// Rent cars
customer1.rentCar(car1);  
premiumCustomer1.rentCar(car3);  

// Calculate rental prices
console.log(`Rental cost for John: $${calculateRentalPrice(car1, 5, customer1)}`);
console.log(`Rental cost for Jane: $${calculateRentalPrice(car3, 3, premiumCustomer1)}`);

// Return cars
customer1.returnCar(car1); 
premiumCustomer1.returnCar(car3);  
// Simulate car maintenance
Maintenance(car2, 3000);  


