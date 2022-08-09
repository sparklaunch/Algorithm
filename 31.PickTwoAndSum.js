function solution(numbers) {
    let result = [];
    numbers.forEach((number, index) => {
        numbers.forEach((subnumber, subindex) => {
            if (index !== subindex) {
                const addition = number + subnumber;
                result.includes(addition) || result.push(addition);
            }
        });
    });
    return result.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
