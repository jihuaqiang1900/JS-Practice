/**
 * 
 * 
给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
现在需要你找出数列a的所有区间中, X值最大的那个区间;
如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
 */


 function getLarger(arr) {
    let resultArray = []
    for(let i=0; i<arr.length - 2; i++){
        let mininum = Math.min.call(null, arr[i], arr[i+1], arr[i+2])
        let total = mininum * (arr[i]+arr[i+1]+arr[i+2])
        resultArray.push(total)
    }
    return Math.max.apply(null, resultArray)
 }
 console.log(getLarger([1,2,3,4,5,6,7,8,9,0,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,100,100,100,11,23,11]))