// 题目来自leetcode
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 */

 // 斐波那契数列解法
 // 时间复杂度O(2^n)
 function fbnc(n) {
     if(n === 1) {
        return 1
     } else if(n===2) {
        return 2
     } else {
         return fbnc(n-1) + fbnc(n-2)
     }
 }

 // 另一种 更好的写法
 // 时间复杂度O(n)
 function fbnc1(n) {
    //  if(n===1) {
    //     return 1
    //  }
     let a=0
     let b=1
     while(n) {
        let sum = a+b
        a=b
        b=sum
        n--
     }
     return b
 }
 console.log(fbnc1(1000))