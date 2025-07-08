// Get the list of arguments passed to the script
const args = process.argv.slice(2); 

// Check if no arguments were passed
if (!args[0]) {
    console.log("No argument");
} else {
    console.log(args[0]);
}