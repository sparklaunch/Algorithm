function solution(number) {
    const numbers = number
        .toString()
        .split("")
        .map((a) => parseInt(a));
    return numbers.sort((a, b) => b - a).join("");
}

console.log(solution(118372));
