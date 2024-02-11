const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(giftList) {
    let maxCount = 0;
    let filteredGiftList = null;

    for (let index = 0; index < N; index++) {
        filteredGiftList = giftList.filter((_, i) => i !== index).sort((a, b) => a[0] + a[1] - b[0] - b[1]);
        recursive(giftList[index][0] / 2 + giftList[index][1], 1, 0);
    }

    return maxCount;

    function recursive(cost, count, currentIndex) {
        if (B < cost) {
            return;
        }

        maxCount = Math.max(maxCount, count);
        if (currentIndex === N - 1) {
            return;
        }

        const [p, s] = filteredGiftList[currentIndex];
        recursive(cost + p + s, count + 1, currentIndex + 1);
        recursive(cost, count, currentIndex + 1);
    }
}