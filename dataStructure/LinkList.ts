import IList from "../type/IList";

class iNode<T> {
  value: T;
  next: iNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}

class LinkList<T> implements IList<T> {
  head: iNode<T> | null = null;
  length: number = 0;
  getNode(position:number): iNode<T> | null {
    if(position>this.length){
        return null
    }
    let cur = this.head;
    let index = 0;
    while (index++ < position && cur) {
    cur = cur.next;
    }
    return cur
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  size(): number {
    return this.length 
  }
  append(value: T): void {
    const newNode = new iNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.length++;
  }
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.length) {
      return false;
    }
    const newNode = new iNode(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let cur = this.head;
      let pre: iNode<T> | null = null;
      let index = 0;
      while (index++ < position && cur) {
        pre = cur;
        cur = cur.next;
      }
      pre!.next = newNode;
      newNode.next = cur;
    }
    this.length++;
    return true;
  }
  removeAt(position: number): T | null {
    const cur = this.getNode(position)
    if(cur){
        if(position === 0){
            this.head = cur.next

        }else{
            const pre = this.getNode(position - 1)!
            pre.next = cur.next 
        }
        return cur.value
    }
    return null
  }
  get(position: number): T | null {
    const result = this.getNode(position)
    if(result){
        return result.value
    }
    return null
  }
  update(value: T, position: number): boolean {
    const result = this.getNode(position)
    if(result){
        result.value = value
        return true
    }
    return false
  }
  indexOf(value: T): number {
    if(this.length === 0){
        return -1
    }
    let cur = this.head
    let index = 0
    while(cur?.value !== value && cur?.next){
        cur = cur.next
        index ++
    }
    return cur?.value === value ? index:-1
  }
  remove(value: T): T | null {
    if(this.length === 0){
        return null
    }
    let cur = this.head!
    let pre : iNode<T> | null = null
    let index = 0
    while(cur?.value !== value && cur?.next){
        pre = cur
        cur = cur.next
        index ++
    }
    if(index === 0 && this.head){
        this.head = this.head.next
        return  this.head ? this.head.value : null
    }
    pre!.next = cur!.next
    return cur.value
  }
  traverse(): String {
    let result:any[] = []
    let cur = this.head
    while(cur){
        if(cur.value){
          result.push(cur.value)
        }
        cur = cur.next
    }
    return result.join(',')
  }
}
const list = new LinkList<String>()

export default LinkList;
