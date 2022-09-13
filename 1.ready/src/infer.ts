class People {
  constructor(public name: string, public age: number) {}
}

type ConstructorParametersType<T extends Constructor<object>> = T extends new (
  ...args: infer P
) => any
  ? P
  : never;

let constructorParameters: ConstructorParametersType<
  new (name: string, age: number) => People
>;

type constructorParameters = ConstructorParametersType<typeof People>;

type Constructor<T> = new (...args: any[]) => T;

function createInstance<T, P extends Constructor<object>>(
  constructor: Constructor<T>,
  ...args: ConstructorParametersType<P>
) {
  return new constructor(...args);
}

let p1 = createInstance<People, typeof People>(People, "lqq", 4);

type onType<T> = T extends keyof any ? T : never;

console.info(p1);

export {};
