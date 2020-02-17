// YOUR CODE BELOW

const reverseArray = (array) => {
    if(array.length === 1){
        return array.slice()
    }
    let newArr = []
    let lastEl = array[array.length - 1]
    newArr.push(lastEl)
    let reverseRemainingEls = reverseArray(array.slice(0, -1))
    newArr = newArr.concat(reverseRemainingEls)

    return newArr
}

console.log(reverseArray([1,2,3]))