function solution(a, b) {
    const iterator = Array.from(
        {
            length: a.length
        },
        (_, index) => index
    );
    console.log(iterator);
    return iterator.reduce((previous, current) => {
        return previous + a[current] * b[current];
    }, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
