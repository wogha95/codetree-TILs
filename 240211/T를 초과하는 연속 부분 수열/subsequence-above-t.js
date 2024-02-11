const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const t = lines[0][1];
const result = getResult(lines[1]);
console.log(result.maxCount);

function getResult(orders) {
    return orders.reduce(operate, {
        maxCount: 0,
        count: 0,
    })

    function operate(total, current) {
        if (t < current) {
            total.count += 1;
        } else {
            total.count = 0;
        }
        total.maxCount = Math.max(total.maxCount, total.count);
        return total;
    }
}