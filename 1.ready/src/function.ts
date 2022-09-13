class People {
  constructor(public name: string, public age: number) {}
  say() {
    console.info(this.name);
  }
}

type TPeople = new (...args: any) => any;
interface IPeople<T> {
  new (...args: any): T;
}

function GetPeople<T>(Constructor: IPeople<T>): T {
  return new Constructor("name", 18);
}

let p1 = GetPeople<People>(People);

p1.say();

type funType = (one: number, two: string) => string;

let fun1: funType = function (one: number, two: string): string {
  return "abc";
};

type people = {
  name: string;
  age: number;
};
let people: people = {
  name: "q",
  age: 12,
};

function infoPeople(p: people) {
  const { name, age } = p;
}

const { age, name }: people = people;

// fun1(1, "abc", "av");

export {};
