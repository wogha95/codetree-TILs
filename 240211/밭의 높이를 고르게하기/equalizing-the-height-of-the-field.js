const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, H, T] = lines[0];

const result = getResult(lines[1]);
console.log(result);

function getResult(numberList) {
    const costList = numberList.map(n => Math.abs(n - H));
    const accumulativeCostList = costList.reduce((data, current) => ({
        sum: data.sum + current,
        list: [...data.list, data.sum + current],
    }), {
        sum: 0,
        list: [0]
    }).list

    let [start, end] = [0, T];
    let minCost = Number.MAX_SAFE_INTEGER;
    while (end !== N + 1) {
        const cost = accumulativeCostList[end] - accumulativeCostList[start];
        minCost = Math.min(minCost, cost);
        [start, end] = [start + 1, end + 1];
    }

    return minCost;
}