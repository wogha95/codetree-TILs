const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [N] = lines[0].map(n => Number(n));
const CENTER = Math.floor(N / 2);
const orders = lines[1][0].split('');
const square = lines.slice(2).map(line => line.map(n => Number(n)));

const result = getResult();
console.log(result);

function getResult() {
    const [moveR, moveC] = [
        [-1, 0, 1, 0],
        [0, 1, 0, -1],
    ];
    let [currentR, currentC] = [CENTER, CENTER];
    let direction = 0;

    return orders.reduce((sum, order) => {
        const isNotMove = operate(order);
        return sum + (isNotMove ? 0 : square[currentR][currentC]);
    }, square[CENTER][CENTER])

    function operate(order) {
        if (order === 'L') {
            direction = (direction + 3) % 4;
            return true;
        }
        if (order === 'R') {
            direction = (direction + 1) % 4;
            return true;
        }
        if (order === 'F') {
            const isOutRangeR = currentR + moveR[direction] < 0 || N <= currentR + moveR[direction];
            const isOutRangeC = currentC + moveC[direction] < 0 || N <= currentC + moveC[direction];

            if (!isOutRangeR) {
                currentR = currentR + moveR[direction];
            }
            if (!isOutRangeC) {
                currentC = currentC + moveC[direction];
            }

            return isOutRangeR || isOutRangeC;
        }
    }
}