function solution(string) {
    const words = string.split(" ");
    return words
        .map((word) => {
            let result = "";
            for (let i = 0; i < word.length; i++) {
                const char = word.charAt(i);
                result += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
            }
            return result;
        })
        .join(" ");
}

console.log(solution("try hello world"));
