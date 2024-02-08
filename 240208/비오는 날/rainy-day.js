const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const result = getResult();
console.log(...result);

function getResult() {
    const rainList = lines.slice(1).filter(line => line[2] === 'Rain');
    return rainList.reduce((result, current) => getRecentDay(result, current));
}

function getRecentDay(a, b) {
    const [a_date, a_d] = a;
    const [b_date, b_d] = b;

    const [a_year, a_month, a_day] = a_date.split('-');
    const [b_year, b_month, b_day] = b_date.split('-');

    if (a_year < b_year) {
        return a;
    } else if (a_year > b_year) {
        return b;
    }

    if (a_month < b_month) {
        return a;
    } else if (a_month > b_month) {
        return b;
    }

    if (a_day < b_day) {
        return a;
    } else if (a_day > b_day) {
        return b;
    }
}