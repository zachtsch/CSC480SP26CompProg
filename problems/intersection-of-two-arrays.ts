function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set(nums2);
    const ans: number[] = []

    for(const val of set1)
        if(set2.has(val)) ans.push(val)
    return ans
};