function firstClassDecorator(params: any) {
  return function (targetClass: any) {
    console.info("参数:", params);
    console.info(
      "targetClass.prototype.constructor.name:",
      targetClass.prototype.constructor.name
    );

    Object.keys(targetClass.prototype).forEach((methodName) => {
      console.info("method:", methodName);
      const dataProp = Object.getOwnPropertyDescriptor(
        targetClass.prototype,
        methodName
      );

      console.info("方法数据属性:", dataProp);
    });
  };
}

@firstClassDecorator("aa")
class CustomerService {
  name: string = "超市2号";
  constructor() {}
  buy() {
    console.log(this.name, "购买");
  }

  placeOrder() {
    console.log(this.name, "下单");
  }
}

export {};
