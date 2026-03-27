// Final Project: final-practiceUnit0
// A Simplified Roleplaying Game

// SECTION ONE
// 1. Values, Data Types, and Operation
// 2. Stringing Characters Together
// 3. Control Structures and Logic

// Pseudocode: 
// Assign variable for user input - readLine-sync
// Assign variables to player name as a string and player health as a number, using an if statement to grant special privileges.
// Assign the player's weapon choice as a number and use booleans to track the selected weapon. 
// Log results to the console.

console.log("\n====================================================================================================");

console.log(`\n\tSECTION ONE INCLUDES SKILLS FROM:
    \n\t1. Values, Data Types, and Operation
    \t2. Stringing Characters Together
    \t3. Control Structures and Logic\n`); // indicates there are skills from the following three lessons

console.log("====================================================================================================\n");

const input = require("readline-sync"); // assigning variable input to require readline-sync
let userName = input.question("Hi there intrepid explorer! Please choose a name for your adventurer: "); // assigning the variable userName to the users input

let playerHealth = 0; //initializing and assigning playerHealth variable

if (userName.trim().toUpperCase() === "BRIAN") { // using the .trim() and .toUpperCase() methods to clean up user input with conditional if statement
    playerHealth = 110; // assigning playerHealth variable, giving those named Brian (such a great name) a little advantage
} else {
    playerHealth = 10; // everyone else gets the standard 10 HP 
}

console.log("\n====================================================================================================");

let weaponSelection = Number(input.question(`\nWelcome ${userName}, please choose a starting weapon.
 \n1. Sword\t2. Staff\t3. Bow\n\nPlease select a number between 1 and 3: `)); 
// using template literal and assigning the weapon variable to the numeric input of the players weapon choice

let weaponName = null; // assigning the variable weaponName to null

let hasSword = false;
let hasStaff = false;
let hasBow = false;
let hasNothing = false; // assigning boolean values to possession of either the sword, staff, bow, or nothing
    
if (weaponSelection === 1) {
    hasSword = true;
    weaponName = "Sword";
} else if (weaponSelection === 2) {
    hasStaff = true;
    weaponName = "Staff";
} else if (weaponSelection === 3) {
    hasBow = true;
    weaponName = "Bow";
} else {
    hasNothing = true;
    weaponName = ("Stick");
}

console.log("\n====================================================================================================");

console.log(`\nGreat choice ${userName}, you have chosen the ${weaponName}!`); // using template literal to print player choices and message to console
console.log("\n\nGood Luck...\n");

console.log("====================================================================================================");

// SECTION TWO
// 4. Building Arrays
// 5. Using Arrays
// 6. Creating and Using Objects

// Pseudocode:
// Create an inventory array with starter items.
// Create a player object with player information and a nested inventory array.
// Check the inventory to confirm the weapon is missing.
// Add the missing weapon to the inventory with push().
// Print the updated inventory count.

console.log(`\n\tSECTION TWO INCLUDES SKILLS FROM:
    \n\t4. Building Arrays 
    \t5. Using Arrays 
    \t6. Creating and Using Objects\n`); 

console.log("====================================================================================================\n");

let playerInventory = ["Healing Potion", "Compass", "Map"]; // creating playerInventory array

console.log(`Sometime later in ${userName}'s adventure... \n`);

console.log(`After the terrible fall you just took down the side of that mountain 
and after noticing your ${weaponName} lying on the ground beside you.
You decide to check over yourself to make sure everything is still there.\n`);

let playerCharacter = {             
    Name: userName,                                           // creating the playerCharacter object
    HP: playerHealth,
    Inventory: playerInventory
};

console.log("====================================================================================================\n");

for (objects in playerCharacter) {
    console.log(`${objects}: ${playerCharacter[objects]}\n`);  // displaying all items withing the playerCharacter object
}

console.log("====================================================================================================");

console.log(`\nObviously your ${weaponName} is lying on the ground so you go pick it up and stow it 
back in your inventory, then do one final check.\n`);

console.log("====================================================================================================\n");

playerCharacter.Inventory.push(`${weaponName}`); // using .push() to add the sword to the inventory.

console.log(`The total number of items in your inventory is now ${playerInventory.length}.
And a final once over yields:\n`);  

console.log(playerCharacter.Inventory);

console.log("\nSatisfied that everything is still there, you once again head off to fulfill your quest...\n");

console.log("====================================================================================================");

console.log("\nTHE END\n");

console.log("====================================================================================================\n");








