
type List<E> = null | {val:E,next:List<E>}

function gameResult(head: List<number>): string {
    let [evn,odd] = [0,0];
    let i = head  //even
    let j = head?.next  //odd
    while(i != null && j != null){
        if(i.val > j.val) evn++
        else              odd++
        i=i?.next?.next??null;
        j=j?.next?.next??null;
    }
    if(evn>odd)      return 'Even'
    else if(odd>evn) return 'Odd'
    else             return 'Tie'
};