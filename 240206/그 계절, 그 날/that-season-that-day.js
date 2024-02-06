const lines = require("fs").readFileSync(0).toString().split("\n")
lines.forEach(line => {
    const [year, month, day] = line.split(' ').map(n => Number(n));

    const result = checkExistence(year, month, day) ? getSeason(month) : -1;
    console.log(result);
})

function checkExistence(year, month, day) {
    const daysOf31 = [1, 3, 5, 7, 8, 10, 12];

    if (daysOf31.includes(month)) {
        return day <= 31;
    }

    if (month !== 2) {
        return day <= 30;
    }

    const isNotLeapYear = year % 4 !== 0 || (year % 100 === 0 && year !== 400) || year % 100 === 0;
    return isNotLeapYear ? day <= 28 : day <= 29;
}

function getSeason(month) {
    const season = {
        0: 'Winter',
        1: 'Spring',
        2: 'Summer',
        3: 'Fall',
        4: 'Winter',
    }
    return season[Math.floor(month / 3)];
}