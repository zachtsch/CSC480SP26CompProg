function coinChange(coins: number[], amount: number): number {
    //x is a val and recur returns the num of coins needed to make x
                      //value of coins, min amnt of coins to make key val
    const memo: Record<number,number> = {}
    function recur(x:number):number{
        if(x in memo) return memo[x]!
        if(x <  0) return Infinity;
        if(x == 0) return 0;
        return memo[x] = 1+coins.map(c=>recur(x-c)).reduce((a,b)=>b<a?b:a)
    }
    const temp = recur(amount)
    return temp == Infinity ? -1 : temp;
    // if(temp == Infinity) return -1;
    // return temp
};

console.log(coinChange([1,2,5],11))