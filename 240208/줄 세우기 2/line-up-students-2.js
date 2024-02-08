const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const board = getBoard(lines.slice(1));
board.sort(compare);
print(board);

function getBoard(array) {
    return array.reduce((total, current, index) => {
        return [
            ...total,
            {
                height: current[0],
                weight: current[1],
                index: index + 1,
            }
        ]
    }, [])
}

function compare(a, b) {
    if (a.height < b.height) {
        return -1;
    } else if (a.height > b.height) {
        return 1;
    }

    if (a.weight < b.weight) {
        return -1;
    } else if (a.weight > b.weight) {
        return 1;
    }

    return -1;
}

function print(array) {
    array.forEach(element => console.log(element.height, element.weight, element.index))
}