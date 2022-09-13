class MyLocalStorage {
  static localstorage: MyLocalStorage;

  private constructor() {
    console.info("创建了实例");
  }

  public static createMyLocalStorage() {
    if (!this.localstorage) {
      this.localstorage = new MyLocalStorage();
    }
    return this.localstorage;
  }

  set() {}

  get() {}
}

export default MyLocalStorage;
