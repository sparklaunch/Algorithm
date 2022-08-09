function solution(arr) {
    let result = [];
    for (const number of arr) {
        if (result[result.length - 1] !== number) {
            result.push(number);
        }
    }
    return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
