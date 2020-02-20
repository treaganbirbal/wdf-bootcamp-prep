// YOUR CODE BELOW

const stringify = (cb) => {
    return function (){
        return String(cb)
    }
}