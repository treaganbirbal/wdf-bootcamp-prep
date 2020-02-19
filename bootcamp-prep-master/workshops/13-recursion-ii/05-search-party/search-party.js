// YOUR CODE BELOW

function searchParty(name, worldObj){

    for(let place in worldObj){
        if(typeof(worldObj[place] === 'string')){
            return [place]
        }
        else if(Array.isArray(worldObj[place])){
            let people = worldObj[place];
            for( let i = 0; i < people.length; i++){
                if(name === people[i]){
                    return [place]
                }
            }
        } else {
            let nextPlace = worldObj[place];
            let resultFromNextPlace = searchParty(name, nextPlace);
            if(resultFromNextPlace){
            return [place].concat(resultFromNextPlace)
            }
        }
    }
    
    return null;
}
