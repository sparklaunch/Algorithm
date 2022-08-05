function solution(number) {
    const divisor = number
        .toString()
        .split("")
        .map((a) => parseInt(a))
        .reduce((a, b) => a + b);
    return number % divisor === 0;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
