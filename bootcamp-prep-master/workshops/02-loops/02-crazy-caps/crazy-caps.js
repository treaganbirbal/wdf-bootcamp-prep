// YOUR CODE BELOW

const crazyCaps = (str) => {
    let output = '';
    for(let i = 0; i < str.length; i++){
      if(i % 2 === 1){
        output += str[i].toUpperCase()
      }
      if(i % 2 === 0){
        output += str[i].toLowerCase()
      }
    }
    return output
  }