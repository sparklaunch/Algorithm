function solution(arr1, arr2) {
    let answer = 0;
    answer = arr2
        .map((endHour, index) => {
            return endHour >= 29 ? 21 - arr1[index] : endHour - arr1[index];
        })
        .reduce((a, b) => a + b);
    return answer;
}

let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];

console.log(solution(arr1, arr2));
