function solution(absolutes, signs) {
    return absolutes
        .map((number, index) => {
            return number * (signs[index] ? "1" : "-1");
        })
        .reduce((a, b) => a + b);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
