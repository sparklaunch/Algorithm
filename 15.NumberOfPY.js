function solution(string) {
    const lowerCased = string.toLowerCase();
    const numberOfP = lowerCased.match(/p/g).length;
    const numberOfY = lowerCased.match(/y/g).length;
    return numberOfP === numberOfY;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
