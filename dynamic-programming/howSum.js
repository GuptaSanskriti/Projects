const howSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null){
           memo[targetSum] = [...remainderResult, num]
           return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 6, 7]))
console.log(howSum(7, [2, 8, 9]))
console.log(howSum(8, [2, 6, 4]))
console.log(howSum(876, [5, 10]))
console.log(howSum(876, [5, 10]))