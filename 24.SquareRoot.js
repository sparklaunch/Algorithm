function solution(number) {
    const squareRoot = Math.sqrt(number);
    return Math.floor(squareRoot) === squareRoot
        ? Math.pow(squareRoot + 1, 2)
        : -1;
}

console.log(solution(121));
console.log(solution(3));
