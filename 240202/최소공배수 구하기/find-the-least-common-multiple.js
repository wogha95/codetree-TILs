function LCM (n, m) {
    return n * m / GCD(n, m);
}

function GCD (n, m) {
    if (n % m === 0) {
        return m;
    }
    return GCD (m, n % m);
}

console.log(LCM(12, 18))