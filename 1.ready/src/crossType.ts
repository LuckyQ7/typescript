// 交叉类型
type objectType1 = { name: string };
type objectType2 = { age: number };
type objectType3 = { sex: number };

let p1: objectType1 & objectType2 & objectType3 = {
  name: "name",
  age: 18,
  sex: 1,
};

let p2: objectType1 | objectType2 | objectType3 = {
  name: "name",
  age: 18,
};



