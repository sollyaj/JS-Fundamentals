const args = process.argv.slice(2);
const firstArgument = args[0];

// Check if the first argument is a number
const number = Number(firstArgument);
const isInteger = Number.isInteger(number);

if (isInteger) {
    console.log(`My number: ${number}`);
} else {
    console.log("Not a number");
}