function minCostClimbingStairs(cost: number[]): number {
    cost.push(0)
    //memoization sounds like memorization
    //essentially you are having the pc memorize stuff
    const memo: Record<number,number> = {}
    function recur(x:number):number{
        if(x in memo) return memo[x]!
        if(x <= 1) return cost[x]!
        return memo[x] = cost[x]! + Math.min(recur(x-1),recur(x-2))
    }
    return recur(cost.length-1)
};