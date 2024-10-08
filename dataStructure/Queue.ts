import IQueue from "../type/IQueue";

class Queue<T> implements IQueue<T> {
    private data: T[] = [];

    enqueue(element: T): void {
        this.data.push(element)
    }
    dequeue(): T | undefined {
       return this.data.shift()
    }
    peek(): T | undefined {
        return this.data[0]
    }
    isEmpty(): boolean {
        return this.data.length === 0
    }
    size(): number {
        return this.data.length
    }
}

export default  Queue