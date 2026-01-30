//returns the longest common prefix of s and t
function pref(s:string,t:string):string{
    let z = ''
    //s='abc'
    //t='aba'
    for(let i = 0; i < Math.min(s.length,t.length); i++){
        if(s[i]!=t[i]) break;
        z+=s[i]
    }
    return z;
}

function longestCommonPrefix(strs: string[]): string {
    return strs.reduce(pref)
    // if(strs.length==0) return '';
    // let ans = strs[0];
    // for(const s of strs){
    //     ans = pref(ans,s)
    // }
    // return ans;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))