// count is O(n)
// function count(val:number,nums:number[]):number{
//     let cnt = 0
//     for(const v of nums)
//         if(v == val) cnt++
//     return cnt;
// }

// maj el is O(n^2)
// function majorityElement(nums: number[]): number {
//     for(const v of nums){
//         if(count(v,nums)>=nums.length/2) return v;
//     }
//     throw Error('error')
// };

// O(n)
function majorityElement(nums: number[]): number {
    const freq: Record<number,number> = {}
    for(const val of nums){
        if(val in freq) freq[val]++
        else            freq[val]=1
    }
    for(const key in freq)
        if(freq[key]>=nums.length/2) return Number(key)
    return -1
};