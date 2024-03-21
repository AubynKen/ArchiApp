const factorial = (n) => n === 0
    ? 1
    : n * factorial(n - 1);


// const factorialOfSix = factorial(6);
// console.log(factorialOfSix); // 720

const apply = (fn, arr) => {
    const res = [];
    for (const element of arr) {
        res.push(fn(element));
    }
    return res;
}

// const beforeApply = [1, 2, 3, 4, 5, 6];
// console.log(x => x+1, beforeApply); // [2, 3, 4, 5, 6, 7]

