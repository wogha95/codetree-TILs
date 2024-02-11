const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(gifts) {
    let maxCount = Number.MIN_SAFE_INTEGER;

    recursive(0, 0, 0, false);

    return maxCount;

    function recursive(totalBudget, count, currentIndex, isUsedCoupon) {
        if (currentIndex === N) {
            if (totalBudget <= B) {
                maxCount = Math.max(maxCount, count);
            }
            return;
        }

        recursive(totalBudget + gifts[currentIndex][0] + gifts[currentIndex][1], count + 1, currentIndex + 1, isUsedCoupon);
        recursive(totalBudget, count, currentIndex + 1, isUsedCoupon);
        !isUsedCoupon && recursive(totalBudget + gifts[currentIndex][0] / 2 + gifts[currentIndex][1], count + 1, currentIndex + 1, true);
    }
}