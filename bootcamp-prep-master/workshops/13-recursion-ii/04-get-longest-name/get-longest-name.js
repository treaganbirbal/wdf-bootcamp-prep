// YOUR CODE BELOW


let family = {
    'Beverly Marquez': {
      'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
      }
    }
  };


function getLongestName(family){
    let longestName = '';

    for(let name in family){
        if(name.length > longestName.length){
            longestName = name;
        }
        if(family[name]){
            let decentantsLongstName = getLongestName(family[name])
            if(decentantsLongstName > longestName){
                longestName = decentantsLongstName
            }
        }
    }

    return longestName
}

console.log(getLongestName(family))