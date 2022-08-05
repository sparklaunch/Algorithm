function solution(arr1, arr2) {
    return arr1.map((item, index) => {
        return item.map((subitem, subindex) => {
            return subitem + arr2[index][subindex];
        });
    });
}

console.table(
    solution(
        [
            [1, 2],
            [2, 3]
        ],
        [
            [3, 4],
            [5, 6]
        ]
    )
);
console.table(solution([[1], [2]], [[3], [4]]));
