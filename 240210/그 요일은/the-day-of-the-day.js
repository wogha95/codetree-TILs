const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [m1, d1, m2, d2] = lines[0].map(n => Number(n));
const A = lines[1][0];

const [id1, id2] = [getIdNumber(m1, d1) - getGap(A), getIdNumber(m2, d2) - getGap(A)];
console.log(Math.floor((id2 - id1) / 7) + 1);

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

function getGap(str) {
    switch(str) {
        case 'Mon':
            return 0;
        case 'Tue':
            return 1;
        case 'Wed':
            return 2;
        case 'Thu':
            return 3;
        case 'Fri':
            return 4;
        case 'Sat':
            return 5;
        case 'Sun':
            return 6;
    }
}