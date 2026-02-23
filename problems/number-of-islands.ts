
function dfs(r:number,c:number,grid:string[][],marked:boolean[][]){
    if(r<0||c<0||r>=grid.length||c>=grid[0].length||marked[r][c]||grid[r][c]=='0') return
    marked[r][c]=true
    for(const [dr,dc] of [[0,1],[0,-1],[1,0],[-1,0]]){
        dfs(r+dr,c+dc,grid,marked)
    }
}

function numIslands(grid: string[][]): number {
    const [nr,nc] = [grid.length,grid[0].length]
    const marked = [...Array(nr)].map(_=>[...Array(nc)].map(_=>false))
    let cnt = 0;
    for(let r = 0; r < nr; r++){
        for(let c = 0; c < nc; c++){
            if(!marked[r][c] && grid[r][c]=='1'){
                dfs(r,c,grid,marked);
                cnt++
            }
        }
    }
    return cnt;
};
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]]))