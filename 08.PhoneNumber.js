function solution(phoneNumber) {
    const length = phoneNumber.length;
    return phoneNumber.slice(0, length - 4) + "*".repeat(4);
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
