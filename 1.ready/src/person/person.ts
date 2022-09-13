class Person {
  constructor(public name: string, public age: number, public phone: string) {}

  say(time: string): void {
    console.info(`${this.name} ${this.age} ${this.phone}  ${time}`);
  }
}

const p1 = new Person("qq", 18, "1883416527");

p1.say((+new Date()).toString());

export {};
