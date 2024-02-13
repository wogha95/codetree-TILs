const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N] = lines[0];
const result = getResult(lines.slice(1));
console.log(result);

function getResult(numberList) {
    const countList = Array.from({length: 101}, () => 0);
    
    numberList.forEach(([start, end]) => {
        for (let index = start; index <= end; index++) {
            countList[index] += 1;
        }
    });

    return countList.includes(N - 1) ? "Yes" : "No";
}