function checkZeroOnes(s: string): boolean {
    // s.split('0').map(x=>x.length).reduce((a,b)=>Math.max(a,b))
    const zeros = s.split('0').map(x=>x.length).reduce((a,b)=>b>a?b:a)
    const ones  = s.split('1').map(x=>x.length).reduce((a,b)=>b>a?b:a)
    return ones < zeros
};