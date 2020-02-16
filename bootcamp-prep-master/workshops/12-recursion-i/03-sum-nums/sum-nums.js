// YOUR CODE BELOW

function sumNums(num){
    let sum = 0;
    if(num <= 1){
      return num
    } else {
      return num + sumNums(num - 1)
    }
  }