// YOUR CODE BELOW

const stringify = (cb) => {
    return function (){
        return String(cb)
    }
}

const returnsNum = (num) => {
    return num
}

console.log(stringify(returnsNum))