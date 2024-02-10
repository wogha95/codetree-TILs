const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [a, b] = lines[0];
const n = lines[1][0];

const result = fromDecimal(toDecimal(n, a), b);
console.log(result);

function toDecimal(fromNumber, from) {
    let digit = 0;
    let result = 0;

    while (fromNumber !== 0) {
        result += (fromNumber % 10) * Math.pow(from, digit);
        fromNumber = Math.floor(fromNumber / 10);
        digit += 1;
    }

    return result;
}

function fromDecimal(fromNumber, to) {
    const reversedResult = [];
    
    while (fromNumber !== 0) {
        reversedResult.push(fromNumber % to);
        fromNumber = Math.floor(fromNumber / to);
    }

    return Number(reversedResult.reverse().join(''));
}