function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

Product.prototype.displayDetails = function() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
};



function Electronics(name, price, brand, model) {
    Product.call(this, name, price, 'Electronics');
    this.brand = brand;
    this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function() {
    console.log(`${this.name} is now ON.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.name} is now OFF.`);
};




function Clothing(name, price, size, material) {
    Product.call(this, name, price, 'Clothing');
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.displayDetails = function() {
    console.log(`Clothing: ${this.name}, Size: ${this.size}, Material: ${this.material}, Price: $${this.price}`);
};






function Books(name, price, author, genre) {
    Product.call(this, name, price, 'Books');
    this.author = author;
    this.genre = genre;
}

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.displayDetails = function() {
    console.log(`Book: ${this.name}, Author: ${this.author}, Genre: ${this.genre}, Price: $${this.price}`);
};





// Create instances of various products
const laptop = new Electronics("Laptop", 1000, "Dell", "XPS 15");
const shirt = new Clothing("T-Shirt", 25, "L", "Cotton");
const novel = new Books("The Great Gatsby", 15, "F. Scott Fitzgerald", "Classic Fiction");

// Display product details
laptop.displayDetails();  
shirt.displayDetails(); 
novel.displayDetails();  
laptop.powerOn();  
laptop.powerOff(); 
