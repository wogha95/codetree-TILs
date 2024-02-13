const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, K] = lines[0];
const result = getResult(lines[1]);
console.log(result);

function getResult(numbers) {
    const [bottom, top] = [Math.min(...numbers), Math.max(...numbers) - K];
    let minCost = Number.MAX_SAFE_INTEGER;

    for (let standard = bottom; standard <= top; standard++) {
        let cost = 0;
        const [start, end] = [standard, standard + K];

        numbers.forEach(value => {
            if (value < start) {
                cost += Math.abs(value - start);
            }
            if (end < value) {
                cost += Math.abs(value - end);
            }
        })

        minCost = Math.min(minCost, cost);
    }
    
    return minCost;
}