function solution(string) {
    const numbers = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let result = string;
    numbers.forEach((number, index) => {
        result = result.replace(number, index + 1);
    });
    return result;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
