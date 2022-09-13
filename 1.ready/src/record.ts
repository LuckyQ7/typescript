// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

type Record<T> = {
  [P in keyof any]: T;
};

const symbolGoodId: unique symbol = Symbol("goodid");

type Good = {
  [symbolGoodId]: number;
  name: string;
  price: number;
};

let goodsList: Good[] = [
  {
    [symbolGoodId]: 0,
    name: "苹果",
    price: 20,
  },
  {
    [symbolGoodId]: 1,
    name: "橘子",
    price: 200,
  },
];

type goodsRecordType = Record<Good>;

const result: goodsRecordType = {};

goodsList.forEach((good) => {
  result[good[symbolGoodId]] = good;
});

console.info(result);

export {};
