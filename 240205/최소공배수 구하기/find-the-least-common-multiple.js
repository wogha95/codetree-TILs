const lines = require("fs").readFileSync(0).toString().split("\n")
lines.forEach(line => {
    const [n, m] = line.split(' ');
    console.log(LCM(n, m));
})

function LCM (n, m) {
    if (Math.max(n, m) % Math.min(n, m) === 0) {
        return Math.min(n, m);
    }

    return n * m / GCD(n, m);
}

function GCD (n, m) {
    let [_n, _m] = [Math.max(n, m), Math.min(n, m)];

    while (_m !== 0) {
        const temp = _n % _m;
        _n = _m;
        _m = temp;
    }
    
    return _n;
}