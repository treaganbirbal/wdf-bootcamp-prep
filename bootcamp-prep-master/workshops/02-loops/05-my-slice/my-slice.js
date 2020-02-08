// YOUR CODE BELOW

const mySlice = (originalString, startIdx, endIdx) => {
    let output = ''
    if(!startIdx && !endIdx){
      return originalString
    }
    if(!endIdx){
      for(let i = startIdx; i < originalString.length; i++){
        output += originalString[i]
      }
    }
     else {
       for(let i = startIdx; i < endIdx; i++){
         output += originalString[i]
       }
     }
    return output
  }