// YOUR CODE BELOW

const billerBuilder = (state) => {
    if(state === 'NY'){
        return function (price) {
            if(state === 'NY'){
                return price * 1.03 * 1.04
            }
        }
    } 
    if(state === 'NJ'){
        return function (price){
            return price * 1.05 * 1.06625
        }
    }
}

let newJersBiller = biller('NJ');
newJersBiller(100)

console.log()
