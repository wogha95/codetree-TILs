const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const result = getResult(lines[0]);
console.log(result);

function getResult(X) {
    let time = 0;
    let speed = 1;
    let distance = 0;

    while (distance + speed * 2 <= X) {
        distance += speed * 2;
        speed += 1;
        time += 2;
    }
    if (distance + speed <= X) {
        distance += speed;
        time += 1;
    }

    return distance === X ? time : time + 1;
}