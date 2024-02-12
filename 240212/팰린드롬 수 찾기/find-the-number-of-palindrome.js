const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const result = getResult(lines[0]);
console.log(result);

function getResult([X, Y]) {
    return Array.from({length: Y - X + 1}, (_, index) => X + index).reduce((count, value) => {
        return isPalindrome(value) ? count + 1 : count;
    }, 0)

    function isPalindrome(number) {
        const string = number.toString();
        const length = string.length;

        for (let index = 0; index < Math.floor(length / 2); index++) {
            if (string[index] !== string[length - index - 1]) {
                return false;
            }
        }
        
        return true;
    }
}