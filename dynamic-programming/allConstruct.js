const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]]
    const result = [];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
           const suffix = target.slice(word.length);
           const suffixWays = allConstruct(suffix, wordBank, memo);
           const targetWays = suffixWays.map( way => [ word, ...way ])
           result.push(...targetWays);
        }
    }
    memo[target] = result
    return result
}

console.log(allConstruct('tiara', ['ara', 'tit', 'top', 'tia', 'a']))
console.log(allConstruct('digital', ['tal', 'di', 'digi']))
console.log(allConstruct('mississippi', ['misssss', 'issi', 'ppi', 'miss']))
console.log(allConstruct('ttututututututuut', ['ttututuutu', 'tut', 'tuuuuu', 'tutu', 'tutuuu']))