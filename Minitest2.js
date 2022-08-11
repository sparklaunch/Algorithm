function solution(arr1, arr2, signs) {
    const outerLength = arr1.length;
    const innerLength = arr2.length;
    let answer = Array(outerLength)
        .fill()
        .map(() => Array(innerLength).fill());
    arr1.forEach((innerElement, outerIndex) => {
        innerElement.forEach((element, innerIndex) => {
            const sign = signs[outerIndex][innerIndex];
            answer[outerIndex][innerIndex] =
                (sign ? 1 : -1) *
                (arr1[outerIndex][innerIndex] + arr2[outerIndex][innerIndex]);
        });
    });
    return answer;
}

let arr1 = [
    [5, 7, 1],
    [2, 3, 5]
];
let arr2 = [
    [5, 1, 6],
    [7, 5, 6]
];
let signs = [
    [true, true, false],
    [false, true, false]
];

console.table(solution(arr1, arr2, signs));
