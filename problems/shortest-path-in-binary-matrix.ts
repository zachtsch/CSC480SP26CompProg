class MyQueue<E>{
    ar:E[] = []
    i=0
    push(val:E){ this.ar.push(val) }
    pop(){ return this.ar[this.i++] }
    size(){ return this.ar.length - this.i }
}
const dz = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]
function shortestPathBinaryMatrix(grid: number[][]): number {
    if(grid[0][0]==1) return -1
    const [nr,nc] = [grid.length,grid[0].length]
    const marked = [...Array(nr)].map(_=>[...Array(nc)].map(_=>false))
    const q = new MyQueue<[number,number,number]>();
    q.push([1,0,0]); marked[0][0]=true;
    while(q.size() > 0){
        const [d,r,c] = q.pop()
        if(r==nr-1 && c==nc-1) return d;
        for(const [dr,dc] of dz){
            const [rr,cc] = [r+dr,c+dc]
            if(rr>=0 && rr<nr && cc>=0 && c<nc && 
                grid[rr][cc]==0 && !marked[rr][cc]){
                marked[rr][cc]=true;
                q.push([d+1,rr,cc])
            }
        }
    }
    return -1;
};