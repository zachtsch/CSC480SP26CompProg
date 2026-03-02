function isUgly(n: number): boolean {
    while(n%2==0) n = n/2  // n/=2
    while(n%3==0) n = n/3  // n/=3
    while(n%5==0) n = n/5  // n/=5
    return n == 1
};

console.log(isUgly(6))
console.log(isUgly(14))