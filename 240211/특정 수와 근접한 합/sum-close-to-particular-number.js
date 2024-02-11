const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const [N, S] = lines[0];

const result = getResult(lines[1]);
console.log(result);

function getResult(numbers) {
    let closeNumber = null;

    recursion(0, 0, 0);

    return Math.abs(S - closeNumber);

    function recursion(sum, currentIndex, skipCount) {
        if (currentIndex === N) {
            if (skipCount === 2) {
                if (closeNumber === null) {
                    closeNumber = sum;
                    return;
                }

                const lastGap = Math.abs(S - closeNumber);
                const newGap = Math.abs(S - sum);

                if (newGap < lastGap) {
                    closeNumber = sum;
                }
            }
            return;
        }

        if (skipCount < 2) {
            recursion(sum, currentIndex + 1, skipCount + 1);
        }
        recursion(sum + numbers[currentIndex], currentIndex + 1, skipCount);
    }
}