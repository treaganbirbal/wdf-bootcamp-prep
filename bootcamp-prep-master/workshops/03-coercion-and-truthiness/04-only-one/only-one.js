// YOUR CODE BELOW
const onlyOne = (arg1, arg2, arg3) => {
    if(!!arg1 && !!arg2 && !!arg3){
      return false
    }
    if(!arg1 && !arg2 && arg3){
      return true
    }
    if(!arg1 && arg2 && !arg3){
      return true
    } if(arg1 && !arg2 && !arg3){
      return true
    } if(!arg1 && !arg2 && !arg3){
      return false
    } if(!arg1 && arg2 && arg3){
      return false
    } 
    if(arg1 && !arg2 && arg3){
      return false
    }
    if(arg1 && arg2 && !arg3){
      return false
    }
  }
  