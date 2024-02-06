const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));
const [N, M] = lines[0];
const NUMBERS = lines[1];

lines.slice(2).forEach(([start, end]) => {
    console.log(getSum(start - 1, end - 1));
})

function getSum(start, end) {
    return NUMBERS.reduce((total, current, index) => {
        if (start <= index && index <= end) {
            return total + current;
        }
        return total;
    }, 0)
}