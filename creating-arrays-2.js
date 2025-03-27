// Task 1
// Create an array with a size of 7 and fill it with "Hello"
let greetingsArray = Array(7).fill("Hello");

console.log(greetingsArray);

// Task 2
greetingsArray.fill("Hi", 2, 5); // Updated index 

console.log(greetingsArray);

// Task 3
let numbersArray = Array(5);

// Added Loop 
for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = i * 10;
}

console.log(numbersArray);