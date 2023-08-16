console.log("Hello World!");

//Favorite Colors

//create an array called colors
//strings red, orange, yellow, green, blue and purple

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// Use the console.log() function to print the colors array to the console.
console.log(colors);
// Use the shift() method to remove the first element from the array 
// store it in a variable called "firstColor".
const firstColor = colors.shift()
console.log(firstColor);
// Use the pop() method to remove the last element from the array 
// store it in a variable called "lastColor".
const lastColor = colors.pop();
console.log(lastColor);
// Log the colors array to the console and note how it changed.
console.log(colors);
// Use the push() method to add the string "pink" to the end of the array.
colors.push("pink");
console.log(colors);
// Use the unshift() method to add the string "brown" to the beginning of the array.
colors.unshift("brown");
console.log(colors);
// Use the slice() method to create a new array called "newColors" that 
// contains the second, third, and fourth elements of the original array.
const newColors = colors.slice(1,4);
console.log(newColors);
// Use the join() method to combine the elements of the newColors array into a single string separated by commas.
// Try passing a string as an argument into .join(), and see what the result is.
console.log(newColors.join(","));
// Create a new variable called colorsCopy. 
// Use the spread operator (...) to create a copy of “colors”. 
// Print the result to the console.
const colorsCopy = console.log(...colors);

//javascript objects

//Create and modify an Object that stores information about a person.

// First, create an object called "person" with the following properties:
//  "name" (a string), "age" (a number), and "favoriteColors" (an array of strings).

//console.log it

// Access the "name" property of the object and store it in a variable called "name".

// Access the "age" property of the object and store it in a variable called "age".

// Access the "favoriteColors" property of the object 
// and store it in a variable called "favoriteColors".

// Print the name, age, and favoriteColors variables to the console.

// Add a new property to the person object called favoriteFood and assign it “pizza.”

// Use the delete operator to remove “favoriteColors” from the person object.

// Create a newPerson variable. 
// Using the spread operator (...) make a copy of “person” and assign the value to newPerson.

// Change the name and age properties on newPerson to something different.

// Log both objects to the console.

