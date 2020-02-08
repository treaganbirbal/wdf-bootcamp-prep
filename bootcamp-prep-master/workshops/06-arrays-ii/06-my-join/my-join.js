// YOUR CODE BELOW

function myJoin(array, seperator=","){
    let acc = "";
    for(let i = 0; i < array.length; i++){
      if(array[i] === undefined || array[i] === null){
        acc = acc + seperator
        continue
      }
      if(i === array.length - 1){
        acc = acc + array[i];
      }
      else{
        acc = acc + array[i] + seperator;
      }
    }
    return acc;
  }