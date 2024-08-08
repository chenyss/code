class ArrayStack {
  private data: any[] = [];

  push(element: any): void {
    this.data.push(element);
  }

  pop(): any {
    return this.data.pop();
  }

  peek(): any {
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
