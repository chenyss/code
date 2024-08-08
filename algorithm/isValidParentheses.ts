import ArrayStack from "../stack/ArrayStack";

function isValid(str: string): boolean {
  let result = true
  const arr = new ArrayStack<string>()
  for(let i = 0;i<str.length;i++){
    const item = str[i]
    switch(item){
        case "(":
            arr.push(')')
            break
        case "[":
            arr.push(']')
            break
        case "{":
            arr.push('}')
            break
        default:
            if(item!==arr.pop()) {
                result = false
            }
            break
    }
  }
  return result;
}

export default isValid;
