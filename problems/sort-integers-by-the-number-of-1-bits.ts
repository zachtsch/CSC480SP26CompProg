function oneBits(x:number):number{
    let cnt = 0;
    while(x>0){
        if(x%2!=0) cnt++
        x=Math.floor(x/2)
    }
    return cnt
}
// 1     = 1
// 10    = 2
// 11    = 3
// 100   = 4
// 101   = 5
// 110   = 6
// 111   = 7
// 1000  = 8
// 10000 = 16
function sortByBits(arr: number[]): number[] {
    return arr.sort((a,b)=>oneBits(a)==oneBits(b) ? a-b : oneBits(a)-oneBits(b))
};