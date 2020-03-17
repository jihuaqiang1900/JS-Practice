// 一道有意思的面试题

/**
 * 实现curry方法满足以下条件
 * 
 * curry(1)(2)(3).sum()  // 6
 * curry(1,2)(3).sum()   // 6
 * curry(1,2,3).sum()    // 6
 *  */

/*--------------------分割线------------------------------ */


function curry() {
    let _arg = [...arguments]
    let fn = function(){
        _arg.push(...arguments)

        return fn
    }

    fn.sum = () => _arg.reduce((a,b) => a + b) // 注意剪头函数函数体不能加{}，不加表示返回值，{}表示函数表达式
    return fn
}

let curry1 = curry()
let curry2 = curry()
let curry3 = curry()

// console.log(curry1(1)(2)(3).sum())
// console.log(curry2(1, 2)(3).sum())
// console.log(curry3(1, 2, 3).sum())


/*---------------------------------------------------------------------------- */

// 另一个问题

/**
 * 实现curry方法满足以下条件
 * 
 * curry(1)(2)(3)  // 6
 * curry(1,2)(3)  // 6
 * curry(1,2,3)   // 6
 *  
 * */

// todo 
 function curryPro() {
     let _arg = Array.prototype.slice.call(arguments)
     let fn = () => {
        _arg.push(...Array.prototype.slice.call(arguments))
        return fn
     }
     fn.toString = function() {
         return _arg.reduce((a, b) => a + b, 0)
     }

     return fn
     
 }

//  console.log(curryPro(1)(2)(3) + 0)
//  console.log(curryPro(1, 2)(3) + 0)
//  console.log(curryPro(1)(2)(3, 4) + 0)

function sum() {
    let _arr = [...arguments]
    function fn() {
        _arr.push(...arguments)
        return fn
    }
    this.valueOf = () => _arr.reduce((a,b) => a+b, 0)
    return fn
}
// console.log(sum(1,2,3)(3)(1),valueOf())

function curry(fn, args) {
    var length = fn && fn.length || 0;

    args = args || [];

    return function() {

        var _args = args.slice(0),

            arg, i;

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];

            _args.push(arg);

        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}


var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn(1)(2)(3)
fn(1, 2)(3)

