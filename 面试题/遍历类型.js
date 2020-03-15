/**
 * 二叉树遍历的类型
 * 1、深度优先算法
 *    a、前序遍历
 *    b、中序遍历
 *    c、后序遍历
 * 2、广度优先算法
 * 
 * 其中每种算法都可以使用递归or非递归形式实现
 */

 // 首先定义一个树结构
const tree = {
    data: 1,
    left: {
      data: 2,
      left: {
        data: 4,
        left: {
          data: 8,
        },
        right: {
          data: 9
        }
      },
      right: {
        data: 5,
        left: {
          data: 10,
        },
        right: {
          data: 11
        }
      }
    },
    right: {
      data: 3,
      left: {
        data: 6,
        left: {
          data: 12
        }
      },
      right: {
        data: 7
      }
    }
  }

  //  1、深度优先-前序遍历法-递归实现

  function dfsPreorderByNLR(tree) {
      let output = []
      function getList(tree) {
        if(tree) {
            output.push(tree.data)
        }
        if(tree.left) {
            getList(tree.left)
        }
        if(tree.right) {
            getList(tree.right)
        }
      }
      getList(tree)
      return output
  }
//   console.log(dfsPreorderByNLR(tree))

// 深度优先-前序遍历法-非递归实现
// 先构造一个栈，先进先出，保证循环的数结构是按顺序出栈的
class Stack{
    constructor() {
        this.stackArray = []
    }

    push(item) {
        this.stackArray.unshift(item)
        return this.stackArray.length
    }
    pop() {
        return this.stackArray.shift()
    }
    get isEmpty() {
        return this.stackArray.length === 0
    }
}
function dfsPreorderByNLR(tree) {
    const output = []
    const stack = new Stack()
    stack.push(tree)
    while(!stack.isEmpty){
        const item = stack.pop()
        if(item) {
            output.push(item.data)
            if (item.right) {
                stack.push(item.right)
            }
            if (item.left) {
                stack.push(item.left)
            }
        }
    }
    return output
}
// 另一种写法，不需要构造栈对象，直接通过操作一个数组实现栈的循环操作
function dfsPreorderByNLR(tree) {
    const quene=[]
    const output=[]
    quene.push(tree)
    while(quene.length > 0){
        let item = quene.shift()
        if(item){
            output.push(item.data)
            if(item.right) {
                quene.unshift(item.right)
            }
            if(item.left) {
                quene.unshift(item.left)
            }
            
            
        }
    }
    return output
}
console.log(dfsPreorderByNLR(tree)) //  1,  2,  4, 8, 9,5, 10, 11, 3, 6,12,  7


// 2、深度优先-中序遍历-递归算法
function dfsPreorderByLNR(tree) {
    const output=[]
    function getList(tree) {
        if(tree) {
            if(tree.left) {
                getList(tree.left)
            }
            output.push(tree.data)
            if(tree.right) {
                getList(tree.right)
            }
        }
    }
    getList(tree)
    return output
}

// 深度优先-中序遍历-非递归算法
function dfsPreorderByLNR(tree) {
    let node = tree
    const output=[]
    const stack = new Stack()
    stack.push(tree)
    while(!stack.isEmpty || node){
        if(node){
            stack.push(node)
            node = node.left
        } else {
            const item=stack.pop()
            output.push(item.data)
            if(item.right) {
                node = item.right
            }
        }
    }
    return output
}
// console.log(dfsPreorderByLNR(tree))


// 广度优先遍历-递归算法
function dfsByRcs(tree) {
    const quene=[]
    const output=[]
    function getList(node) {
        if(node) {
            output.push(node.data)
            if(node.left) {
                quene.unshift(node.left)
            }
            if(node.right) {
                quene.unshift(node.right)
            }
            getList(quene.pop())
        }
    }
    getList(tree)
    return output
}

// 广度优先遍历-非递归算法
function dfsByRcs(tree){
    const quene = []
    const output=[]
    quene.push(tree)
    while(quene.length > 0){
        let item = quene.pop()
        if(item){
            output.push(item.data)
            if(item.left){
                quene.unshift(item.left)
            }
            if(item.right) {
                quene.unshift(item.right)
            }
        }
    }
    return output
}
// console.log(dfsByRcs(tree))
