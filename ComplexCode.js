/*
   Filename: ComplexCode.js
   Description: This code demonstrates a complex JavaScript program that performs a variety of advanced tasks.
*/

// Declare some global variables
let globalVar1 = 10;
let globalVar2 = "Hello";

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  accelerate() {
    console.log(`The ${this.brand} ${this.model} is accelerating...`);
  },
  honk() {
    console.log("Beep beep!");
  }
};

// Function that generates a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function that sorts an array of numbers in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage of the code
console.log(factorial(5));

const john = new Person("John Doe", 30);
john.sayHello();

console.log(isPalindrome("racecar"));

car.accelerate();
car.honk();

console.log(getRandomNumber(1, 100));

const numbers = [4, 2, 6, 1, 9, 3];
console.log(sortArray(numbers));

// ... Add more complex code here ...