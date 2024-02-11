const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, B] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(giftList) {
    let maxCount = 0;

    for (let index = 0; index < N; index++) {
        const filteredGiftList = giftList.filter((_, i) => i !== index);
        recursive(filteredGiftList, giftList[index][0] + giftList[index][1], 1, 0, false);
    }

    return maxCount;

    function recursive(filteredGiftList, cost, count, currentIndex, isUsedCoupon) {
        if (B < cost) {
            return;
        }

        maxCount = Math.max(maxCount, count);
        if (currentIndex === N - 1) {
            return;
        }

        const [p, s] = filteredGiftList[currentIndex];
        recursive(filteredGiftList, cost + p + s, count + 1, currentIndex + 1, isUsedCoupon);
        recursive(filteredGiftList, cost, count, currentIndex + 1, isUsedCoupon);
        !isUsedCoupon && recursive(filteredGiftList, cost + p / 2 + s, count + 1, currentIndex + 1, true);
    }
}