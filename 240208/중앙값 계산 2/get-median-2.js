const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const numbers = lines[1];
console.log(...getMidNumberList(numbers).result);

function getMidNumberList(numberList) {
    return numberList.reduce((board, current, index) => {
        board.array.push(current);

        if (index % 2 === 0) {
            board.array.sort((a, b) => a - b);
            const mid = board.array[Math.floor(board.array.length / 2)];
            board.result.push(mid);
        }

        return board;
    }, {array: [], result: []})
}