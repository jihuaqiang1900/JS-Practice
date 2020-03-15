// function awaitTime(time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }
// let awaitTime2 = awaitTime(2000).then(1)
// awaitTime2.then((res) => {
//     console.log(res)
// })

const p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});
console.log(1)