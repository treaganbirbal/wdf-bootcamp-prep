// YOUR CODE BELOW

const oddCouple = (arr) => {
    let oddNumArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 1){
        oddNumArr.push(arr[i])
      }
    }
    if(oddNumArr.length > 2){
      return oddNumArr.slice(0, 2)
    }
    return oddNumArr
  }
  