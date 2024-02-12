const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, M] = lines[0];
const result = getResult(lines[1]);
console.log(result);

function getResult(numbers) {
    let maxSum = 0;
    
    for (let index = 0; index < numbers.length; index++) {
        let sum = numbers[index];
        let nextIndex = index;

        for (let m = M - 1; m > 0; m--) {
            nextIndex = numbers[nextIndex] - 1;
            sum += numbers[nextIndex];
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}