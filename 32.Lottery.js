function solution(numbers, winningNumbers) {
    let score = 0;
    numbers.forEach((number) => {
        score += winningNumbers.includes(number) ? 1 : 0;
    });
    const numberOfZeros = numbers.filter((number) => number === 0).length;
    const maxScore = score + numberOfZeros;
    const minScore = score;
    return [7 - maxScore, 7 - minScore].map((rank) =>
        Math.max(Math.min(rank, 6), 1)
    );
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
