function minPathSum(grid: number[][]): number {
    //returns min cost path from r,c to 0,0
    const memo = [...Array(grid.length)]
            .map(_=>[...Array(grid[0].length)].map(_=>-1))
    function recur(r:number,c:number):number{
        if(r<0 || c<0) return Infinity
        if(memo[r][c]!=-1) return memo[r][c]
        if(r == 0 && c == 0) return grid[0][0]
        return memo[r][c] = grid[r][c] + Math.min(recur(r-1,c),recur(r,c-1))
    }
    return recur(grid.length-1,grid[0].length-1)
};