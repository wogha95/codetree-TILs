const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));
const N = lines[0][0];
const NUMBERS = lines[1];

const result = NUMBERS.reduce((lcm, current) => {
    return lcm * current / getLCM(lcm, current);
})

console.log(result);

function getLCM(a, b) {
    if (b === 0) {
        return a;
    }

    const rest = a % b;
    return getLCM(b, rest);
}