/**
 * New关键字的函数实现
 */

 // new的例子

function People(name, job){
    this.name = name
    this.job = job
    // return {a:1}
}

let police = new People('卡卡西', '小黄书')
// console.log(police.name)   // kakaxi
// console.log(police instanceof People) // true
// console.log(police instanceof Object) // true


// 使用函数实现new关键字
function newFn(){
    let obj = {}
    // newFn函数的要第一个参数是构造函数，取出
    let construct = Array.prototype.shift.call(arguments)
    obj.__proto__ = construct.prototype
    construct.apply(obj, arguments)

    return obj
}

// 测试

let teacher = newFn(People, '大蛇丸', '知名学者')
// console.log(teacher.name)


// 另一个问题，当构造函数有返回时，new关键字新建的实例是构造函数的返回值，此时我们的newFn方法也要实现此特性

function newFn(){
    let obj = {}
    // newFn函数的要第一个参数是构造函数，取出
    let construct = Array.prototype.shift.call(arguments)
    obj.__proto__ = construct.prototype
    let conObj = construct.apply(obj, arguments)
    console.log(conObj, conObj instanceof Object, obj)
    // 构造函数有返回值时，conObj为返回的对象，无返回值时，conObj为undefind
    return conObj instanceof Object ? conObj : obj
}
let moder = newFn(People, '鬼绞', '莽徒')




// 最终版
function newFn(){
    let obj = {}
    // newFn函数的要第一个参数是构造函数，取出
    let construct = Array.prototype.shift.call(arguments)
    // obj的__proto__属性指向构造函数的原型，表示obj是构造函数的实例
    obj.__proto__ = construct.prototype
    // 将构造函数的属性挂载到obj对象上，并取出构造函数的返回值
    let conObj = construct.apply(obj, arguments)
    // 构造函数有返回值时，conObj为返回的对象，无返回值时，conObj为undefind，则返回实例obj
    return conObj instanceof Object ? conObj : obj
}