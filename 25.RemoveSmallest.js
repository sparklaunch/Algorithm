function solution(arr) {
    const removed = arr.filter((element) => element !== Math.min(...arr));
    return removed.length ? removed : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
