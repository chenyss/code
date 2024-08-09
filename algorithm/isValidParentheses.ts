import ArrayStack from "../dataStructure/ArrayStack";

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
            if(![')',']','}'].includes(item)){
                break
            }
            let reverseItem = arr.pop() ?? ''
            while(![')',']','}'].includes(reverseItem) && arr.size() !== 0){
                reverseItem = arr.pop() ?? ''
            }
            if(item!==reverseItem) {
                result = false
            }       
            break
    }
  }
  return arr.size() === 0 ? result:false;
}

export default isValid;
