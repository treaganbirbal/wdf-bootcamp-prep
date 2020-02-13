// YOUR CODE BELOW

const compareObjects = (obj1, obj2) => {
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    
    
    if(obj1Keys.length !== obj2Keys.length){
        return false
      }
    else {
    for(let key in obj1){
      if(obj1[key] !== obj2[key]){
        return false
      }
    }
    
  }
    return true
  }