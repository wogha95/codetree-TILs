const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [m1, d1, m2, d2] = lines[0].map(n => Number(n));
const A = lines[1][0];

const [id1, id2] = [getIdNumber(m1, d1), getIdNumber(m2, d2)];
console.log(Math.ceil((id2 - id1) / 7));

function getIdNumber(month, day) {
    const monthsOf31 = [1, 3, 5, 7, 8, 10, 12];

    return day + Array.from({length: month - 1}, (_, index) => index + 1).reduce((sum, current) => {
        if (monthsOf31.includes(current)) {
            return sum + 31;
        }
        if (current === 2) {
            return sum + 29;
        }
        return sum + 30;
    }, 0)
}