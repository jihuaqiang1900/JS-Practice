/**
 * proxy是ES6新增的构造函数，
 * 引用MDN的解释： proxy对象用于定义基本操作的自定义行为(如属性查找，自定义枚举，赋值，函数的调用等)
 */

 let proxy = new Proxy({}, {
     set(target, prop, value) {
         if(prop === 'name') {
             throw new TypeError('不允许修改name属性')
         }
         target[prop]=value
     }
 })
 proxy.name = 'name'
 console.log(proxy.name)