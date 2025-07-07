var myName = "Hemagiri";
console.log("Name (var):", myName);

let age = 19;
console.log("Age (initial):", age);
age = 20;
console.log("Age (updated):", age);

const birthYear = 2005;
console.log("Birth Year:", birthYear);
// birthYear = 2005; // ❌ Error: Assignment to constant variable

let personName = "Jagan";
let personAge = 20;
const isStudent = true;
console.log("Name:", personName, "Age:", personAge, "Student:", isStudent);

let score = 50;
console.log("Score 1:", score);
score = 60;
console.log("Score 2:", score);
score = 70;
console.log("Score 3:", score);

var globalVar = "I'm global";
{
    console.log("Inside block:", globalVar);
}
console.log("Outside block:", globalVar);

{
    let blockVar = "I'm block-scoped";
    console.log("Inside block:", blockVar);
}
// console.log("Outside block:", blockVar); // ❌ Error: blockVar is not defined

const num1 = 55;
const num2 = 40;
const result = num1 + num2;
console.log("Sum of constants:", result);

var greeting = "Hello";
// let greeting = "Hi"; // ❌ Error: Already declared

/*
    Use:
    - var: for function-scoped variables (legacy, avoid in modern JS)
    - let: for block-scoped variables that may change
    - const: for block-scoped constants that won't change
*/


let favMovie = "Pushpa 2";
console.log("Favorite Movie:", favMovie);

let height = 184;
console.log("Height:", height);

let isLoggedIn = false;
console.log("Is Logged In:", isLoggedIn);

let emptyVal = null;
console.log("Type of null:", typeof emptyVal); // object

let notAssigned;
console.log("Value:", notAssigned, "| Type:", typeof notAssigned);

let sym = Symbol("id");
console.log("Symbol:", sym);

let user = {
    name: "bhaskar",
    age: 25,
    email: "bhaskar123@example.com"
};
console.log("User object:", user);

console.log("typeof null:", typeof null); // object
console.log("typeof undefined:", typeof undefined); // undefined

let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers, "| typeof:", typeof numbers); // object

console.log("Is Array:", Array.isArray(numbers)); // true

let a = 18, b = 45;
console.log("+ :", a + b);
console.log("- :", a - b);
console.log("* :", a * b);
console.log(" / :", a / b);
console.log("% :", a % b);

let width = 5, height2 = 10;
let area = width * height2;
console.log("Rectangle Area:", area);

let x = 5;
x += 2; console.log("23. x += 2:", x);
x -= 1; console.log("23. x -= 1:", x);
x *= 3; console.log("23. x *= 3:", x);
x /= 2; console.log("23. x /= 2:", x);
x %= 4; console.log("23. x %= 4:", x);

let counter = 0;
counter++;
console.log("Counter++:", counter);
counter--;
console.log("Counter--:", counter);

let m = 8, n = 6;
console.log("> :", m > n);
console.log("< :", m < n);
console.log(">= :", m >= n);
console.log("<= :", m <= n);

console.log("'5' == 5:", '5' == 5);   // true (type coercion)
console.log("'5' === 5:", '5' === 5); // false (strict comparison)

console.log("'5' != 5:", '5' != 5);   // false
console.log("'5' !== 5:", '5' !== 5); // true

let isUser = true, isAdmin = false;
console.log("&& :", isUser && isAdmin); // false
console.log("|| :", isUser || isAdmin); // true
console.log("!isAdmin:", !isAdmin);     // true

let checkAge = 16;
console.log("Ternary result:", checkAge >= 18 ? "Adult" : "Minor");

let value = 50;
console.log("Value:", value);
console.log("Type:", typeof value);
let newValue = value + 10;
console.log("Final Result:", newValue > 50 ? "High" : "Low");
