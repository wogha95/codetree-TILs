const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [N] = lines[0];
operate(lines.slice(1));

function operate(orderList) {
    const array = [];
    orderList.forEach(order => {
        if (order[0] === 'push_back') {
            const A = Number(order[1]);
            array.push(A);
        }
        if (order[0] === 'pop_back') {
            array.pop();
        }
        if (order[0] === 'size') {
            console.log(array.length);
        }
        if (order[0] === 'get') {
            const K = Number(order[1]);
            console.log(array[K - 1]);
        }
    })
}