function Parent(name, age) {
    this.name = name
    this.age = age
}

let parent = new Parent('爸爸', 30)

function Son(paly, sex) {
    this.paly = paly
    this.sex = sex
}

Son.prototype = new Parent('叭叭叭2', 19)

// console.info(Son.prototype);

let son = new Son('打篮球', '男')
Son.prototype.constructor = Son


console.info('son', son);
console.info('son', son.name)