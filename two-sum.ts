//    !  is the non-null assertion operator
// naive O(n^2)
// dictionary O(n)  linear

//node+ts install instructions
function twoSum(nums: number[], target: number): number[] {
    //O(n)
    const dict : Record<number,number> = {}
    for(let i = 0; i < nums.length; i++)
        dict[nums[i]] = i
    for(let i = 0; i < nums.length; i++){
        const temp = target-nums[i];
        if(temp in dict && dict[temp]!=i)
            return [i,dict[temp]]
    }
    // O(n^2)
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i]+nums[j]==target) return [i,j]
    //     }
    // }
    throw Error('this shouldnt happen')
};

console.log(twoSum([2,7,11,15], 9))