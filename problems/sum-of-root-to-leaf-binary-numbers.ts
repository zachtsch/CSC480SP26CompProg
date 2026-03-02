//        E is the type our tree holds
type Tree<E> = null | {left:Tree<E>,val:E,right:Tree<E>}
//E for the problem will be number

function bin(ar:number[]):number{
    return parseInt(ar.join(''),2)
    // let tot = 0
    // for(let i = ar.length-1, p = 0; i >= 0; i--,p++){
    //     if(ar[i]! == 1) tot += 2**p
    // }
    // return tot;
}

function sumRootToLeaf(root: Tree<number>): number {
    const temp : number[] = []
    let tot = 0; 
    function recur(here:Tree<number>){
        if(!here) return;
        temp.push(here.val)
        if(!here.left && !here.right)
            tot+=bin(temp)
        recur(here.left)
        recur(here.right)
        temp.pop()
    }
    recur(root)
    return tot;
};