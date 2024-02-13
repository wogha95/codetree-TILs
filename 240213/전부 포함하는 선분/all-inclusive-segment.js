const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(numberList) {
    numberList.sort((a, b) => a[0] - b[0]);
    const cuttedFirst = numberList.slice(1);
    const cuttedFirstLength = cuttedFirst.reduce((total, current) => {
        total.min = Math.min(total.min, current[0]);
        total.max = Math.max(total.max, current[1]);
        return total;
    }, {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER,
    })

    numberList.sort((a, b) => a[1] - b[1]);
    const cuttedLast = numberList.slice(0, N - 1);
    const cuttedLastLength = cuttedLast.reduce((total, current) => {
        total.min = Math.min(total.min, current[0]);
        total.max = Math.max(total.max, current[1]);
        return total;
    }, {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER,
    })

    return Math.min(cuttedFirstLength.max - cuttedFirstLength.min, cuttedLastLength.max - cuttedLastLength.min);
}