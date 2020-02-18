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

