// YOUR CODE BELOW

function dogBreeder(name='Steve', age=0){
    const dogObj = {}
    if(!age){
        if(typeof name === 'number'){
        age = name;
        name = 'Steve'
        }
    }
        dogObj['name'] = name;
        dobObj['age'] = age

    return dogObj
  }