"use strict";
class Person {
    constructor(name, age, phone) {
        this.name = "";
        this.age = 0;
        this.phone = "";
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    say(time) {
        console.info(`${this.name} ${this.age} ${this.phone}  ${time}`);
    }
}
const p1 = new Person("qq", 18, "1883416527");
p1.say((+new Date()).toString());
