// class ArrayList {
//   constructor(public elements: Array<object>) {}

//   get(index: number) {
//     return this.elements[index];
//   }

//   removeValue(index: number): number;
//   removeValue(value: object): object;
//   removeValue(value: number | object): number | object {
//     this.elements = this.elements.filter((item, index) => {
//       if (typeof value == "number") {
//         return value !== index;
//       } else {
//         return value !== item;
//       }
//     });
//     return value;
//   }
// }

// const array = new ArrayList([{ id: 1 }, { id: 2 }]);

class ArrayList<T> {
  constructor(public elements: Array<object>) {}

  get(index: number) {
    return this.elements[index];
  }

  
  add(element: T) {
    
  }

  removeValue(index: number): number;
  removeValue(value: object): object;
  removeValue(value: number | object): number | object {
    this.elements = this.elements.filter((item, index) => {
      if (typeof value == "number") {
        return value !== index;
      } else {
        return value !== item;
      }
    });
    return value;
  }
}

const array = new ArrayList([{ id: 1 }, { id: 2 }]);
