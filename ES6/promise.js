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

// const p = Promise.resolve('Hello');

// p.then(function (s){
//   console.log(s)
// });
// console.log(1)

// 简单版的peomise实现
class MyPromise{
  constructor(fn) {
    this.active = 'pending'
    this.value = undefined
    this.resolveFnQuene=[]
    this.rejectFnQuene=[]

    try {
      fn(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      throw new Error('peomise 函数执行失败')
    }
  }
  _resolve(value) {
    if (this.active !== 'pending') {
      return
    }
    this.active = 'fulfilled'
    this.value = value
    let cb
    while(cb = this.resolveFnQuene.pop()){
      cb(this.value)
    }
  }

  _reject(error) {
    if (this.active !== 'pending') {
      return
    }
    this.active = 'rejected'
    this.value = error
  }

  then(fulfilledFn, rejectedFn) {
    let {active, value} = this
    switch (active) {
      case 'pending':
        this.resolveFnQuene.push(fulfilledFn)
        this.rejectFnQuene.push(rejectedFn)
        break;
      case 'fulfilled':
      fulfilledFn(value)
        break
      case 'rejected':
      rejectedFn(value)
        break
    }
    // return new MyPromise((resolveNextFn, rejectNextFn) => {
    //   let successFn = () => {
    //     try {
    //       let res = fulfilledFn(value)
    //       resolveNextFn(res)
    //     } catch (error) {
          
    //     }
        
    //   }
    //     switch (active) {
    //       case 'pending':
    //         this.resolveFnQuene.push(fulfilledFn)
    //         this.rejectFnQuene.push(rejectedFn)
    //         break;
    //       case 'fulfilled':
    //         successFn(value)
    //         break
    //       case 'rejected':
    //         rejectedFn(value)
    //         break
    //     }
    //   })
    }


}

let myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('done')
    resolve('done ...')
  },2000)
})
myPromise.then((res) => {console.log(res)})