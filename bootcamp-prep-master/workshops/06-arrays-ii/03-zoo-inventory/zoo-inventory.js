// YOUR CODE BELOW

const zooInventory = (multiArr) => {
    const output = [];
    
    for(let i =0; i < multiArr.length; i++){
        let sentence = '';
  
      let name = multiArr[i][0]
      let animalType = multiArr[i][1][0]
      let age = multiArr[i][1][1]
      sentence += name + ' the ' + animalType + ' is ' +        age + '.' 
      output.push(sentence)
      // sentence = ''
    }
    
    //return a 1d array with each element is a sentence of the animals
    return output
  }