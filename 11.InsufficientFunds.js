function solution(price, balance, count) {
    const array = Array.from(
        {
            length: count
        },
        (_, index) => index + 1
    );
    for (const turn of array) {
        balance -= turn * price;
        if (balance < 0) {
            return -balance;
        }
    }
    return 0;
}

console.log(solution(3, 20, 4));
