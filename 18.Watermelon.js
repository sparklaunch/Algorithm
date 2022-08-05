function solution(length) {
    return "수박".repeat(Math.round(length / 2)).slice(0, length);
}

console.log(solution(3));
console.log(solution(4));
