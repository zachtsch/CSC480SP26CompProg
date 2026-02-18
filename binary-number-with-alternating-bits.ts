// function hasAlternatingBits(n: number): boolean {
//     const s = n.toString(2)
//     for(let i = 1; i < s.length; i++)
//         if(s[i-1]==s[i]) return false
//     return true;
// };

function hasAlternatingBits(n: number): boolean {
    let last = -1;
    while(n > 0){
        if(n%2 == last) return false
        last = n%2
        n=Math.floor(n/2)
    }
    return true;
};

console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(11))