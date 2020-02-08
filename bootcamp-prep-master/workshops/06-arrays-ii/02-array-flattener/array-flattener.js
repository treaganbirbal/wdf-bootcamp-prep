// YOUR CODE BELOW

function arrayFlattener(array2d){
    let oned = [];
    for(let i = 0; i < array2d.length; i++){
      if(Array.isArray(array2d[i])){
        for(let j = 0; j < array2d[i].length; j++){
          oned.push(array2d[i][j]);
        }
      }
    else{
      oned.push(array2d[i]);
    }
    }
    // returns a new one-d array
    return oned;
  }