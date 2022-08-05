function solution(number) {
    if (number === 1) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < 500; i++) {
        if (number % 2 === 0) {
            number /= 2;
            count += 1;
        } else {
            number = number * 3 + 1;
            count += 1;
        }
        if (number === 1) {
            return count;
        }
    }
    return -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
