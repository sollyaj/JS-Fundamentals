// Get the list of arguments passed to the script
const args = process.argv.slice(2); // slice(2) to ignore the first two elements

// Check the number of arguments and print the corresponding message
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}