// YOUR CODE BELOW

const howEqual = (arg1, arg2) => {
    if(arg1 === arg2){
      return 'strictly'
    } 
    if(arg1 == arg2){
      return 'loosely'
    }
    if(arg1 !== arg2){
      return 'not equal'
    }
  }