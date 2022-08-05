function solution(x, n) {
    let result = [];
    for (const count of [...Array(n).keys()].map((number) => number + 1)) {
        result.push(x * count);
    }
    return result;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
