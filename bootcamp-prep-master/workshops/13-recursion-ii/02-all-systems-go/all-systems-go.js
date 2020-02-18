// YOUR CODE BELOW

function allSystemsGo(systems){
    for(let keys in systems){
        if(typeof(systems[keys]) === 'object'){
            let isValid = allSystemsGo(systems[keys])
            if(!isValid){
                return false
            }
        } else if(!systems[keys]){
            return false
        }
    }
    return true;
}

function allSystemsGo(anObj){
    for(let keys in anObj){
      if(typeof(anObj[keys]) === 'object'){
        let isValid = allSystemsGo(anObj[keys])
        if(!isValid){
          return false
        } 
      } else if(!anObj[keys]){
        return false
      }
    }
    return true;
  }