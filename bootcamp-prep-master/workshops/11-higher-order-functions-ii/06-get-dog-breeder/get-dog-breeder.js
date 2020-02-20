// YOUR CODE BELOW

const getDogBreeder = (defaultName, defaultAge) => {
  
  
    return function dogBreeder(name=defaultName, age=defaultAge) {
    if (typeof name === 'number') {
      age = name;
      name = defaultName
    }
  
    let newDog =  {
      name: name,
      age: age
    };
  
    return newDog;
  }
    
    
  }