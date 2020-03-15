/**
 * 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。
目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，
最多能让1个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能
让2个孩子满足。
 *  */


/**
 * 题目分析，实际上就是从数组A中找出可以匹配到数组B的元素的个数
 * 
 */

 function getTotal(arr1, arr2) {
    let beforeLength = arr2.length
    for(let i=0;i<arr1.length; i++) {
        let _index = arr2.indexOf(arr1[i])
        _index !== -1 && arr2.splice(_index, 1)    
    }
    return beforeLength - arr2.length
 };
 getTotal([1,2,3,4,1], [1,1,1,2,3,4,5]);