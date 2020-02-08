// YOUR CODE BELOW

const myIndexOf = (source, searchValue, startIdx=0) => {
    for(let i = startIdx; i <= source.length - searchValue.length; i++){
      let subStr = source.slice(i, i + searchValue.length);
      
      if(subStr === searchValue){
        return i
      }
    }
    return -1
  }