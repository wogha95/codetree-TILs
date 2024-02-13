const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N] = lines[0];
const result = getResult(lines[1]);
console.log(result);

function getResult(numberList) {
    numberList.sort((a, b) => a - b);

    let minGap = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < N; index++) {
        minGap = Math.min(minGap, Math.abs(numberList[index] - numberList[index + N]));
    }

    return minGap;
}