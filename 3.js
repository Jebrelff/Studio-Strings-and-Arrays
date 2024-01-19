let string1 = "water bottles, meal packs, snacks, chocolate";
let string2 = "space suits, jet packs, tool belts, thermal detonators";
let string3 = "parrots, cats, moose, alien eggs";
let string4 = "blankets, pillows, eyepatches, alarm clocks";

// 1. Convert strings into four cabinet arrays and alphabetize the contents
const cabinet1 = string1.split(', ').sort();
const cabinet2 = string2.split(', ').sort();
const cabinet3 = string3.split(', ').sort();
const cabinet4 = string4.split(', ').sort();

// 2. Initialize a cargoHold array and add the cabinet arrays to it
const cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];

// Print cargoHold to verify its structure
console.log("Cargo Hold Structure:", cargoHold);

// 3. Query the user to select a cabinet (0-3) in the cargoHold
let selectedCabinet = prompt("Select a cabinet (0-3):");
selectedCabinet = parseInt(selectedCabinet);

// 4. Use bracket notation and a template literal to display the contents of the selected cabinet
if (!isNaN(selectedCabinet) && selectedCabinet >= 0 && selectedCabinet < cargoHold.length) {
    console.log(`Contents of Cabinet ${selectedCabinet}: ${cargoHold[selectedCabinet].join(', ')}`);
} else {
    console.log("Invalid selection. Please enter a number between 0 and 3.");
}

// 5. Bonus: Query the user for BOTH a cabinet in cargoHold AND a particular item
let bonusCabinet = prompt("Select a cabinet (0-3) for the bonus: ");
bonusCabinet = parseInt(bonusCabinet);

if (!isNaN(bonusCabinet) && bonusCabinet >= 0 && bonusCabinet < cargoHold.length) {
    let selectedItem = prompt("Enter an item to check in the selected cabinet: ");
    if (cargoHold[bonusCabinet].includes(selectedItem)) {
        console.log(`Cabinet ${bonusCabinet} DOES contain ${selectedItem}.`);
    } else {
        console.log(`Cabinet ${bonusCabinet} DOES NOT contain ${selectedItem}.`);
    }
} else {
    console.log("Invalid selection. Please enter a number between 0 and 3 for the bonus.");
}
