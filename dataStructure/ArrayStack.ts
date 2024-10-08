import IStack from "../type/IStack";

class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];

  push(element: T): void {
    this.data.push(element);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
    return this.data.length;
  }

  log():string{
    let binary = ''
    const copyData = JSON.parse(JSON.stringify(this.data))
    while(copyData.length > 0){
        binary += copyData.pop()
    }
    return binary
  }
}

export default ArrayStack;
