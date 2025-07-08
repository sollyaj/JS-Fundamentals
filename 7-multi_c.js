const args = process.argv.slice(2);
const x = Number(args[0]);
const isInteger = Number.isInteger(x);

if (!isInteger || x < 1) {
    console.log("Missing number of occurrences");
} else {
    let count = 0;
    while (count < x) {
        console.log("C is fun");
        count++;
    }
}