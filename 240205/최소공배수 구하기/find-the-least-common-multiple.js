const lines = require("fs").readFileSync(0).toString().split("\n")
lines.forEach(line => {
    const [n, m] = line.split(' ');
    console.log(LCM(n, m));
})

function LCM (n, m) {
    const [min, max] = [Math.min(n, m), Math.max(n, m)];
    if (min === 1) {
        return max;
    }
    if (max % min === 0) {
        return max;
    }

    return n * m / GCD(max, min);
}

function GCD (n, m) {
    if (m === 1) {
        return 
    }

    while (m !== 0) {
        const temp = n % m;
        n = m;
        m = temp;
    }
    
    return n;
}