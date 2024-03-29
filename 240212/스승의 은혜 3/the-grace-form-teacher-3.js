const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(giftList) {
    let maxCount = 0;
    let filteredGiftList = null;

    for (let index = 0; index < N; index++) {
        filteredGiftList = giftList.filter((_, i) => i !== index).map(([p, s]) => p + s).sort((a, b) => a - b);
        recursive(giftList[index][0] / 2 + giftList[index][1], 1, 0);
    }

    return maxCount;

    function recursive(cost, count, currentIndex) {
        maxCount = Math.max(maxCount, count);
        if (currentIndex === N - 1) {
            return;
        }

        const ps = filteredGiftList[currentIndex];
        if (B < cost + ps) {
            return;
        }
        recursive(cost + ps, count + 1, currentIndex + 1);
    }
}