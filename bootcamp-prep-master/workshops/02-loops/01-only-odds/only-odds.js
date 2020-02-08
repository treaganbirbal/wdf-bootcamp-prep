// YOUR CODE BELOW

const onlyOdds = (num) => {
    let sum = 0;
    if(num < 1){
      return 0
    }
    for(let i = 0 ; i <= num; i++){
      if(i % 2 === 1){
        sum = sum + i
      }
    }
    return sum
  }
  