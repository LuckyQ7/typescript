function Parent(name, age) {
    this.name = name
    this.age = age
}


Parent.prototype.say = function () {
    console.info(this.name);
}


function Son(name, age, paly, sex) {
    this.paly = paly
    this.sex = sex
    Parent.apply(this, [name, age])
}


function _extends(rootPrototype) {
    return Object.create(rootPrototype, { coun: { value: 3 } })
}

Son.prototype = _extends(Parent.prototype)

Son.prototype.constructor = Son
let son = new Son('qq', 22, '篮球', '男')

son.say()


console.log(son);