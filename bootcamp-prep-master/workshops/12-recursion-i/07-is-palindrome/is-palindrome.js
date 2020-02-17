// YOUR CODE BELOW
const isPalindrome = (str) => {
    str = str.toLowerCase();
    if(str.length === 1){
        return true
    }
    if(str.length === 2){
        return str[0] === str[1]
    }
    let firstLetter = str[0];
    let lastLetter = str.slice(-1);

    if(firstLetter !== lastLetter){
        return false
    }

    let remainingStr = str.slice(1, -1)
    return isPalindrome(remainingStr)
}

console.log(isPalindrome('kayak'))