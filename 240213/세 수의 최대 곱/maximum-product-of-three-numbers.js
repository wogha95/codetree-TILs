const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N] = lines[0];
const result = getResult(lines[1]);
console.log(result);

function getResult(nubmerList) {
    nubmerList.sort((a, b) => a - b);
    
    const 양양양 = nubmerList.slice(N - 3).reduce((acc, current) => acc * current);
    const 양음음 = nubmerList[0] * nubmerList[1] * nubmerList[N - 1];

    return Math.max(양양양, 양음음);
}