function firstClassDecorator(targetClass: any) {
  console.info(targetClass.prototype);

  const target = new targetClass();
  target.buy();
}

@firstClassDecorator
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
