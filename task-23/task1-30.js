// 1. Positive or Negative
let num1 = -5;
console.log(num1 >= 0 ? "Positive" : "Negative");

// 2. Even or Odd
let num2 = 8;
console.log(num2 % 2 === 0 ? "Even" : "Odd");

// 3. Age group
let age = 45;
if (age < 18) console.log("Minor");
else if (age < 60) console.log("Adult");
else console.log("Senior Citizen");

// 4. Leap year
let year = 2024;
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not Leap Year");

// 5. Greater number
let a = 10, b = 20;
console.log(a > b ? a : b);

// 6. Student grade
let mark = 72;
if (mark >= 90) console.log("A");
else if (mark >= 75) console.log("B");
else if (mark >= 60) console.log("C");
else console.log("F");

// 7. Divisible by 3 and 5
let num3 = 15;
console.log(num3 % 3 === 0 && num3 % 5 === 0);

// 8. Check empty string
let str1 = "";
console.log(str1 === "" ? "Empty" : "Not Empty");

// 9. Day name by switch
let dayNum = 3;
switch (dayNum) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid");
}

// 10. Check vowel
let ch = 'e';
switch (ch) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("Vowel"); break;
  default:
    console.log("Not a vowel");
}

// 11. Weather clothes
let weather = "cold";
if (weather === "sunny") console.log("t-shirt");
else if (weather === "rainy") console.log("raincoat");
else if (weather === "cold") console.log("jacket");

// 12. Weekend or Weekday
let day = "Sunday";
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend"); break;
  default:
    console.log("Weekday");
}

// 13. Password strength
let password = "myp@ss123";
console.log(password.length >= 8 ? "Strong" : "Weak");

// 14. Compare strings
let strA = "hello", strB = "HELLO";
console.log(strA.toLowerCase() === strB.toLowerCase());

// 15. Specific range
let num4 = 55;
console.log(num4 >= 10 && num4 <= 100);

// 16,17 print numbers using for loop
// 18 print numbers using while loop


//16. 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 17. Even 1 to 20
for (let i = 2; i <= 20; i += 2) console.log(i);

// 18. Odd 1 to 20
let i = 1;
while (i <= 20) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// 19. do...while 5 to 1
let j = 5;
do {
  console.log(j);
  j--;
} while (j >= 1);

// 20. Sum 1 to 50
let sum = 0;
for (let i = 1; i <= 50; i++) sum += i;
console.log("Sum:", sum);

// 21. Factorial
let num = 5, fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
console.log("Factorial:", fact);

// 22. Print names
let names = ["Manjunath", "jayanth", "Aqhil"];
for (let name of names) console.log(name);

// 23. Print chars
let sample = "hello";
let index = 0;
while (index < sample.length) {
  console.log(sample[index]);
  index++;
}

// 24. Countdown 10 to 1
for (let i = 10; i >= 1; i--) console.log(i);

// 25. Print pattern
for (let i = 1; i <= 3; i++) console.log("*".repeat(i));

// 26. for...of with fruits
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) console.log(fruit);

// 27. for...in object
let person = { name: "Hemagiri", age: 20, city: "punganur" };
for (let key in person) console.log(`${key}: ${person[key]}`);

// 28. Max in array
let nums = [5, 10, 3, 8, 21];
let max = nums[0];
for (let n of nums) if (n > max) max = n;
console.log("Max:", max);

// 29. Reverse string
let text = "hello";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) reversed += text[i];
console.log("Reversed:", reversed);

// 30. Count vowels
let input = "education";
let vowelCount = 0;
for (let ch of input) {
  if ("aeiou".includes(ch.toLowerCase())) vowelCount++;
}
console.log("Vowel count:", vowelCount);
