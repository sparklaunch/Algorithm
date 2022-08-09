function solution(sizes) {
    const sortedSizes = sizes.map((size) => {
        return size.sort();
    });
    const widths = sortedSizes.map((sortedSize) => sortedSize[0]);
    const heights = sortedSizes.map((sortedSize) => sortedSize[1]);
    return Math.max(...widths) * Math.max(...heights);
}

console.table(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40]
    ])
);
console.table(
    solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15]
    ])
);
console.table(
    solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11]
    ])
);
