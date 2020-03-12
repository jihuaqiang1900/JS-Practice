/**
 * async 实现sleep函数，
 * @param {*} i 
 */

function sleep(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(i)
            resolve()
        }, 1000);
    })
}

// 用法
async function one2FiveInAsync() {
    for (var i = 1; i <= 5; i++) {
        // console.log(i);
        await sleep(i);
    }
}
one2FiveInAsync();