function solution(numbers) {
    function isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    let result = [];
    numbers.forEach((outerNumber, outerIndex) => {
        numbers.forEach((number, index) => {
            numbers.forEach((innerNumber, innerIndex) => {
                if (new Set([outerIndex, index, innerIndex]).size === 3) {
                    const sum = outerNumber + number + innerNumber;
                    if (!result.includes(sum) && isPrime(sum)) {
                        result.push(sum);
                    }
                }
            });
        });
    });
    return result.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
