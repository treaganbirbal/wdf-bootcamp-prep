// YOUR CODE BELOW

const lastFridayNight = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
      total += arr[i].amount
    }
    return total
  }

  