class Foo {
  constructor(public name: string, public age: number) {}
}

let f = new Foo("爸爸", 30);

console.info(f);

class Son {
  constructor(public paly: string, public sex: string) {}
}

// Son.prototype = new Foo("儿子", 12);
