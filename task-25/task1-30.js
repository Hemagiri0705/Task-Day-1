let person = {
    name: "Hemagiri",
    age: 20,
    city: "Punganur"
};
console.log("person object:", person);

console.log("Dot notation:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

console.log("Bracket notation:");
console.log("Name:", person["name"]);
console.log("Age:", person["age"]);
console.log("City:", person["city"]);

person.email = "hemagiri123@example.com";
console.log("person object with email:", person);

person.city = "banglore";
console.log("person object with updated city:", person);

delete person.age;
console.log("person object after deleting age:", person);

console.log("Looping through person object:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

let book = {
    title: "The Last Leaf",
    author: "O.Henry",
    year: 1907
};
console.log(" book object:", book);

person.address = {
    street: "123 Main St",
    zip: "90210"
};
console.log("person object with nested address:", person);

let students = [
    { name: "Bobby", id: 1, grade: "A" },
    { name: "Charan", id: 2, grade: "B" },
    { name: "David", id: 3, grade: "C" }
];
console.log("Second student's name:", students[1].name);

person.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};
console.log("Calling person.greet():");
person.greet();

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("calculator.add(5, 3):", calculator.add(5, 3));
console.log("calculator.subtract(10, 4):", calculator.subtract(10, 4));

person.age = 30;
person.isAdult = function() {
    return this.age >= 18;
};
console.log("person.isAdult():", person.isAdult());

let circle = {
    radius: 5,
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log("circle.area():", circle.area());

book.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
};
console.log("book.getSummary():", book.getSummary());

person.setName = function(newName) {
    this.name = newName;
};
person.setName("Rockstar");
console.log("person object after setName('Rockstar'):", person.name);

person.logPropertiesFormatted = function() {
    let formattedString = "Person Properties:\n";
    for (let key in this) {
        if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
            formattedString += `${key}: ${this[key]}\n`;
        } else if (typeof this[key] === 'object' && this[key] !== null) {
            formattedString += `${key}: ${JSON.stringify(this[key])}\n`;
        }
    }
    console.log("Calling person.logPropertiesFormatted():\n", formattedString);
};
person.logPropertiesFormatted();

person.greet = function() {
    console.log(` Hello, my name is ${this.name}. (Using 'this')`);
};
person.greet();

const objWithMethods = {
    name: "Method Demo",
    regularFunction: function() {
        console.log("Regular Function 'this.name':", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow Function 'this.name':", objWithMethods.name);
    }
};
objWithMethods.regularFunction();
objWithMethods.arrowFunction();

person.details = {
    hobby: "browsing net",
    getHobby: function() {
        console.log(`My hobby is ${this.hobby}.`);
        console.log(`My name from parent object: ${person.name}`);
    }
};
person.details.getHobby();

person.incorrectMethod = function() {
    setTimeout(() => {
        console.log("(Incorrect) - 'this.name' in arrow function inside method (will likely be undefined or global name):", this.name);
    }, 100);
};
person.incorrectMethod();

person.correctMethod = function() {
    const self = this;
    setTimeout(function() {
        console.log("(Correct 1) - 'this.name' in regular function with captured 'this':", self.name);
    }, 200);

    setTimeout(() => {
        console.log("(Correct 2) - 'this.name' in arrow function directly (if arrow function is the method itself):", this.name);
    }, 300);
};
person.correctMethod();

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2022);
console.log("car1:", car1);
console.log("car2:", car2);

Car.prototype.getDetails = function() {
    return `This is a ${this.year} ${this.brand} ${this.model}.`;
};
console.log("car1.getDetails():", car1.getDetails());
console.log("car2.getDetails():", car2.getDetails());

car1.mileage = 50000;
console.log("car1 with mileage:", car1);

Car.prototype.honk = function() {
    console.log("beep beep!");
};
car1.honk();
car2.honk();

Car.prototype.isNew = function() {
    return this.year >= 2022;
};
console.log("car1.isNew():", car1.isNew());
console.log("car2.isNew():", car2.isNew());

class Student {
    constructor(name, roll, grade) {
        this.name = name;
        this.roll = roll;
        this.grade = grade;
    }

    getDetails() {
        return `Student Name: ${this.name}, Roll No: ${this.roll}, Grade: ${this.grade}`;
    }
}

let student1 = new Student("kishore", 101, "A");
let student2 = new Student("lokesj", 102, "B+");

console.log("student1 details:", student1.getDetails());
console.log(" student2 details:", student2.getDetails());

class GraduateStudent extends Student {
    constructor(name, roll, grade, degree) {
        super(name, roll, grade);
        this.degree = degree;
    }

    getDegree() {
        return `Degree: ${this.degree}`;
    }
}

let gradStudent1 = new GraduateStudent("Grace", 201, "A-", "Masters in CS");
console.log("gradStudent1 details:", gradStudent1.getDetails());
console.log("gradStudent1 degree:", gradStudent1.getDegree());