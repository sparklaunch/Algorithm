function solution(month, day) {
    const date = new Date(2016, month - 1, day);
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][date.getDay()];
}

console.log(solution(5, 24));
