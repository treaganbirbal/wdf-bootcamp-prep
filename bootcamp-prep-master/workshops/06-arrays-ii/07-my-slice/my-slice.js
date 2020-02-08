// YOUR CODE BELOW

const mySlice = (arr, startIdx = 0, endIdx = arr.length ) => {
    const output = [];
    
    if(startIdx < 0) startIdx = startIdx + arr.length;
    if(endIdx < 0) endIdx = endIdx + arr.length
    
    for(let i = startIdx; i < endIdx; ++i){
      let currentEl = arr[i]
      output.push(currentEl)
  }
    return output
  }