
// type Tree = null | {left:Tree,val:number,right:Tree}
type Tree<E> = null | {left:Tree<E>,val:E,right:Tree<E>}

function inorderTraversal(root: Tree<number>): number[] {
    const ans: number[] = []
    function recur(here:Tree<number>){
        if(here == null) return;
        recur(here.left)
        ans.push(here.val)
        recur(here.right)
    }
    recur(root)
    return ans;
};