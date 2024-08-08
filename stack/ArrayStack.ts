import IStack from "../type/IStack";

class ArrayStack<T> implements IStack<T> {
  private data: any[] = [];

  push(element: T): void {
    this.data.push(element);
  }

  pop(): T {
    return this.data.pop();
  }

  peek(): T {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
    return this.data.length;
  }
}

export default ArrayStack;
