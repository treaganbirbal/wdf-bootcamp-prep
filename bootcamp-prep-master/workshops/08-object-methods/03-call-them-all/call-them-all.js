// YOUR CODE BELOW

function callThemAll(obj, val) {
    let methodResults = []
    for(let key in obj){
       let currentVal = obj[key]
       
       if(typeof currentVal === 'function'){
        let methodResult =  currentVal(val)
        methodResults.push(methodResult)
       }
    }
    return methodResults
  }