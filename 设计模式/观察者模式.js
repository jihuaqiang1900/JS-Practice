class Subject {
    constructor() {
        this.observers = [];
    }
 
    add(observer) {
        this.observers.push(observer);
    }
 
    notify(...args) {
        this.observers.forEach(observer => observer.update(...args));
    }
}
 
class Observer {
    update(...args) {
        console.log(...args);
    }
}
 
// 创建观察者ob1
let ob1 = new Observer();
// 创建观察者ob2
let ob2 = new Observer();
// 创建目标sub
let sub = new Subject();
// 目标sub添加观察者ob1 （目标和观察者建立了依赖关系）
sub.add(ob1);
// 目标sub添加观察者ob2
sub.add(ob2);
// 目标sub触发SMS事件（目标主动通知观察者）
sub.notify('I fired `SMS` event');