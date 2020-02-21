// 3. Long-Named Potion Brewers (Coding)
// Write a function namePotionBrewers that takes a nested object potions, and returns a string of names of brewers where each name's length is greater than 12, or an empty string if there are no brewers. The string of names must be connected by a &. Please use Object.keys() in your solution, and any array methods you would like.

// Note: Assume all potions are brewed by a different witch/wizard.

// function namePotionBrewers(obj){
//     let nameOutput = ''

//     const potionObj = Object.keys(obj)
//     const brewerNames = []
//     for(let i = 0; i < potionObj.length; i++){
//         let potionName = potionObj[i];
//         let brewer = obj[potionName].brewedBy
//         if(brewer.length > 12){
//             brewerNames.push(brewer)
//         }
//         nameOutput = brewerNames.join(' & ')
//     }
//     return nameOutput
// }

// const hpObj = {
//     "amortentia": {
//       "definition": "creates powerful obsession and infatuation",
//       "brewedBy": "Romilda Vane"
//     },
//     "polyjuice": {
//       "definition": "causes deep slumber",
//       "brewedBy": "Hermione Granger"
//     },
//     "felix felicis": {
//       "definition": "causes the user to have liquid luck!",
//       "brewedBy": "Horace Slughorn"
//     }
//   }

//   console.log(namePotionBrewers(hpObj))

// 4. Grow Up into a Higher Order Function! (Coding)
// We all change as we grow, and eventually become adults; we're like a perfectly mutable object. Create a higher order function growingUpHelper that accepts an object, human, as an argument and returns a function. That function will add the following property to the human object and return the object: the key is adultingLevel, and the value is 1.

function growingUpHelper(humanObj){
    return function () {
        if(!humanObj.adultingLevel) humanObj['adultLevel'] = 1
        return humanObj
    }
}

const sarah = { favoriteColor: 'red' }
const saraGrowsUp = growingUpHelper(sarah)
console.log(saraGrowsUp())
