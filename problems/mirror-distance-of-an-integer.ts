
function reverse(n: number): number{
    const myList = []
    while(n>0){
        const r_digit = n%10
        n = Math.floor(n/10)
        myList.push(r_digit)
    }
    return Number(myList.join(''))
}

function mirrorDistance(n: number): number {
    return Math.abs(n-reverse(n))  
};

console.log(reverse(25))