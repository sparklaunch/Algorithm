function solution(string, distance) {
    const splittedString = string.split("");
    let result = "";
    for (const character of splittedString) {
        if (character === " ") {
            result += " ";
        } else {
            let charCode = character.charCodeAt();
            charCode += distance;
            if (
                (character === character.toLowerCase() && charCode > 122) ||
                (character === character.toUpperCase() && charCode > 90)
            ) {
                charCode -= 26;
            }
            result += String.fromCharCode(charCode);
        }
    }
    return result;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
