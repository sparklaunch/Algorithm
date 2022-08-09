function solution(answers) {
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let scores = Array(3).fill(0);
    for (let index = 0; index < answers.length; index++) {
        scores[0] +=
            firstPattern[index % firstPattern.length] === answers[index];
        scores[1] +=
            secondPattern[index % secondPattern.length] === answers[index];
        scores[2] +=
            thirdPattern[index % thirdPattern.length] === answers[index];
    }
    const highest = Math.max(...scores);
    let result = [];
    scores.forEach((score, index) => {
        if (score == highest) {
            result.push(index + 1);
        }
    });
    return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
