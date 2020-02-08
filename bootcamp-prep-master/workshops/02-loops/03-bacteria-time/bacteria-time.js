// YOUR CODE BELOW

const bacteriaTime = (currentNum, targetNum) => {
    let numOfMins = 0
    if(targetNum < currentNum){
      return 'targetNum must be larger than currentNum'
    } 
    while(targetNum > currentNum){
      currentNum *= 2
      numOfMins +=20
    }
    return numOfMins
  }