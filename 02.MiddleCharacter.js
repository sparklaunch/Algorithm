function solution(word) {
    const length = word.length;
    if (length % 2 === 0) {
        const startIndex = length / 2 - 1;
        const endIndex = length / 2 + 1;
        return word.substring(startIndex, endIndex);
    } else {
        const index = Math.floor(length / 2);
        return word[index];
    }
}

console.log(solution("qwerty"));
console.log(solution("abcde"));
