// YOUR CODE BELOW

const sumDigits = (num) => {
    let str = num.toString()
    if(str.length === 1){
        return num
    }
    let sum = 0;
    sum += Number(str[0])
    sum += sumDigits(Number(str.slice(1)))
    // console.log(sum)
    return sum
}

console.log(sumDigits(1234))