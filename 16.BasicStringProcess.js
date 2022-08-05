function solution(string) {
    const regex = new RegExp(/^\d+$/);
    return (string.length === 4 || string.length === 6) && regex.test(string);
}

console.log(solution("a234"));
console.log(solution("1234"));
