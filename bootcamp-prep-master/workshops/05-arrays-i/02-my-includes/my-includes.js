// YOUR CODE BELOW

const myIncludes = (arr, searchValue) => {
    for(let i = 0 ; i < arr.length; i++){
      if(searchValue === arr[i]){
        return true
      }
    }
    return false
  }
  