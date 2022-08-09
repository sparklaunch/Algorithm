function solution(string) {
    return string
        .split("")
        .sort((a, b) => b.charCodeAt() - a.charCodeAt())
        .join("");
}

console.log(solution("Zbcdefg"));
