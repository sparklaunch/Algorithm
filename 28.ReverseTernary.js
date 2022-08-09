function solution(number) {
    const ternary = number.toString(3);
    const reversed = ternary.split("").reverse().join("");
    return parseInt(reversed, 3);
}

console.log(solution(45));
console.log(solution(125));
