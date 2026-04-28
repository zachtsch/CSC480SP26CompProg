function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    // const graph: Record<number,number[]> = {}
    const graph = [...Array(n)].map<number[]>(_=>[])
    for(const [u,v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    }
    const marked = [...Array(n)].map(_=>false);
    function dfs(here:number){
        if(marked[here]) return
        marked[here]=true
        for(const next of graph[here]){
            dfs(next)
        }
    }
    dfs(source)
    return marked[destination]
};

