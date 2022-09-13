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


Son.prototype = new Parent()

let son = new Son('qq', 22, '篮球', '男')
