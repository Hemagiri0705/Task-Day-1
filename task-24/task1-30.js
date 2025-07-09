function greet() {
  console.log("Hello, World!");
}

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

function square(num) {
  return num * num;
}

function isEven(num) {
  return num % 2 === 0;
}

function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}

let greetExpression = function() {
  console.log("Hello!");
};

let squareExpression = function(num) {
  return num * num;
};

let area = function(length, width) {
  return length * width;
};

let isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
};

let reverseString = function(str) {
  return str.split('').reverse().join('');
};

let greetArrow = () => {
  console.log("Hello!");
};

let add = (a, b) => a + b;

let cube = num => num ** 3;

let isDivisible = num => num % 3 === 0 && num % 5 === 0;

let greetUser = name => `Hello, ${name}!`;

function sum(a, b) {
  return a + b;
}

function favoriteColor(name, color) {
  return `${name}'s favorite color is ${color}.`;
}

function average(a, b, c) {
  return (a + b + c) / 3;
}

function repeatString(str, num) {
  return str.repeat(num);
}

function getArrayLength(arr) {
  return arr.length;
}

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

function multiplyOrAdd(a, b, operation) {
  return operation === "multiply" ? a * b : a + b;
}

function includesJS(str) {
  return str.includes("JS");
}

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

let globalName = "Hemagiri";
function sayGlobalName() {
  console.log("Hello, " + globalName);
}

function showLocal() {
  let localVar = "I'm local";
  console.log(localVar);
}

function runCounter() {
  let count = 0;
  count++;
  console.log("Count:", count);
}

function firstFunc() {
  let value = 10;
  console.log("First:", value);
}

function secondFunc() {
  let value = 20;
  console.log("Second:", value);
}

let score = 50;
function updateScore() {
  console.log("Before:", score);
  score += 10;
  console.log("After:", score);
}

// Call for outputs

greet();                        
sayHello("Sir");             
console.log(square(4));        
console.log(isEven(5));        
console.log(checkAge(17));     
greetExpression();             
console.log(squareExpression(3)); 
console.log(area(5, 10));      
console.log(isPalindrome("madam")); 
console.log(reverseString("hello")); 
greetArrow();                  
console.log(add(3, 4));        
console.log(cube(2));          
console.log(isDivisible(15)); 
console.log(greetUser("Jack"));
console.log(sum(8, 2));        
console.log(favoriteColor("Bobby", "blue"));
console.log(average(4, 5, 6));
console.log(repeatString("hi", 3)); 
console.log(getArrayLength([1, 2, 3])); 
console.log(getFullName("Dj", "Tillu"));
console.log(maxOfThree(1, 9, 3));        
console.log(multiplyOrAdd(5, 2, "multiply")); 
console.log(includesJS("I love JS"));    
console.log(factorial(5));               
sayGlobalName();             
showLocal();                 
runCounter();             
firstFunc();                
secondFunc();                
updateScore();              
