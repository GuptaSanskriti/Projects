const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder  = targetSum - num;
        if(canSum(remainder, numbers) === true){
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = true
    return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 6, 7]))
console.log(canSum(7, [2, 8, 9]))
console.log(canSum(8, [2, 6, 4]))
console.log(canSum(598, [5, 10]))