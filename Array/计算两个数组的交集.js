// 计算两个数组的交集

let a = [1, 2, 3]
let b = [1]
function getMixed(arr1, arr2){
    return arr1.reduce((all, item) => {
        arr2.indexOf(item) > -1 ? all.push(item) : all
        return all
    }, [])
}
// console.log(getMixed(a,b))


// 数组右移
// [1,2,3], 1 => [3,1,2]
function moveRight(arr, num){
    return arr.splice(-num%arr.length).concat(arr)
}
// console.log([1,2,3].splice(1))
// console.log(moveRight([1,2,3], 1))