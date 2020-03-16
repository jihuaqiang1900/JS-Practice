function getString(n) {
    if(n % 2 === 0) {
        return Array(n-1).fill('a').join('') + 'b'
    } else {
        return Array(n-2).fill('a').join('') + 'bc'
    }
}
// console.log(getString(5))

function numOfMinutes(n, headid, manage, informtime) {
    let mySet = new Map()
    for(let i=0;i<n;i++){
        if(!mySet.get(manage[i])) {
            mySet.set(manage[i], [])
        }
        mySet.get(manage[i]).push(i)
    }
    return mySet
}
console.log(numOfMinutes(6,2,[2,2,-1,2,2,2]))