const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [N] = lines[0].map(n => Number(n));
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
    let [currentR, currentC] = [Math.floor(N / 2), Math.floor(N / 2)];
    let direction = 0;

    visited[Math.floor(N / 2)][Math.floor(N / 2)] = true;

    return orders.reduce((sum, order) => {
        const newNumber = operate(order);
        return sum + newNumber;
    }, square[Math.floor(N / 2)][Math.floor(N / 2)])

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
            visited[currentR][currentC] = true;

            return isOutRangeR || isOutRangeC ? 0 : square[currentR][currentC];
        }
    }
}