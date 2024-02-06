const lines = require("fs").readFileSync(0).toString().trim().split("\n")
lines.forEach(line => {
    const [a, b] = line.split(' ').map(n => Number(n));
    console.log(... func(a, b));
})

function func(a, b) {
    return a < b ? [a + 10, b * 2] : [a * 2, b + 10];
}