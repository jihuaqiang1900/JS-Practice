// 数组扁平化-去重-小到大排序
let array=[[2,1],[8],[5],[4,2,3],5,10]

let _array= Array.from(new Set(array.flat())).sort((a,b)=>a-b)
a=[1]
console.log(Object.prototype.toString.call(a))