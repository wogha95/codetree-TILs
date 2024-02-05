const lines = require("fs").readFileSync(0).toString().split("\n")
lines.forEach(line => {
    const [n, m] = line.split(' ');
    console.log(LCM(n, m));
})

function LCM (n, m) {
    if (n === 1 || m === 1) {
        return 1;
    }
    
    const [min, max] = [Math.min(n, m), Math.max(n, m)];
    if (max % min === 0) {
        return min;
    }

    return n * m / GCD(max, min);
}

function GCD (n, m) {
    while (m !== 0) {
        const temp = n % m;
        n = m;
        m = temp;
    }
    
    return n;
}