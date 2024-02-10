const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const result = getResult(lines.slice(1));
console.log(result.L, result.R);

function getResult(orderList) {
    return orderList.reduce(move, {
        L: 0,
        R: 0,
        array: Array.from({length: 200001}, () => null),
        currentIndex: 100000,
    })

    function move(total, order) {
        const distance = Number(order[0]) - 1;
        const direction = order[1];
        const reversedDirection = getReversedDirection(direction);

        for (let index = 0; index <= distance; index++) {
            const nextIndex = total.currentIndex + (direction === 'R' ? index : (-1 * index));
            total[direction] += 1;
            if (total.array[nextIndex] !== null && total.array[nextIndex] !== direction) {
                total[reversedDirection] = Math.max(0, total[reversedDirection] - 1);
            }
            total.array[nextIndex] = direction;
        }
        total.currentIndex += direction === 'R' ? distance : (-1 * distance);

        return total;
    }

    function getReversedDirection(direction) {
        return direction === 'L' ? 'R' : 'L';
    }
}