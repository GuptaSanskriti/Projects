const fib = (n, memo = {}) => {
    if(n <=2 ) return 1
    if(n in memo) return memo[n]
    memo[n] =  fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(10));
console.log(fib(50));
