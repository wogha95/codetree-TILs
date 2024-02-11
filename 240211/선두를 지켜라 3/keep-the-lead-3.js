const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, M] = lines[0];
const result = getResult(lines.slice(1, 1 + N), lines.slice(1 + N, 1 + N + M));
console.log(result.count);

function getResult(nOrders, mOrders) {
    const nTimelines = nOrders.reduce(operate, [0]);
    const mTimelines = mOrders.reduce(operate, [0]);

    return nTimelines.reduce((board, nPosition, index) => {
        const mPosition = mTimelines[index];
        const nextHonor = nPosition === mPosition ? 'AB' : nPosition > mPosition ? 'A' : 'B';

        board.count = board.lastHonor === null ? 0 : checkChangeHonor(board.lastHonor, nextHonor, board.count);
        board.lastHonor = nextHonor;
        
        return board;
    }, {
        count: 0,
        lastHonor: null,
    })

    function operate(timelines, [v, t]) {
        const lastPosition = timelines[timelines.length - 1];
        const newTimelines = Array.from({length: t}, (_, index) => index + 1).map((value) => lastPosition + v * value)
        return timelines.concat(newTimelines);
    }

    function checkChangeHonor(lastHonor, nextHonor, currentCount) {
        return lastHonor !== nextHonor ? currentCount + 1 : currentCount;
    }
}