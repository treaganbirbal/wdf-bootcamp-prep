let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW


tacoCatInc.currentInventory = function(){
  let total = 0
  for(let categories in tacoCatInc){
    if(categories === 'cash'){
      continue;
    }
    let items = tacoCatInc[categories]
     for(let itemName in items){
       let itemObj = items[itemName]
       total += itemObj.cost * itemObj.quantity
     }
  }
  return total
}


tacoCatInc.sale = function(orderObj){
  let total = 0;
    
    for(let categories in orderObj){
      let choices = orderObj[categories]
      total += this[categories][choices].cost
      this.cash += this[categories][choices].cost
      this[categories][choices].quantity --
    }
    return total
  }
  
