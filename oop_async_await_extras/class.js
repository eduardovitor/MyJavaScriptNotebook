class MyClass {
  #instancePrivateField = 1;
  instanceProperty = 2;
  getInstanceValues() {
    return [
      this.#instancePrivateField,
      this.instanceProperty,
    ];
  }
}
const inst = new MyClass();
