const lines = require("fs").readFileSync(0).toString().split("\n")
lines.forEach(line => {
    const [n, m] = line.split(' ');
    console.log(LCM(n, m));
})

function LCM (n, m) {
    return n * m / GCD(n, m);
}

function GCD (n, m) {
    if (n % m === 0) {
        return m;
    }
    return GCD (m, n % m);
}