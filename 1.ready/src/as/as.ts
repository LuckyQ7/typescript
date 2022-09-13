// class Parent1 {
//   constructor(public address: string, public name: string) {}
//   eat() {}
// }

// class Son1 extends Parent1 {
//   constructor() {
//     super("ada", "231");
//     super.eat();
//   }

//   play() {}
// }

// class Foo1 {
//   public age!: number;
//   eat() {}
// }

// let p1 = <Son1>new Parent1("aa", "aa");
// p1.play();

// let s1 = new Parent1("aa", "aa");

// s1.play();

// let pp = new Parent1("aa", "aa");

// let f1 = new Foo1();
// let f2 = f1 as Parent1;

// let ff = new Parent1("aa", "aa") as Foo1;

// interface IType {
//   age: string;
//   name: string;
//   address: string;
//   height: number;
// }

// class Apple {
//   constructor(
//     public age: string,
//     public name: string,
//     public address: string,
//     public sex: string
//   ) {}

//   play() {}
// }

// const apple = new Apple("18", "aa", "asd1a2s", "123");
// apple as IType;

// const obj: IType = {
//   age: "18",
//   name: "aa",
//   address: "213asdsa",
//   height: 18,
// };

// obj as Apple;

// let [username, age, ...rest]: [name_: string, age_: number, ...rest: any[]] = [
//   "aa",
//   18,
//   "我我我",
// ];

// console.info(username);

// let constNum3 = [8, 1, 0, 120] as const;

// let [x, ...y]: readonly [any, ...any] = constNum3;

let constNum3 = [8, 1, 0, 120];

let [x, ...y]: [...any] = constNum3;

console.info(x);
console.info(y);

export {};
