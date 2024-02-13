const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' '));

const [N] = lines[0];
const result = getResult(lines[1]);
console.log(result);

function getResult(alphabetList) {
    const codeList = alphabetList.map(a => a.charCodeAt(0));
    let count = 0;

    while (true) {
        let isNotChanged = true;
        for (let index = 0; index < N - 1; index++) {
            if (codeList[index] > codeList[index + 1]) {
                const temp = codeList[index];
                codeList[index] = codeList[index + 1];
                codeList[index + 1] = temp;
                count += 1;
                isNotChanged = false;
            }
        }
        if (isNotChanged) {
            break;
        }
    }

    return count;
}