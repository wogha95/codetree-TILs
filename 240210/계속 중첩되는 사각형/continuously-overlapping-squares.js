const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const result = getResult(lines.slice(1));
console.log(result.B);

function getResult(squares) {
    return squares.reduce(order, {
        board: getInitialBoard(201),
        R: 0,
        B: 0,
    });

    function order(total, current, index) {
        const nextColor = index % 2 === 0 ? 'R' : 'B';
        const [x1, y1, x2, y2] = current.map(n => n + 100);

        for(let r = x1; r < x2; r++) {
            for (let c = y1; c < y2; c++) {
                const previousColor = total.board[r][c];

                if (previousColor !== nextColor) {
                    total[nextColor] += 1;
                }
                if (previousColor !== null && previousColor !== nextColor) {
                    total[previousColor] = Math.max(0, total[previousColor] - 1);
                }
                total.board[r][c] = nextColor;
            }
        }

        return total;
    }

    function getInitialBoard(length) {
        return Array.from({length: length}, () => Array.from({length: length}, () => null));
    }
}