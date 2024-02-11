const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [N] = lines[0].map(n => Number(n));
const CENTER = Math.floor(N / 2);
const orders = lines[1][0].split('');
const square = lines.slice(2).map(line => line.map(n => Number(n)));
const visited = Array.from({length: N}, () => Array.from({length: N}, () => false));

const result = getResult();
console.log(result);

function getResult() {
    const [moveR, moveC] = [
        [-1, 0, -1, 0],
        [0, 1, 0, -1],
    ];
    let [currentR, currentC] = [CENTER, CENTER];
    let direction = 0;

    visited[CENTER][CENTER] = true;

    return orders.reduce((sum, order) => {
        const newNumber = operate(order);
        return sum + newNumber;
    }, square[CENTER][CENTER])

    function operate(order) {
        if (order === 'L') {
            direction = (direction + 3) % 4;
            return 0;
        }
        if (order === 'R') {
            direction = (direction + 1) % 4;
            return 0;
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
            const isVisited = visited[currentR][currentC];
            visited[currentR][currentC] = true;

            return isVisited || isOutRangeR || isOutRangeC ? 0 : square[currentR][currentC];
        }
    }
}