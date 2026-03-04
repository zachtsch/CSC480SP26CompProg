// O(n^2)
function missingNumber2(nums: number[]): number {
    for(let i = 0; i <= nums.length; i++){
        if(nums.indexOf(i)==-1) return i;
    }
    throw Error('shouldnt happen')
};

function missingNumber(nums: number[]): number {
    const set = new Set(nums)
    for(let i = 0; i <= nums.length; i++){
        if(!set.has(i)) return i;
    }
    throw Error('shouldnt happen')
};