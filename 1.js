// Prompt the user to enter a string
let str = prompt("Enter a string: ");

// Prompt the user to enter the number of letters to relocate
let numberOfLetters = prompt("Enter the number of letters to relocate: ");

// Default to moving 3 characters if user input is invalid
if (!numberOfLetters || isNaN(numberOfLetters) || numberOfLetters > str.length) {
    console.log("Invalid input. Defaulting to moving 3 characters.");
    numberOfLetters = 3;
}

// Remove the first 'numberOfLetters' characters and add them to the end
let modifiedStr = str.substring(numberOfLetters) + str.substring(0, numberOfLetters);

// Print the original and modified string using a template literal
console.log(`Original String: '${str}'`);
console.log(`Modified String: '${modifiedStr}'`);
