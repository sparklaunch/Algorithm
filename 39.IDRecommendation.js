function solution(username) {
    let result = username;
    result = result.toLowerCase();
    result = result.replace(/[^a-z0-9\-\_\.]/g, "");
    result = result.replace(/\.\.+/g, ".");
    result = result.replace(/^\.*/, "").replace(/\.*$/, "");
    if (result.length === 0) {
        result += "a";
    }
    if (result.length >= 16) {
        result = result.substring(0, 15).replace(/\.*$/, "");
    }
    if (result.length <= 2) {
        const lastLetter = result[result.length - 1];
        while (result.length < 3) {
            result += lastLetter;
        }
    }
    return result;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
