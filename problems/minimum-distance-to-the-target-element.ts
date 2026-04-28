function getMinDistance(nums: number[], target: number, start: number): number {
    let [l,r] = [start,start]
    for(let cnt = 0; true; cnt++){
        if(l>=0          && nums[l]==target) return cnt;
        if(r<nums.length && nums[r]==target) return cnt;
        l--; r++;
    }
};