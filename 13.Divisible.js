function solution(array, divisor) {
    const result = array
        .filter((element) => {
            return element % divisor === 0;
        })
        .sort((a, b) => a - b);
    return result.length ? result : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
