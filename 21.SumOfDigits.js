function solution(number) {
    const string = number.toString();
    const parsed = string.split("").map((digit) => parseInt(digit));
    return parsed.reduce((a, b) => a + b);
}

console.log(solution(123));
console.log(solution(987));
