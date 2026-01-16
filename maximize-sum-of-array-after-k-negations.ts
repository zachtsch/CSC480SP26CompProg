// [2,-3,-1,5,-4]



// [-4,-3,-1,2,5]

// [4,3,1,2,5]

// [1,2,3,4,5]
// -1
// 1
// -1
// 1
// -1
// 1


import { MinPriorityQueue } from "datastructures-js";

function largestSumAfterKNegations(nums: number[], k: number): number {
    const pq = new MinPriorityQueue<number>();
    for(const val of nums) pq.push(val)
    for(let i = 0; i < k; i++){
        // pq.push(pq.pop()!)
        const temp = pq.pop()!
        pq.push(-temp)
    }
    let sum = 0;
    while(pq.size()>0) sum+=pq.pop()!
    // return pq.toArray().reduce((a,b)=>a+b,0)
};
console.log(largestSumAfterKNegations([3,-1,0,2],3))
// const ar : number[] = [1,2,10,3,7,4,10,15]
// const str = ['hello','abc','a','banana']

// str.sort((a,b)=>a.length-b.length)
// console.log(str)
// let cnt = 0
// function compare(a:number,b:number):number{
//     console.log(`compare cnt: ${cnt++}; comparing ${a} ${b}`)
//     return a-b;
// }
// // ar.sort(compare)
// // ar.sort((a,b)=>a-b)
// console.log(ar)