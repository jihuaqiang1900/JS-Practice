class Vue{
    constructor(props) {
        this.data = props.data
        observe(this.data)
    }
    $watch(prop, cb) {
        return new Watch(this, prop, cb)
    }
}

class Dep {
    constructor() {
        this.depQuene=[]
    }

    depend() {
        dep.target.addDep(this)
    }

    notify() {
        this.depQuene.forEach((item) => {item.update()})
    }

}
class Watch{
    constructor(vm, prop, cb) {
        this.vm = vm
        this.key = prop
        this.cb = cb
        this.value = this.get()
    }

    update() {
        let value = this.get()
        this.cb.call(this.vm, value)
    }

    get() {
        Dep.target = this
        let value = this.$vm.data[this.key]
        Dep.target = null
        return value
    }
}

function observe(data) {
    if(!data) {
        return
    }
    object.keys(data).forEach((item) =>{
        defineProxy(this, item, data[item])
    })

    function defineProxy(vm, key, value) {
        let dep = new Dep()
        let childOb = observefn(value)
        Object.defineProperty(vm, key, {
            enumerable: true,
            configurable: true,
            get() {
                dep.depend()
                return value
            },
            set(newval) {
                val = newval
                dep.notify()
            }
        })

    }
    
}