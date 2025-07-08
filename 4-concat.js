// Get the list of arguments passed to the script
const args = process.argv.slice(2); // slice(2) to ignore the first two elements

// Check if at least one argument is passed
if (args[0]) {
    console.log(`${args[0]} cool`);
    console.log(`${args[0]} is cool`);
} else {
    console.log("Please provide an argument.");
}