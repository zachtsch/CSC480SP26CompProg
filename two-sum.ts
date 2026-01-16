//    !  is the non-null assertion operator
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j]==target) return [i,j]
        }
    }
    throw Error('this shouldnt happen')
};

console.log(twoSum([2,7,11,15], 9))