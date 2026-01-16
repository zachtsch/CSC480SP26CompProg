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
    pq.push(3);
    console.log(pq.pop())

     return -1;
};

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