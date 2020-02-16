// YOUR CODE BELOW

function backwardStr(str){
    if(str.length === 1){
        console.log(str)
    }
    else {
        let lastLetter = str[str.length - 1]
        console.log(lastLetter)
        str = str.slice(0, -1)
        backwardStr(str)
    }
}