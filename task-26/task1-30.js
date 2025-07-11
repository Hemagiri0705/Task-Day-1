let nums = [10, 20, 30, 40, 50]; console.log(nums);
let colors = ["Red", "Blue", "Green"]; console.log(colors[0], colors[1], colors[2]);
let empty = []; empty[0] = "Apple"; console.log(empty);
let mixed = ["Hemagiri", 20, true, null]; console.log(mixed.length);
console.log(nums[nums.length - 1]);
for (let i = 0; i < nums.length; i++) console.log(nums[i]);
let fruits = ["Mango", "Banana", "Grapes"]; for (let fruit of fruits) console.log(fruit);
console.log(typeof fruits, Array.isArray(fruits));
let nested = [[1, 2], [3, 4]]; console.log(nested[1][1]);
nums[1] = 99; console.log(nums);

fruits.push("Orange"); console.log(fruits);
console.log(fruits.pop());
fruits.unshift("Pineapple"); console.log(fruits);
console.log(fruits.shift());
console.log(fruits.length);
function addUnique(arr, item) { if (!arr.includes(item)) arr.push(item); } addUnique(fruits, "Kiwi"); 
console.log(fruits);
let rev = [...nums].reverse(); console.log(rev);
let sorted = [...nums].sort((a, b) => a - b); console.log(sorted);
let test = [10, 99, 30, 40, 50]; test.splice(2, 2); console.log(test);
let sliced = nums.slice(1, 4); console.log(sliced);

let doubled = nums.map(n => n * 2); console.log(doubled);
let even = nums.filter(n => n % 2 === 0); console.log(even);
let total = nums.reduce((sum, n) => sum + n, 0); console.log(total);
let found = nums.find(n => n > 25); console.log(found);
console.log(fruits.includes("banana"));  // case-sensitive
console.log(fruits.indexOf("Apple"));
let words = ["Hello", "world"]; console.log(words.join(" "));
let allNum = [1, 2, 3]; console.log(allNum.every(n => typeof n === "number"));
let someNeg = [5, -3, 7]; console.log(someNeg.some(n => n < 0));
let a1 = [5, 7], a2 = [11, 13]; console.log(a1.concat(a2), [...a1, ...a2]);
