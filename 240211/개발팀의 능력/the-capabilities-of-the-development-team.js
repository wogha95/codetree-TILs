const rawLines = require("fs").readFileSync(0).toString().trim().split("\n")
const lines = rawLines.map(line => line.split(' ').map(n => Number(n)));

const result = getResult(lines[0]);
console.log(result);

function getResult(numberList) {
    let minGap = Number.MAX_SAFE_INTEGER;

    for(let start = 0; start < 5; start++) {
        recursiveTeam(start, [], [], 0);
    }

    return minGap;

    function recursiveTeam(team1Index, team2, team3, currentIndex) {
        if (currentIndex === 5) {
            const team1Score = numberList[team1Index];
            const team2Score = team2.reduce((sum, current) => sum + current, 0);
            const team3Score = team3.reduce((sum, current) => sum + current, 0);
            const teams = [team1Score, team2Score, team3Score];

            if ((new Set(teams)).size !== 3) {
                return;
            }

            minGap = Math.min(minGap, Math.max(...teams) - Math.min(...teams));
            return;
        }

        if (currentIndex === team1Index) {
            recursiveTeam(team1Index, team2, team3, currentIndex + 1);
            return;
        }

        if (team2.length !== 2) {
            recursiveTeam(team1Index, [...team2, numberList[currentIndex]], team3, currentIndex + 1);
        }
        if (team3.length !== 2) {
            recursiveTeam(team1Index, team2, [...team3, numberList[currentIndex]], currentIndex + 1);
        }
    }
}