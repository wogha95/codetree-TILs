const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(gifts) {
    let maxCount = 0;

    recursive(0, 0, 0, false);

    return maxCount;

    function recursive(totalBudget, count, currentIndex, isUsedCoupon) {
        if (B < totalBudget) {
            return;
        }

        if (totalBudget <= B) {
            maxCount = Math.max(maxCount, count);
        }
        if (currentIndex === N) {
            return;
        }

        const [p, s] = gifts[currentIndex];
        recursive(totalBudget + p + s, count + 1, currentIndex + 1, isUsedCoupon);
        recursive(totalBudget, count, currentIndex + 1, isUsedCoupon);
        !isUsedCoupon && recursive(totalBudget + p / 2 + s, count + 1, currentIndex + 1, true);
    }
}