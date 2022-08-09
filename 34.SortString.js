function solution(string, index) {
    return string.sort((a, b) => {
        const first = a[index].charCodeAt();
        const second = b[index].charCodeAt();
        if (first === second) {
            return a.localeCompare(b);
        }
        return first - second;
    });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
