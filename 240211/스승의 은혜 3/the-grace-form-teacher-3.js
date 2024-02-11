const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(gifts) {
    let maxCount = 0;

    recursive(0, 0, 0, false);

    return maxCount;

    function recursive(cost, count, currentIndex, isUsedCoupon) {
        if (B < cost) {
            return;
        }

        maxCount = Math.max(maxCount, count);
        if (currentIndex === N) {
            return;
        }

        const [p, s] = gifts[currentIndex];
        recursive(cost + p + s, count + 1, currentIndex + 1, isUsedCoupon);
        recursive(cost, count, currentIndex + 1, isUsedCoupon);
        !isUsedCoupon && recursive(cost + p / 2 + s, count + 1, currentIndex + 1, true);
    }
}