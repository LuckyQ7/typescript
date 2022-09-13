export default class ArrayList {
  public elements: Array<object>;
  public index: number = 0;
  constructor() {
    this.elements = [];
  }

  public add(element: object) {
    this.elements[this.index++] = element;
  }

  public size() {
    return this.elements ? this.elements.length : 0;
  }

  get(index: number): object {
    return this.elements[index] ;
  }
}
