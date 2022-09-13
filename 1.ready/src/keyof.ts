// import { type } from "os";

// type Tobject = { name: string; age: number };

// let obj: Tobject = { name: "1", age: 18 };

// let obj2 = { name: "123" };

// type typeofObj = keyof typeof obj2;

// let keyofObj: typeofObj = "name";

// type orderType = typeof Order;
// let keyofOrder: keyof orderType = "age";

// class Food {
//   constructor(public age: number, public sex: string) {}
// }

// function foodKey<T extends object, K extends keyof T>(object: T, key: K) {}

// foodKey(new Food(1, "ss"), "sex");

class ObjectImpl<T extends object, K extends keyof T> {
  _object!: T;
  _key!: K;

  constructor(object_: T, key_: K) {
    this._object = object_;
    this._key = key_;
  }

  getValue(): T[K] {
    return this._object[this._key];
  }

  setValue(newValue: T[K]) {
    this._object[this._key] = newValue;
  }
}

class Order {
  static age: string;
  public phone!: number;
  constructor(_phone: number) {
    this.phone = _phone;
  }
}

const order = new Order(165156456);

const obj22 = new ObjectImpl<Order, "phone">(order, "phone");

console.info(obj22.getValue());
// 类型“string”的参数不能赋给类型“number”的参数
obj22.setValue("213");

console.info(obj22.getValue());

export {};
