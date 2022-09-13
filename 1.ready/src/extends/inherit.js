function Parent(name, age) {
    this.name = name
    this.age = age
}


Parent.prototype.say = function () {
    console.info(this.name);
}


function createNewPrototypeObj(rootPrototype, construct) {
    function Middle() {
        this.count = 3
        this.construct = construct
    }
    Middle.prototype = rootPrototype

    return new Middle()
}


function Son(name, age, paly, sex) {
    this.paly = paly
    this.sex = sex
    Parent.apply(this, [name, age])
}


Son.prototype = createNewPrototypeObj(Parent.prototype, Son)


let son = new Son('qq', 22, '篮球', '男')

console.info(son);