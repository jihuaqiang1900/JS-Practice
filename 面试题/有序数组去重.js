// 给定有序数组，去重后返回数组的长度
var removeDuplicates = function(nums) {
    let Index = 0
    let n=nums.length
    for(let i=1; i<n; i++){
        if(nums[i]!==nums[i-1]){
            nums[i-Index]=nums[i]
        } else {
            Index++
        }
    }
    return n-Index
};
removeDuplicates([1,1,1,2,2,3,3,4])