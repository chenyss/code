interface IList<T> {
  // 判断是否为空
  isEmpty(): boolean
  // 元素的个数
  size(): number
  append(value: T): void
  traverse(): void
  insert(value: T, position: number): boolean
  removeAt(position: number): T | null
  get(positon: number): T | null
  update(value: T, position: number): boolean
  indexOf(value: T): number
  remove(value: T): T | null
}

export default IList