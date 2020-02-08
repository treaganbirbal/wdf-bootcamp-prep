// YOUR CODE BELOW

const evenAndOdd = (arr) => {
    const output = [];
    const evenArr = [];
    const oddArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2){
        oddArr.push(arr[i])
      } else {
        evenArr.push(arr[i])
      }
    }
    output.push(evenArr, oddArr)
    return output
    
  }
  
