function closestTarget(words: string[], target: string, startIndex: number): number {
    if(!words.includes(target)) return -1;
    if(words[startIndex] == target) return 0;
    let [l,r] = [startIndex,startIndex]
    for(let cnt = 0; true; cnt++){
        if(words[l]==target || words[r]==target) return cnt;
        l--; r++;
        if(l<0) l = words.length-1;
        if(r>=words.length) r = 0
    }
};