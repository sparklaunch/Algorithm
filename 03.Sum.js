function solution(a, b) {
    return (Math.min(a, b) + Math.abs(b - a) / 2) * (Math.abs(b - a) + 1);
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
