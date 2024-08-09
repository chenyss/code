import Queue from "../stack/Queue";

function hotPotato(arr: string[], count: number): number {
  if (arr.length === 0) {
    return -1;
  }
  const queue = new Queue<String>();
  arr.map((item) => {
    queue.enqueue(item);
  });

  while (queue.size() > 1) {
    for (let i = 1; i <= count; i++) {
      let val = queue.dequeue();
      if (val) queue.enqueue(val);
    }
    queue.dequeue();
  }
  const resultName = queue.peek();
  return arr.indexOf(resultName as string);
}

export default hotPotato;
