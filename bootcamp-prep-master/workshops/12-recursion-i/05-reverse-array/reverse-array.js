// YOUR CODE BELOW

const reverseArray = (array) => {
    if(array.length === 1){
        return array.slice()
    }
    const newArr = []
    let lastEl = array[array.length - 1]
    newArr.push(lastEl)
    let remainingEls = array.slice(0, -1)
    newArr = newArr.concat(remainingEls)

    return newArr
}