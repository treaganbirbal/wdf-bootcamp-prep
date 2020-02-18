// YOUR CODE BELOW

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