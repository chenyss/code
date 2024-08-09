import ArrayStack from "../dataStructure/ArrayStack"

function decimalToBinary(decimal:number):string{
    const stack = new ArrayStack<number>()
    while(decimal > 0){
        const data = decimal % 2
        stack.push(data)
        decimal = Math.floor(decimal / 2)
    }
    let binary = ''
    while(stack.size() > 0){
        binary += stack.pop()
    }
    return binary
}

export default decimalToBinary