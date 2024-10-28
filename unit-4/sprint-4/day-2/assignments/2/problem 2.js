// Step 1: Define the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add the introduce method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Define the Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age);  
    this.jobTitle = jobTitle;
}

// Step 4: Ensure Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 
 
// Step 5: add the work method to Employee.prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Step 6: Demonstration
// Create an instance of Person
const person = new Person("Alice", 30);

// Create an instance of Employee
const employee = new Employee("Bob", 25, "Software Developer");

// Call introduce on both instances
person.introduce();  
employee.introduce();  

// Call work on the Employee instance
employee.work();