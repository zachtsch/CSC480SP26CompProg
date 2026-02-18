//sliding window
// o(n)  -- linear
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    let lo = 0, hi = 0, cnt = 0;
    for(; hi < s.length; hi++){
        while(set.has(s[hi])){
            set.delete(s[lo++])
        }
        set.add(s[hi])
        cnt=Math.max(cnt,set.size)
    }
    return cnt;
};