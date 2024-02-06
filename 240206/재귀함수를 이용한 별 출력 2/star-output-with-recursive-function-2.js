const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));
const N = lines[0][0];

printStar(N);

function printStar(n) {
    const star = '* '.repeat(n);
    console.log(star);

    if (n !== 1) {
        printStar(n - 1);
    }

    console.log(star);
}