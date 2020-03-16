// sleep(3000)  



// promise方式实现
function promiseSleep(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}
// promiseSleep(3000).then((time)=>{console.log('get')})



// generator
function* genSleep(time){
    yield new Promise((resolve) => setTimeout(resolve, time))
}
// genSleep(2000).next().value.then(() => {console.log('get')})




// async 方式实现
function sleep(time) {
    return new Promise((resolve) => {setTimeout(resolve, time)})
}
async function asyncSleep(time){
    await sleep(time)
    console.log('get')
}
// asyncSleep(2000)




// ES5实现
function es5Sleep(fn, time){
    setTimeout(() => {fn()}, time)
}
function doConsole(){
    console.log('get')
}

es5Sleep(doConsole, 2000)




// 同步实现

function sleep(time) {
    let a = Date.now()
    while(Date.now() - a < time) {
    }
    return
}
// sleep(2000)
// console.log('get')

